# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for [@serenity-kit/opaque](https://github.com/serenity-kit/opaque), a TypeScript/WebAssembly implementation of the OPAQUE password-authenticated key exchange (PAKE) protocol. The site is built with Next.js and Nextra.

## Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server at localhost:3000
pnpm build      # Production build
pnpm start      # Start production server
```

## Architecture

### Framework
- **Nextra** (v2): Documentation framework built on Next.js
- Pages use MDX format in `pages/` directory
- Theme configuration in `theme.config.tsx` defines custom components and layout

### Key Directories
- `pages/docs/` - Documentation content as MDX files
- `components/` - React components used across the site
- `components/blocks/` - Page section components (Hero, Benefits, etc.)
- `components/protocol/` - Protocol visualization components
- `components/icon/` - Icon components

### WebAssembly Support
The project uses WASM for the opaque library. Webpack is configured in `next.config.js` to:
- Enable `asyncWebAssembly` experiment
- Output WASM files to `static/wasm/` directory

### Interactive Demo
`components/InteractiveForm.tsx` contains a working OPAQUE registration/login demo using XState for state management.

### Custom MDX Components
Theme overrides standard MDX elements (pre, code, p, table, th, tr, td) with custom styled versions defined in `theme.config.tsx`.
