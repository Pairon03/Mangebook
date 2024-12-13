// Importa o mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema do administrador (AdminSchema)
const AdminSchema = new mongoose.Schema({
  // Campo para o nome de usuário
  username: { 
    type: String,    // Tipo de dado: String
    required: true,  // Torna o campo obrigatório
    unique: true,    // Garante que o nome de usuário seja único no banco de dados
  },
  
  // Campo para a senha do administrador
  password: { 
    type: String,    // Tipo de dado: String
    required: true,  // Torna o campo obrigatório
  },

  // Campo para o papel (role) do usuário, com valor padrão 'admin'
  role: { 
    type: String,    // Tipo de dado: String
    default: 'admin' // Valor padrão 'admin', mas pode ser expandido para outros papéis no futuro
  },
});

// Exporta o modelo Admin, que pode ser usado para interagir com a coleção de administradores no banco de dados
module.exports = mongoose.model('Admin', AdminSchema);
