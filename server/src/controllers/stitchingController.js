const db = require('../models/db');

const submitOrder = async (req, res) => {
  const { designId, measurement, instructions } = req.body;
  const userId = req.user.id;

  try {
    // 1. Create/Update Measurement
    const m = measurement;
    const mResult = await db.query(
      `INSERT INTO measurements (user_id, height, bust, waist, hip, shoulder, sleeve, neck, armhole, dress_length, bottom_length)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`,
      [userId, m.height, m.bust, m.waist, m.hip, m.shoulder, m.sleeve, m.neck, m.armhole, m.dressLength, m.bottomLength]
    );
    const measurementId = mResult.rows[0].id;

    // 2. Create Order
    const orderResult = await db.query(
      `INSERT INTO orders (user_id, design_id, measurement_id, instructions, order_type)
       VALUES ($1, $2, $3, $4, 'stitching') RETURNING *`,
      [userId, designId, measurementId, instructions]
    );

    res.status(201).json(orderResult.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting stitching order' });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT o.*, d.name as design_name, d.image_url as design_image FROM orders o LEFT JOIN dress_designs d ON o.design_id = d.id WHERE o.user_id = $1 ORDER BY o.created_at DESC',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT o.*, d.name as design_name, u.full_name, u.phone
       FROM orders o
       LEFT JOIN dress_designs d ON o.design_id = d.id
       LEFT JOIN users u ON o.user_id = u.id
       ORDER BY o.created_at DESC`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching all orders' });
  }
};

module.exports = { submitOrder, getUserOrders, getAllOrders };
