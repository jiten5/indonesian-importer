'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import Radio from '@/components/ui/Radio'
import { Mail, Search, Heart, Download } from 'lucide-react'

export default function ComponentsPage() {
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('basic')

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Component Showcase
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              All UI components from the design system
            </p>
          </div>

          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Buttons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card padding="lg">
                <Card.Title className="mb-4">Variants</Card.Title>
                <div className="space-y-3">
                  <Button variant="primary" size="md" className="w-full">
                    Primary
                  </Button>
                  <Button variant="secondary" size="md" className="w-full">
                    Secondary
                  </Button>
                  <Button variant="outline" size="md" className="w-full">
                    Outline
                  </Button>
                  <Button variant="ghost" size="md" className="w-full">
                    Ghost
                  </Button>
                  <Button variant="danger" size="md" className="w-full">
                    Danger
                  </Button>
                </div>
              </Card>

              <Card padding="lg">
                <Card.Title className="mb-4">Sizes</Card.Title>
                <div className="space-y-3">
                  <Button variant="primary" size="sm" className="w-full">
                    Small
                  </Button>
                  <Button variant="primary" size="md" className="w-full">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg" className="w-full">
                    Large
                  </Button>
                </div>
              </Card>

              <Card padding="lg">
                <Card.Title className="mb-4">With Icons</Card.Title>
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="md"
                    leftIcon={<Mail className="w-4 h-4" />}
                    className="w-full"
                  >
                    Left Icon
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    rightIcon={<Download className="w-4 h-4" />}
                    className="w-full"
                  >
                    Right Icon
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    isLoading={loading}
                    onClick={() => {
                      setLoading(true)
                      setTimeout(() => setLoading(false), 2000)
                    }}
                    className="w-full"
                  >
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Badges
            </h2>
            <Card padding="lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Primary</p>
                  <Badge variant="primary">Primary</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Secondary</p>
                  <Badge variant="secondary">Secondary</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Success</p>
                  <Badge variant="success">Success</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Error</p>
                  <Badge variant="error">Error</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Warning</p>
                  <Badge variant="warning">Warning</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Info</p>
                  <Badge variant="info">Info</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Default</p>
                  <Badge variant="default">Default</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Outline</p>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <Badge variant="success" size="sm">Small</Badge>
                <Badge variant="success" size="md">Medium</Badge>
                <Badge variant="success" size="lg">Large</Badge>
              </div>
            </Card>
          </section>

          {/* Form Components */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Form Components
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card padding="lg">
                <Card.Title className="mb-6">Inputs & Textarea</Card.Title>
                <div className="space-y-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                  />
                  <Input
                    label="Search"
                    type="text"
                    placeholder="Search..."
                    leftIcon={<Search className="w-4 h-4" />}
                    helperText="Type to search through all content"
                  />
                  <Input
                    label="With Error"
                    type="text"
                    error="This field is required"
                  />
                  <Textarea
                    label="Message"
                    placeholder="Enter your message..."
                    helperText="Maximum 500 characters"
                    rows={4}
                  />
                </div>
              </Card>

              <Card padding="lg">
                <Card.Title className="mb-6">Select & Radio/Checkbox</Card.Title>
                <div className="space-y-6">
                  <Select
                    label="Country"
                    options={[
                      { value: '', label: 'Select a country' },
                      { value: 'us', label: 'United States' },
                      { value: 'id', label: 'Indonesia' },
                      { value: 'uk', label: 'United Kingdom' },
                      { value: 'sg', label: 'Singapore' }
                    ]}
                  />

                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                      Select Plan
                    </p>
                    <div className="space-y-3">
                      <Radio
                        name="plan"
                        label="Basic Plan"
                        description="For individuals and small teams"
                        checked={selectedPlan === 'basic'}
                        onChange={() => setSelectedPlan('basic')}
                      />
                      <Radio
                        name="plan"
                        label="Pro Plan"
                        description="For growing businesses"
                        checked={selectedPlan === 'pro'}
                        onChange={() => setSelectedPlan('pro')}
                      />
                      <Radio
                        name="plan"
                        label="Enterprise Plan"
                        description="For large organizations"
                        checked={selectedPlan === 'enterprise'}
                        onChange={() => setSelectedPlan('enterprise')}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t dark:border-neutral-800">
                    <Checkbox label="Subscribe to newsletter" />
                    <Checkbox
                      label="Accept terms and conditions"
                      description="By checking this box, you agree to our Terms of Service"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Cards */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover padding="lg">
                <Card.Header>
                  <Badge variant="primary">Featured</Badge>
                </Card.Header>
                <Card.Title>Simple Card</Card.Title>
                <Card.Description>
                  This is a simple card with hover effect enabled
                </Card.Description>
              </Card>

              <Card padding="lg">
                <Card.Header>
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-success-600" />
                  </div>
                </Card.Header>
                <Card.Title>With Icon</Card.Title>
                <Card.Description>
                  Card with custom icon in header
                </Card.Description>
                <Card.Footer>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Card.Footer>
              </Card>

              <Card hover padding="lg">
                <Card.Title>Full Card</Card.Title>
                <Card.Description>
                  Complete card with all sub-components
                </Card.Description>
                <Card.Content>
                  <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li>✓ Header section</li>
                    <li>✓ Title and description</li>
                    <li>✓ Content area</li>
                    <li>✓ Footer with actions</li>
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Typography
            </h2>
            <Card padding="lg">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gradient">
                  Heading 1 with Gradient
                </h1>
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
                  Heading 2
                </h2>
                <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  Heading 3
                </h3>
                <h4 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Heading 4
                </h4>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Large paragraph text for important content and descriptions
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-400">
                  Regular paragraph text for body content and general information
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Small text for captions, helper text, and secondary information
                </p>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
