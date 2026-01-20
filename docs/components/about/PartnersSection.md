# Partners Section Component

**Path**: `src/components/about/partners-section.about.tsx`

## Purpose
The `AboutPartnersSection` component displays a list of company partners/types and a horizontally scrolling showcase of company service cards. It features a unique UI layout where the user can select a company category from a vertically scrollable list, and see corresponding company cards in a parallax-style horizontal slider.

## Components Structure

The section is composed of:
1.  **Main Component** (`AboutPartnersSection`): Handles data fetching, filtering logic, and the horizontal slider layout/animation.
2.  **Category List** (`CategoryList`): A reusable sub-component that handles the vertical list of company categories with custom scroll controls (hover-to-scroll arrows).
3.  **Hooks**:
    *   `useScrollControls`: Manages the scroll state and auto-scroll behavior for the category list.

## Props

### AboutPartnersSection
Top-level component, receives no props.

### CategoryList
Located at: `src/components/about/partners/category-list.tsx`

| Prop | Type | Description |
| :--- | :--- | :--- |
| `activeCategoryValue` | `string \| null` | The currently selected category value. |
| `availableCategories` | `Set<string>` | A set of category values that have associated companies. |
| `onCategoryChange` | `(value: string) => void` | Callback when a category is selected. |
| `isRtl` | `boolean` | Direction flag for styling adjustments. |

## Usage Code Snippet

```tsx
import AboutPartnersSection from "@/components/about/partners-section.about.tsx";

// In About Page
export default function AboutPage() {
  return (
    <main>
       {/* ... other sections */}
       <AboutPartnersSection />
       {/* ... other sections */}
    </main>
  );
}
```

## Implementation Details

*   **Data Fetching**: Uses `useQuery` to fetch companies from `websiteService.getCompanies`.
*   **Filtering**: Companies are filtered based on the selected category matching their `types`.
*   **Animations**:
    *   The horizontal card slider moves based on mouse position relative to the section (`handleMouseMove`).
    *   Cards have entry animations (`fadeInUp`).
*   **Scroll Logic**: The category list uses `useScrollControls` to show/hide gradient overlays with arrows. Hovering these overlays triggers smooth scrolling.

## Edge Cases
*   **Loading State**: Displays `LoadingSpinner` while fetching.
*   **Empty State**: If no categories are available, the list handles it (though `useEffect` attempts to select the first available one).
*   **Responsive**: Hidden on screens smaller than `lg`.

## Updates
*   **2026-01-20**: Refactored scroll logic into `useScrollControls` hook and extracted `CategoryList` component. Added hover-to-scroll functionality with gradient overlays.
