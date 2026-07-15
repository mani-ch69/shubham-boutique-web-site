# Implementation Plan - Advanced Admin Dashboard

Based on the provided design and prompt, I will expand the current Admin Panel into a comprehensive management system for Shubham Boutique.

## Proposed Modules

1.  **Dashboard**: Overview with statistics (Total Customers, Stitching Orders, Shop Orders, Revenue), charts for sales, and recent activity.
2.  **Catalog Management**: Full CRUD (Create, Read, Update, Delete) for dress designs with image uploads via Cloudinary.
3.  **Gallery Management**: Dedicated section to manage the digital portfolio photos/videos.
4.  **Online Stitching Management**: Workflow-based order tracking (New -> Measurement -> Processing -> Trial -> Ready -> Dispatched -> Delivered).
5.  **Measurements**: Detailed view and management of customer body measurements.
6.  **Shop Products**: Inventory and sales management for makeup, jewellery, and fashion accessories.
7.  **Inventory Management**: Track stock levels of products and raw materials.
8.  **Customer Management**: Directory of all registered customers with their order history and addresses.
9.  **Reports**: Visual and tabular reports for sales, orders, and inventory.
10. **Settings**: Website configuration, roles, and user management.

## Technical Details

### Backend Updates
- **Models**: Expand the database schema to include `inventory`, `shop_products`, and more detailed `orders` tracking.
- **Controllers**: New logic for bulk uploads, status transitions (for stitching), and report generation.
- **Auth**: Implement role-based access control (Super Admin, Admin, Staff).

### Frontend Updates
- **Layout**: New sidebar-based layout matching the screenshot with a clean, professional "pink/purple/white" theme.
- **Components**: Reusable DataTables, StatCards, Modals for forms (Add/Edit), and FileUpload components.
- **State**: Use Zustand for complex UI states (filters, pagination, multi-step forms).

## UI Style
- **Colors**: Pink (#E91E63), Purple (#673AB7), White (#FFFFFF), and soft grays.
- **Icons**: Lucide-React for consistent iconography.
- **Responsive**: Fully optimized for Desktop, Tablet, and Mobile.

## Verification Plan
- **CRUD Operations**: Test adding/editing/deleting a dress design and a shop product.
- **Workflow**: Verify that changing a stitching order status updates correctly across the dashboard.
- **Image Upload**: Ensure Cloudinary integration works for new catalog items.
- **Responsive Check**: Test the sidebar and tables on mobile view.
