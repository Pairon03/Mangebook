const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }, // Função do usuário, caso queira expandir no futuro
});

module.exports = mongoose.model('Admin', AdminSchema);
