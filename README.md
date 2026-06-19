# Mobile Preview App

Native React Native preview application that renders ecommerce UI dynamically from JSON configuration.

## Architecture

```
JSON Config → Component Registry → SectionRenderer → PageRenderer → Screen
```

## Run

```bash
npm install
npm start
```

Then press `i` for iOS simulator or scan the QR code with Expo Go.

## Project Structure

```
app/                    Expo Router entry
components/sections/    Reusable UI sections (Header, HeroBanner, etc.)
src/schema/             Zod schemas for app config JSON
src/registry/           Component registry (type → component mapping)
src/renderer/           Dynamic page/section rendering
src/providers/          App config + theme context
src/config/             Mock JSON config for local preview
src/services/           Config loader (mock or API)
```

## Preview JSON

The app loads `src/config/mock-config.ts` by default. To connect an API later, set:

```bash
EXPO_PUBLIC_API_URL=https://your-api.com
EXPO_PUBLIC_TENANT_ID=preview
```

## Supported Sections

- Header
- HeroBanner
- CategoryRow
- CountdownTimer
- FeaturedProducts
- ProductGrid
- CollectionGrid
- UserProfile
- Orders

## Adding a New Section

1. Create component in `components/sections/`
2. Add Zod props schema + definition in `src/registry/component-registry.ts`
3. Register the component in `runtimeRegistry`
4. Add section to mock config JSON
