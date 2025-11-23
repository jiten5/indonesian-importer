# IndonesianImporter Deployment Script
# This script automates the Git setup process

Write-Host "========================================"
Write-Host "  Indonesian Importer - Git Setup"
Write-Host "========================================"
Write-Host ""

# Check if Git is installed
Write-Host "Checking prerequisites..."
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "[ERROR] Git is not installed!"
    Write-Host "Please install Git from: https://git-scm.com/download/win"
    Write-Host "After installation, restart PowerShell and run this script again."
    exit 1
}

Write-Host "[OK] Git is installed"

# Check if Node.js is installed
$nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeInstalled) {
    Write-Host "[ERROR] Node.js is not installed!"
    exit 1
}

Write-Host "[OK] Node.js is installed"
Write-Host ""

# Check if already initialized
if (Test-Path .git) {
    Write-Host "[WARNING] Git repository already initialized"
    $reinit = Read-Host "Do you want to reinitialize? (y/N)"
    if ($reinit -eq 'y' -or $reinit -eq 'Y') {
        Remove-Item -Recurse -Force .git
        Write-Host "[OK] Removed existing Git repository"
    } else {
        Write-Host "Skipping Git initialization..."
    }
}

# Initialize Git if needed
if (-not (Test-Path .git)) {
    Write-Host "Initializing Git repository..."
    git init
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] Git repository initialized"
    } else {
        Write-Host "[ERROR] Failed to initialize Git repository"
        exit 1
    }
}

# Check Git configuration
Write-Host ""
Write-Host "Checking Git configuration..."
$userName = git config --global user.name
$userEmail = git config --global user.email

if (-not $userName) {
    Write-Host "Git user name not configured"
    $name = Read-Host "Enter your name"
    git config --global user.name "$name"
    Write-Host "[OK] Git user name set to: $name"
}

if (-not $userEmail) {
    Write-Host "Git user email not configured"
    $email = Read-Host "Enter your email"
    git config --global user.email "$email"
    Write-Host "[OK] Git user email set to: $email"
}

Write-Host ""
Write-Host "Git Configuration:"
Write-Host "  Name:  $(git config --global user.name)"
Write-Host "  Email: $(git config --global user.email)"
Write-Host ""

# Stage all files
Write-Host "Staging all files..."
git add .
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] All files staged"
} else {
    Write-Host "[ERROR] Failed to stage files"
    exit 1
}

# Show status
Write-Host ""
Write-Host "Git Status:"
git status --short

# Commit
Write-Host ""
Write-Host "Creating initial commit..."
git commit -m "chore: initial commit - production-ready Indonesian Importer application"

if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Initial commit created"
} else {
    Write-Host "[ERROR] Failed to create commit"
    exit 1
}

# Rename branch to main
Write-Host ""
Write-Host "Setting main branch..."
git branch -M main
Write-Host "[OK] Branch set to 'main'"

Write-Host ""
Write-Host "========================================"
Write-Host "  Git Setup Complete!"
Write-Host "========================================"
Write-Host ""

# Next steps
Write-Host "NEXT STEPS:"
Write-Host ""
Write-Host "1. Create GitHub Repository:"
Write-Host "   - Go to: https://github.com/new"
Write-Host "   - Repository name: IndonesianImporter"
Write-Host "   - Make it Public or Private"
Write-Host "   - DO NOT initialize with README"
Write-Host "   - Click 'Create repository'"
Write-Host ""

Write-Host "2. Push to GitHub:"
Write-Host "   Run this command (replace YOUR_USERNAME):"
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/IndonesianImporter.git"
Write-Host "   git push -u origin main"
Write-Host ""

Write-Host "3. Deploy to Vercel:"
Write-Host "   Option A - Vercel Dashboard (Recommended):"
Write-Host "   - Visit: https://vercel.com"
Write-Host "   - Click 'Add New' then 'Project'"
Write-Host "   - Import your GitHub repository"
Write-Host "   - Click 'Deploy'"
Write-Host ""
Write-Host "   Option B - Vercel CLI:"
Write-Host "   npm install -g vercel"
Write-Host "   vercel login"
Write-Host "   vercel --prod"
Write-Host ""

Write-Host "4. Verify Deployment:"
Write-Host "   - Check all pages load"
Write-Host "   - Test navigation and forms"
Write-Host "   - Run Lighthouse audit"
Write-Host "   - Verify dark mode works"
Write-Host ""

Write-Host "For detailed instructions, see:"
Write-Host "   - DEPLOYMENT_GUIDE.md"
Write-Host "   - VERCEL_DEPLOYMENT.md"
Write-Host "   - PHASE6_VALIDATION_REPORT.md"
Write-Host ""

Write-Host "========================================"
Write-Host "  Ready for Deployment!"
Write-Host "========================================"
