# Section Component

## Purpose
A reusable layout component used to wrap page sections, supporting full-screen height on desktop and optional background images with optimization.

## File Path
[src/components/section.tsx](../../../src/components/section.tsx)

## Props
| Prop | Type | Description |
| --- | --- | --- |
| `backgroundImageUrl` | `string` (optional) | URL of the background image. Renders a Next.js `Image` behind the content. |
| `children` | `React.ReactNode` | The content to display inside the section. |
| `className` | `string` (optional) | Additional CSS classes for the section container. |
| `priority` | `boolean` (optional) | If true, the background image will be loaded with high priority (useful for LCP). |
| `sizes` | `string` (optional) | The `sizes` prop for the Next.js `Image`. Defaults to `100vw`. |
| `...props` | `React.HTMLAttributes` | Any other standard HTML div attributes. |

## Sub-Components
### `Section.Inner`
A container for content within the section, providing maximum width constraints and horizontal padding.

## Usage Example
```tsx
<Section 
    backgroundImageUrl="/images/hero-bg.png" 
    priority 
    className="h-screen"
>
    <Section.Inner>
        <h1>Welcome</h1>
    </Section.Inner>
</Section>
```

## Implementation Notes
- Uses `relative` positioning for the section to allow absolute positioning of the background image.
- Background image is placed with `-z-10` to stay behind children.
- Background image uses `object-cover` and `pointer-events-none`.

## Update Date
2026-02-01
