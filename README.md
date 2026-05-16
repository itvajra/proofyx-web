# Proofyx - Enterprise Compliance & Blog

This is a modern, fast, and SEO-friendly website built with **Astro**, **Markdown**, and **Tailwind CSS**. It serves as the unified platform for Proofyx landing pages and resource center.

## Project Structure

- `src/pages/`: Main application routes (Home, Compliance, Policy, Blog).
- `src/content/blog/`: Markdown files for blog posts.
- `src/components/`: Reusable UI components (Header, Footer, Button, etc.).
- `src/layouts/`: Shared page layouts with SEO metadata.
- `src/styles/`: Global styles and Tailwind configuration.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Azure Static Web Apps Deployment

To deploy this Astro site to **Azure Static Web Apps**:

1. **Create a GitHub Repository**: Push this code to a new GitHub repository.
2. **Azure Portal**:
   - Create a new **Static Web App** resource.
   - Choose **GitHub** as the source and select your repository.
   - Under **Build Presets**, select **Astro**.
   - App location: `/`
   - Api location: (leave empty)
   - Output location: `dist`
3. **Finish**: Azure will automatically create a GitHub Action to build and deploy your site on every push.

### Manual Azure CLI Deployment
If you prefer the CLI:
```bash
# Build the project
npm run build

# Deploy using SWA CLI
npx @azure/static-web-apps-cli deploy ./dist --app-name proofyx-web
```

## Technology Stack

- **Framework**: Astro 6.x
- **Styling**: Tailwind CSS 4.0
- **Content**: Markdown with Content Collections
- **Design**: Enterprise SaaS aesthetic with Proofyx Blue (#1e4da2)
