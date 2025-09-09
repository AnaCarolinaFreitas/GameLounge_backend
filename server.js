require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const gameRoutes = require('./src/routes/gameRoutes');

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.use('/uploads', express.static('uploads'));
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
 console.log(`Servidor rodando 🚀 http://localhost:${PORT}`);
});
