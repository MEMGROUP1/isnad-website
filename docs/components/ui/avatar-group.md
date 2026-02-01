# AvatarGroup Component

## Purpose
Displays a stack of overlapping avatars with an optional overflow indicator for remaining items.

## File Path
[src/components/ui/avatar-group.tsx](../../../src/components/ui/avatar-group.tsx)

## Props
| Prop | Type | Description |
| --- | --- | --- |
| `images` | `string[]` | Array of image URLs to display. |
| `totalCount` | `number` (optional) | The total count of items (if different from `images.length`). |
| `max` | `number` (optional) | Maximum number of avatars to show before grouping. Defaults to `5`. |
| `className` | `string` (optional) | Additional CSS classes for the container. |

## Implementation Notes
- Uses Next.js `Image` with `fill` and optimized `sizes` prop.
- Avatars are rounded and overlapping using negative margins (`-me-4`).
- Handles remaining count display automatically if `totalCount` > `max`.

## Usage Example
```tsx
<AvatarGroup 
    images={["/img1.jpg", "/img2.jpg"]} 
    totalCount={10} 
    max={5} 
/>
```

## Update Date
2026-02-01
