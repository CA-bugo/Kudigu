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
  const { iname, uprice, quan, sup } = req.body; // Match frontend
    
  connection.query(
    'INSERT INTO inventory (itemName, unitPrice, quantity, supplier) VALUES (?, ?, ?, ?)', 
    [iname, uprice, quan, sup], 
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database query failed' });
      }
      res.json({ message: 'User created successfully', id: results.insertId });
    }
  );
};
