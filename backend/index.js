const express = require('express');
const cors = require('cors');
const app = express();

// Allow the Vercel frontend to request data from this Railway backend
app.use(cors()); 

// Mock Dynamic Data Feed
app.get('/api/feed', (req, res) => {
    res.json({
        headline: "¡Oferta Especial de Otoño!",
        subhead: "Ahorra un 50% en toda la tienda hoy.",
        cta: "Comprar Ahora",
        imageUrl: "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=300&h=250&fit=crop"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DCO Feed running on port ${PORT}`));
