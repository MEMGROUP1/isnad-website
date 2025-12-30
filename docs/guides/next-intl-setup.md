# next-intl Setup Documentation

**Date:** December 31, 2025  
**Feature:** Multi-language support with Arabic and English

## Purpose

This document describes the internationalization (i18n) setup using `next-intl` for the Isnad website, supporting Arabic (ar) and English (en) locales.

## Structure

```
src/
├── i18n/
│   ├── request.ts       # Server-side request configuration
│   └── routing.ts       # Routing configuration and navigation utilities
├── middleware.ts        # Middleware for locale detection and routing
├── app/
│   ├── layout.tsx       # Root layout (minimal, delegates to locale layout)
│   ├── page.tsx         # Root page (redirects to default locale)
│   └── [locale]/
│       ├── layout.tsx   # Locale-specific layout with NextIntlProvider
│       └── page.tsx     # Example page using translations
├── components/
│   └── language-switcher.tsx  # Client component for language switching
└── types/
    └── intl.d.ts        # TypeScript definitions for typed translations

messages/
├── ar.json              # Arabic translations
└── en.json              # English translations
```

## Configuration

### Default Locale
- **Default:** Arabic (`ar`)
- **Supported:** Arabic (`ar`), English (`en`)

### RTL/LTR Support
The layout automatically sets `dir="rtl"` for Arabic and `dir="ltr"` for English.

## Usage

### In Server Components

```tsx
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  
  return <h1>{t("welcome")}</h1>;
}
```

### In Client Components

```tsx
"use client";

import { useTranslations } from "next-intl";

export default function ClientComponent() {
  const t = useTranslations("common");
  
  return <p>{t("home")}</p>;
}
```

### Navigation

Use the navigation utilities from `@/i18n/routing` instead of Next.js defaults:

```tsx
import { Link, useRouter, usePathname } from "@/i18n/routing";

// Link component
<Link href="/about">About</Link>

// Router
const router = useRouter();
router.push("/contact");

// Pathname
const pathname = usePathname();
```

### Language Switcher

The `LanguageSwitcher` component is available for switching languages:

```tsx
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {
  return (
    <nav>
      <LanguageSwitcher />
    </nav>
  );
}
```

## Adding New Translations

1. Add keys to both `messages/ar.json` and `messages/en.json`
2. Use nested objects to organize translations by feature/page
3. TypeScript will provide autocomplete based on the English messages

Example:

```json
// messages/ar.json
{
  "common": {
    "welcome": "مرحباً"
  },
  "products": {
    "title": "منتجاتنا",
    "description": "اكتشف مجموعتنا"
  }
}

// messages/en.json
{
  "common": {
    "welcome": "Welcome"
  },
  "products": {
    "title": "Our Products",
    "description": "Discover our collection"
  }
}
```

## URLs

Routes are automatically prefixed with the locale:
- `/ar` - Arabic homepage
- `/en` - English homepage
- `/ar/about` - Arabic about page
- `/en/about` - English about page

The root `/` redirects to the default locale `/ar`.

## Type Safety

TypeScript provides full autocomplete for translation keys based on the English message file structure. This prevents typos and ensures consistency.

## Middleware

The middleware handles:
- Locale detection from URL
- Redirecting to default locale when no locale is specified
- Locale validation

## Notes

- All pages must be created inside `src/app/[locale]/` directory
- Server and client components can both use translations
- The locale parameter is automatically available in all route segments
- Font loading and global styles are configured in the locale layout

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js App Router with next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router)
