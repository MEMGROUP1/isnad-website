# BranchesList

**Purpose:**
Renders grouped branches by governorate with collapsible sections and a styled list matching the dialog UI.

**API / Props:**
- `branches: CompanyBranch[]` — list of branches to group and display.

**Usage Example:**
```tsx
import { BranchesList } from "@/components/company-profile/branches-list";

<BranchesList branches={branches} />
```

**Behavior & Notes:**
- Groups by `branch.governorate?.id` and displays localized governorate names.
- Maintains internal open state to expand/collapse a governorate group.
- Uses smooth height transitions for expand/collapse.

**Last Updated:** 2026-01-19
