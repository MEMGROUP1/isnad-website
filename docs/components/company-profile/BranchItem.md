# BranchItem

**Purpose:**
Displays a single branch row with a navigation icon, governorate name, and localized address, linking to the branch location.

**API / Props:**
- `branch: CompanyBranch` — branch data containing address, governorate, and location URL.

**Usage Example:**
```tsx
import { BranchItem } from "@/components/company-profile/branch-item";

<BranchItem branch={branch} />
```

**Behavior & Notes:**
- Opens the branch location in a new tab using `target="_blank"`.
- Truncates long addresses with `line-clamp-1`.
- Applies hover styles to match the dialog design.

**Last Updated:** 2026-01-19
