# Navbar Scroll Animation & Positioning

## Purpose
This document details the specific implementation of the `Navbar` component's scroll-aware visibility animation and fixed positioning. It explains how the navbar hides when scrolling down and reappears when scrolling up.

## Behavior
The navbar maximizes content visibility by reacting to the user's scroll direction:

1.  **Initial State & Top of Page**: The navbar is always visible when the page is at the very top (scroll position <= 10px).
2.  **Scrolling Down**: As the user scrolls down, the navbar translates upwards out of the viewport.
3.  **Scrolling Up**: As soon as the user starts scrolling up, the navbar translates back down into the viewport.

## Implementation Details

### State
The component uses two pieces of local state to manage this behavior:
- `scrollY`: Stores the previous vertical scroll position to determine direction.
- `navbarVisible`: A boolean that controls the visibility class application.

### Logic
A `useEffect` hook manages the scroll event listener:

```tsx
useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // Show navbar when scrolling up or at the very top
        if (currentScrollY < scrollY || currentScrollY <= 10) {
            setNavbarVisible(true);
        } 
        // Hide navbar when scrolling down
        else if (currentScrollY > scrollY) {
            setNavbarVisible(false);
        }
        setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [scrollY]); // dependency on scrollY ensures we compare against the latest value
```

### Styling & Animation (Tailwind CSS)

The animation relies on CSS transitions and transforms applied via class manipulation.

**1. Fixed Positioning:**
The navbar is pinned to the top of the viewport using:
- `fixed`: Removes it from document flow and positions relative to the viewport.
- `top-0 left-0`: Anchors it to the top-left corner.
- `w-full`: Spans the entire width.
- `z-[99]`: Ensures it stays above other content.

**2. Animation Classes:**
- `transition-all duration-300`: Enables a smooth 300ms transition for properties that change (specifically the transform).
- `transform`: Prepares the element for transformation.

**3. Visibility Toggling:**
The `navbarVisible` state conditionally applies the translation classes:
- **Visible (`true`)**: `translate-y-0` (Default position).
- **Hidden (`false`)**: `-translate-y-full` (Moves the element up by 100% of its own height, effectively hiding it).

```tsx
const navbarClass = formateClass(
    // Base fixed positioning and transition
    "w-full ... fixed left-0 top-0 z-[99] transition-all duration-300 transform",
    // Conditional translation
    navbarVisible ? "translate-y-0" : "-translate-y-full"
);
```
