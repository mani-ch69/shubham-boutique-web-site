-- Shubham Boutique Database Schema

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Dress Designs (Catalog)
CREATE TABLE dress_designs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    fabric_suggestion TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Measurements
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Orders
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    design_id UUID REFERENCES dress_designs(id) ON DELETE SET NULL,
    measurement_id UUID REFERENCES measurements(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'delivered', 'cancelled')),
    total_price DECIMAL(10, 2),
    instructions TEXT,
    order_type TEXT DEFAULT 'stitching' CHECK (order_type IN ('stitching', 'product')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Products (Shop)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER DEFAULT 0,
    image_url TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Gallery
CREATE TABLE gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT,
    image_url TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    item_type TEXT DEFAULT 'sample' CHECK (item_type IN ('before', 'after', 'sample', 'bridal', 'latest')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Wishlist
CREATE TABLE wishlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    design_id UUID REFERENCES dress_designs(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, design_id),
    UNIQUE(user_id, product_id)
);
