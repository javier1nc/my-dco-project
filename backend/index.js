const express = require('express');
const cors = require('cors');
const app = express();

// Allow the Vercel frontend to request data from this Railway backend
app.use(cors()); 

// Mock Dynamic Data Feed
app.get('/api/feed', (req, res) => {
    // In a real agency setting, this data might change based on user geolocation or time of day
    res.json({
        headline: "¡Oferta Especial de Otoño!",
        subhead: "Ahorra un 50% en toda la tienda hoy.",
        cta: "Comprar Ahora",
        imageUrl: "https://via.placeholder.com/300x250/ff4500/ffffff?text=Autumn+Sale"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DCO Feed running on port ${PORT}`));
