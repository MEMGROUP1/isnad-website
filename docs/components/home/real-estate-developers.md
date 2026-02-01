# HomeRealEstateDevelopers Component

## Purpose
A full-screen section in the home page showcasing real estate developers with a vertical swiper and dynamic background switching.

## File Path
[src/components/home/real-estate-developers.home.tsx](../../../src/components/home/real-estate-developers.home.tsx)

## Props
| Prop | Type | Description |
| --- | --- | --- |
| `stats` | `GeneralStatisticsDto` | Data containing developer information and backgrounds. |

## Key Features
- **Dynamic Backgrounds**: The section background switches based on the active index of the swiper.
- **Vertical Swiper**: Uses `VerticalSwiper` to let users scroll through developers.
- **Image Optimization**: Images use `fill`, `priority` for the first item, and correct `sizes` to improve performance.
- **RTL Support**: Designed with internationalization in mind, utilizing `next-intl`.

## Update Date
2026-02-01
