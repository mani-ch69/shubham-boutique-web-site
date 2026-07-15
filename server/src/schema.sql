-- Shubham Boutique Database Schema (Final Complete Version)

-- 1. Users & Roles
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'staff', 'super_admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    type TEXT CHECK (type IN ('dress', 'product')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Dress Designs (Digital Portfolio)
CREATE TABLE dress_designs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    fabric_suggestion TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Shop Products (Makeup, Jewellery, Accessories)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    image_url TEXT,
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'out_of_stock')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Inventory (Raw Materials & Fabric)
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_name TEXT NOT NULL,
    category TEXT, -- e.g., 'Fabric', 'Thread', 'Buttons'
    stock_level DECIMAL(10, 2) DEFAULT 0,
    unit TEXT, -- 'meters', 'pieces', 'boxes'
    min_threshold DECIMAL(10, 2) DEFAULT 5, -- Low stock alert
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Customer Measurements
CREATE TABLE measurements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    height DECIMAL(5, 2),
    bust DECIMAL(5, 2),
    waist DECIMAL(5, 2),
    hip DECIMAL(5, 2),
    shoulder DECIMAL(5, 2),
    sleeve DECIMAL(5, 2),
    neck DECIMAL(5, 2),
    armhole DECIMAL(5, 2),
    dress_length DECIMAL(5, 2),
    bottom_length DECIMAL(5, 2),
    additional_notes TEXT,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Orders (Stitching & Shop Combined)
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    order_type TEXT DEFAULT 'stitching' CHECK (order_type IN ('stitching', 'product')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'measurement', 'processing', 'trial', 'ready', 'dispatched', 'delivered', 'cancelled')),
    total_amount DECIMAL(10, 2),
    advance_paid DECIMAL(10, 2) DEFAULT 0,
    payment_method TEXT, -- 'UPI', 'Cash', 'Card'
    payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
    delivery_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Order Items (Specific for Shop or Stitching link)
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    design_id UUID REFERENCES dress_designs(id), -- If stitching
    product_id UUID REFERENCES products(id), -- If shop product
    quantity INTEGER DEFAULT 1,
    measurement_id UUID REFERENCES measurements(id),
    instructions TEXT,
    price_at_order DECIMAL(10, 2)
);

-- 9. Gallery
CREATE TABLE gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT,
    image_url TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    item_type TEXT DEFAULT 'sample' CHECK (item_type IN ('before', 'after', 'sample', 'bridal', 'latest')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. Website Settings
CREATE TABLE settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value TEXT,
    description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
