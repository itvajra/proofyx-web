# Proofyx Public Website

Enterprise compliance platform public website and landing pages.

## Overview

Proofyx is an enterprise compliance platform focused on creating, managing, and proving compliance.

**Core Philosophy:** Compliance is not complete until you can prove it.

## Platform Components

1. **Compliance Management** - Guide and track requirements and controls with clear pass/fail visibility
2. **Policy Management** - Create, manage, and approve policies with full versioning
3. **Script Integrity Monitoring** - PCI DSS 4.0 script integrity monitoring for payment pages

## Site Structure

- `index.html` - Main homepage
- `compliance.html` - Compliance Management product page
- `policy.html` - Policy Management product page
- `monitor.html` - Script Integrity Monitoring product page
- `styles.css` - Shared design system and styles

## Running Locally

### Option 1: Python HTTP Server
```bash
python3 -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
npx -y http-server -p 8000
```

Then open: http://localhost:8000

### Option 3: PHP Built-in Server
```bash
php -S localhost:8000
```

Then open: http://localhost:8000

## Design Principles

- **Trust-First Design** - Professional, calm, audit-ready aesthetics
- **Evidence-Based** - Every claim backed by proof
- **Compliance-Focused** - Built for regulated environments
- **Honest Messaging** - No marketing fluff, factual capabilities only

## Brand Colors

- **Trust Blue** (#0052CC) - Primary brand color
- **Compliant Green** (#00875A) - Pass/compliant status
- **Risk Red** (#DE350B) - Fail/risk status
- **Neutral Palette** - Professional grays for content

## Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (for technical content)

## Future Enhancements

- Add contact forms
- Implement demo request functionality
- Add documentation section
- Create resource library
- Add customer testimonials (when available)
