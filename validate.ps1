#!/usr/bin/env pwsh
# Pre-Deployment Validation Script for Windows PowerShell
# Run this before deploying to production

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PRE-DEPLOYMENT VALIDATION SCRIPT" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$ErrorCount = 0
$WarningCount = 0
$PassCount = 0

# Function to print status
function Print-Status {
    param($Message, $Status)
    switch ($Status) {
        "PASS" { 
            Write-Host "[✓] $Message" -ForegroundColor Green
            $script:PassCount++
        }
        "FAIL" { 
            Write-Host "[✗] $Message" -ForegroundColor Red
            $script:ErrorCount++
        }
        "WARN" { 
            Write-Host "[!] $Message" -ForegroundColor Yellow
            $script:WarningCount++
        }
        "INFO" { 
            Write-Host "[i] $Message" -ForegroundColor Cyan
        }
    }
}

# 1. Check Node.js version
Write-Host "`n1. Checking Node.js version..." -ForegroundColor Cyan
$nodeVersion = node --version
if ($LASTEXITCODE -eq 0) {
    Print-Status "Node.js version: $nodeVersion" "PASS"
} else {
    Print-Status "Node.js not found" "FAIL"
}

# 2. Check npm version
Write-Host "`n2. Checking npm version..." -ForegroundColor Cyan
$npmVersion = npm --version
if ($LASTEXITCODE -eq 0) {
    Print-Status "npm version: $npmVersion" "PASS"
} else {
    Print-Status "npm not found" "FAIL"
}

# 3. Install dependencies
Write-Host "`n3. Checking dependencies..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Print-Status "node_modules exists" "PASS"
} else {
    Print-Status "Installing dependencies..." "INFO"
    npm install
    if ($LASTEXITCODE -eq 0) {
        Print-Status "Dependencies installed" "PASS"
    } else {
        Print-Status "Failed to install dependencies" "FAIL"
    }
}

# 4. Run ESLint
Write-Host "`n4. Running ESLint..." -ForegroundColor Cyan
$lintOutput = npm run lint 2>&1
if ($LASTEXITCODE -eq 0) {
    Print-Status "ESLint: No errors" "PASS"
} else {
    $errorLines = ($lintOutput | Select-String "error" | Measure-Object).Count
    $warnLines = ($lintOutput | Select-String "warning" | Measure-Object).Count
    
    if ($errorLines -gt 0) {
        Print-Status "ESLint: $errorLines errors found" "FAIL"
        Write-Host $lintOutput -ForegroundColor Red
    } elseif ($warnLines -gt 10) {
        Print-Status "ESLint: $warnLines warnings (>10 threshold)" "WARN"
    } else {
        Print-Status "ESLint: $warnLines warnings (<10 threshold)" "PASS"
    }
}

# 5. Run TypeScript check
Write-Host "`n5. Running TypeScript check..." -ForegroundColor Cyan
$tscOutput = npx tsc --noEmit 2>&1
if ($LASTEXITCODE -eq 0) {
    Print-Status "TypeScript: No type errors" "PASS"
} else {
    $tsErrors = ($tscOutput | Select-String "error TS" | Measure-Object).Count
    Print-Status "TypeScript: $tsErrors type errors found" "FAIL"
    Write-Host ($tscOutput | Select-Object -First 10) -ForegroundColor Red
}

# 6. Check for console.log statements
Write-Host "`n6. Checking for console.log statements..." -ForegroundColor Cyan
$consoleLogs = Get-ChildItem -Recurse -Include *.tsx,*.ts,*.jsx,*.js -Path app,components,lib -ErrorAction SilentlyContinue | 
    Select-String "console\.log" -CaseSensitive | 
    Measure-Object
    
if ($consoleLogs.Count -eq 0) {
    Print-Status "No console.log found in app code" "PASS"
} else {
    Print-Status "$($consoleLogs.Count) console.log statements found" "WARN"
}

# 7. Check for .env file
Write-Host "`n7. Checking environment configuration..." -ForegroundColor Cyan
if (Test-Path ".env.example") {
    Print-Status ".env.example exists" "PASS"
} else {
    Print-Status ".env.example not found" "WARN"
}

if (Test-Path ".env") {
    Print-Status ".env file exists (do not commit this!)" "WARN"
} else {
    Print-Status ".env file not found (create for local dev)" "INFO"
}

# 8. Run production build
Write-Host "`n8. Running production build..." -ForegroundColor Cyan
Write-Host "This may take 1-2 minutes..." -ForegroundColor Yellow
$buildOutput = npm run build 2>&1
if ($LASTEXITCODE -eq 0) {
    Print-Status "Production build successful" "PASS"
    
    # Check bundle size
    if (Test-Path ".next") {
        $buildSize = (Get-ChildItem .next -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
        Print-Status "Build size: $([math]::Round($buildSize, 2)) MB" "INFO"
    }
} else {
    Print-Status "Production build failed" "FAIL"
    Write-Host ($buildOutput | Select-String "error" | Select-Object -First 10) -ForegroundColor Red
}

# 9. Run unit tests (if configured)
Write-Host "`n9. Running unit tests..." -ForegroundColor Cyan
if (Test-Path "jest.config.ts") {
    $testOutput = npm test -- --passWithNoTests 2>&1
    if ($LASTEXITCODE -eq 0) {
        Print-Status "Unit tests passed" "PASS"
    } else {
        Print-Status "Some unit tests failed" "WARN"
        Write-Host ($testOutput | Select-String "FAIL" | Select-Object -First 5) -ForegroundColor Yellow
    }
} else {
    Print-Status "Jest not configured (skipping)" "INFO"
}

# 10. Check Git status
Write-Host "`n10. Checking Git status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain 2>&1
if ($LASTEXITCODE -eq 0) {
    if ($gitStatus) {
        Print-Status "Uncommitted changes found" "WARN"
        Write-Host $gitStatus -ForegroundColor Yellow
    } else {
        Print-Status "Git working directory clean" "PASS"
    }
} else {
    Print-Status "Git not initialized or not available" "INFO"
}

# 11. Check .gitignore
Write-Host "`n11. Checking .gitignore..." -ForegroundColor Cyan
if (Test-Path ".gitignore") {
    $gitignoreContent = Get-Content ".gitignore" -Raw
    if ($gitignoreContent -match ".env" -and $gitignoreContent -match "node_modules" -and $gitignoreContent -match ".next") {
        Print-Status ".gitignore properly configured" "PASS"
    } else {
        Print-Status ".gitignore missing critical entries" "WARN"
    }
} else {
    Print-Status ".gitignore not found" "FAIL"
}

# 12. Check for package-lock.json
Write-Host "`n12. Checking package-lock.json..." -ForegroundColor Cyan
if (Test-Path "package-lock.json") {
    Print-Status "package-lock.json exists" "PASS"
} else {
    Print-Status "package-lock.json not found (run npm install)" "WARN"
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  VALIDATION SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Passed: $PassCount" -ForegroundColor Green
Write-Host "Warnings: $WarningCount" -ForegroundColor Yellow
Write-Host "Errors: $ErrorCount" -ForegroundColor Red

if ($ErrorCount -eq 0 -and $WarningCount -lt 5) {
    Write-Host "`nREADY FOR DEPLOYMENT!" -ForegroundColor Green
    exit 0
} elseif ($ErrorCount -eq 0) {
    Write-Host "`nDEPLOYMENT POSSIBLE (but review warnings)" -ForegroundColor Yellow
    exit 0
} else {
    Write-Host "`nNOT READY FOR DEPLOYMENT (fix errors first)" -ForegroundColor Red
    exit 1
}
