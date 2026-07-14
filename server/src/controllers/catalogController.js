const db = require('../models/db');

const getDesigns = async (req, res) => {
  const { category, search } = req.query;
  try {
    let query = 'SELECT d.*, c.name as category_name FROM dress_designs d LEFT JOIN categories c ON d.category_id = c.id WHERE 1=1';
    const params = [];

    if (category) {
      params.push(category);
      query += ` AND c.name = $${params.length}`;
    }

    if (search) {
      params.push(`%${search}%`);
      query += ` AND (d.name ILIKE $${params.length} OR d.code ILIKE $${params.length})`;
    }

    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching designs' });
  }
};

const getDesignById = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT d.*, c.name as category_name FROM dress_designs d LEFT JOIN categories c ON d.category_id = c.id WHERE d.id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Design not found' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching design' });
  }
};

// Admin only methods
const createDesign = async (req, res) => {
  const { code, name, categoryId, fabricSuggestion, price, imageUrl } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO dress_designs (code, name, category_id, fabric_suggestion, price, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [code, name, categoryId, fabricSuggestion, price, imageUrl]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating design' });
  }
};

module.exports = { getDesigns, getDesignById, createDesign };
