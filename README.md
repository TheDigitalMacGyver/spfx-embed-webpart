# SPFx Embed Web Part
This repo provides a versatile SPFx Embed web part.Drop any secure URL (Wix, Framer, etc.) into the property pane.

## Who this is for

- You need to embed external pages.
- You use SPFx and React.
- You want a simple, URL-driven web part.

## What you get

- SPFx boilerplate.
- React-based embed component.
- Sandboxed iframe.
- Build and deploy scripts.

## Prerequisites

- Node.js v14 LTS
- Yeoman and Gulp CLI
- @microsoft/generator-sharepoint
- SharePoint Online tenant

## Setup steps

1. Clone the repo
   ```bash
   git clone https://github.com/your-org/spfx-embed-webpart.git
   cd spfx-embed-webpart

2. Install dependencies
   ```bash
   npm install

3. Trust the dev certificate
   ```bash
   gulp trust-dev-cert

4. Serve locally
   ```bash
   gulp serve

Open your tenant workbench URL in the browser.

## Project layout
spfx-embed-webpart/
├── config
└── src/webparts/embed/
    ├── EmbedWebPart.ts            # Web part class
    ├── EmbedWebPart.manifest.json
    └── components/
        ├── Embed.tsx              # Iframe component
        └── IEmbedProps.ts         # Prop definitions

## Build and deploy
- npm run build
- npm run bundle --ship
- npm run package-solution --ship

Upload the generated .sppkg from sharepoint/solution to your App Catalog.

## Call to Action
Take your SharePoint pages to hero status.
- Visit https://digitalmacgyver.com
- Email: scottellis@digitalmacgyver.com


   
