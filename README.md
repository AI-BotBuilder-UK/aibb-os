# Bot Preview System

This application now includes a bot preview system with standalone HTML files for each bot.

## Available Bot Previews

- **Hotel Bot**: `/previews/hotel_bot.html`
- **Car Bot**: `/previews/car_bot.html` 
- **Legal Bot**: `/previews/legal_bot.html`

## URL Pattern

Each bot has its own preview URL:
- `/previews/hotel_bot.html` - Hotel assistant chat widget
- `/previews/car_bot.html` - Automotive assistant chat widget
- `/previews/legal_bot.html` - Legal assistant chat widget

## Implementation

1. **Bot Components**: Created individual React components for each bot in `src/bots/`
2. **Preview Page**: Added `BotPreviewPage` component that renders the correct bot based on `bot_id` parameter
3. **Build Pipeline**: Updated Vite config to generate standalone HTML files during build
4. **Static Files**: Created preview HTML files in `public/previews/` that redirect to the main app with bot parameters

## Usage

Visit any preview URL to load the corresponding chat widget. Each bot has its own themed interface and functionality.

## Build Process

Run `npm run build` to generate the preview files automatically in the `dist/previews/` directory.