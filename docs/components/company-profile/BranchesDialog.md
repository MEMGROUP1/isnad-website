# BranchesDialog

**Purpose:**
Provides a trigger button that opens a modal dialog listing company branches grouped by governorate. Uses Radix Dialog primitives for accessibility and consistent behavior.

**API / Props:**
- `branches: CompanyBranch[]` — list of branches to display. If empty, the dialog is not rendered.
- `triggerLabel?: string` — optional label for the trigger button.

**Usage Example:**
```tsx
import { BranchesDialog } from "@/components/company-profile/branches-dialog";

<BranchesDialog branches={branches} triggerLabel="عرض الفروع" />
```

**Behavior & Notes:**
- Uses `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, and `DialogFooter` from the UI layer.
- Dialog supports RTL/LTR based on locale.
- Close button is provided inside the footer; top-right close icon is disabled to match design.

**Last Updated:** 2026-01-19
