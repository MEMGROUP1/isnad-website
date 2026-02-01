# Changelog - 2026-02-01

## Performance & SEO Improvements

### Next.js Image Optimization
- **Home Hero Background**: Added `priority` and `sizes` props to the LCP image in the hero section through the `Section` component.
- **Avatar Group**: Added `sizes` prop to avatar images using `fill` to improve performance and resolve console warnings.
- **Home Card**: Added `sizes` prop to background images.
- **Real Estate Developers Section**:
    - Fixed "invalid position" error by ensuring `fill` images have a parent with `position: relative`.
    - Added `priority` to the first background image.
    - Added `sizes` prop to background and swiper images.

### Component Updates
- **Section Component**: Extended props to support `priority` and `sizes` for background images.
