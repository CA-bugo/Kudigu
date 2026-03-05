const connection = require('../config/db');

// Get all users
exports.getAllUsers = (req, res) => {
  connection.query('SELECT * FROM inventory', (err, results) => {
    if (err) {
        return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
};

// Create a new user
exports.createUser = (req, res) => {
  const { name, price, quantity, supplier } = req.body;     
    connection.query('INSERT INTO inventory (name, price, quantity, supplier) VALUES (?, ?, ?, ?)', [name, price, quantity, supplier], (err, results) => {
    if (err) {
        return res.status(500).json({ error: 'Database query failed' });
    }
    res.json({ message: 'User created successfully', id: results.insertId });
    });
};