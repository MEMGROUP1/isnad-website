# HomeCard Component

## Purpose
A specialized card component used in the Home Hero section to display statistics, logos, and a link to a category.

## File Path
[src/components/cards/home-card.tsx](../../../src/components/cards/home-card.tsx)

## Props
| Prop | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number to display in the card. |
| `label` | `string` | The label for the count. |
| `description` | `string` | Short description text. |
| `logos` | `string[]` | Array of logo URLs for the `AvatarGroup`. |
| `backgroundImageUrl` | `string` | URL for the card's background image. |
| `actionLabel` | `string` (optional) | Text for the link button. |
| `viewButtonPath` | `string` (optional) | Href for the link button. |
| `className` | `string` (optional) | Additional CSS classes. |

## Implementation Notes
- Uses a background image optimized with `sizes` prop.
- Integrates `AvatarGroup` for showing developer/company logos.
- Includes a floating link on the top-end corner.

## Update Date
2026-02-01
