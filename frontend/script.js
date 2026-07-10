// 1. The High-Performance Text Scaler (Binary Search)
function fitTextBinary(element, minSize = 10, maxSize = 34) {
    const parentWidth = element.parentElement.clientWidth;
    const parentHeight = element.parentElement.clientHeight;
    
    let low = minSize;
    let high = maxSize;
    let bestFit = minSize;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        element.style.fontSize = mid + 'px';

        if (element.scrollWidth <= parentWidth && element.scrollHeight <= parentHeight) {
            bestFit = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    element.style.fontSize = bestFit + 'px';

    if (element.scrollWidth > parentWidth || element.scrollHeight > parentHeight) {
        element.style.overflow = 'hidden';
        element.style.textOverflow = 'ellipsis';
        element.style.display = '-webkit-box';
        element.style.webkitLineClamp = '2'; 
        element.style.webkitBoxOrient = 'vertical';
    }
}

// 2. Fetch Data, Inject, and Animate
async function initAd() {
    try {
        // IMPORTANT: Change this URL to your live Railway URL before deploying to Vercel!
        //const API_URL = 'http://localhost:3000/api/feed';
        const API_URL = 'https://YOUR-RAILWAY-DOMAIN.up.railway.app/api/feed'; 
        
        const response = await fetch(API_URL);
        const data = await response.json();

        // Target DOM Elements
        const headline = document.getElementById('ad-headline');
        const subhead = document.getElementById('ad-subhead');
        const cta = document.getElementById('ad-cta');
        const image = document.getElementById('ad-image');

        // Inject Dynamic Data
        headline.innerText = data.headline;
        subhead.innerText = data.subhead;
        cta.innerText = data.cta;
        image.src = data.imageUrl;

        // Scale text to prevent layout breaks
        fitTextBinary(headline, 12, 32);

        // GSAP Animation Timeline
        const tl = gsap.timeline();
        tl.to(image, { opacity: 1, duration: 0.5 })
          .to(headline, { opacity: 1, y: -5, duration: 0.5 }, "-=0.2")
          .to(subhead, { opacity: 1, y: -5, duration: 0.5 }, "-=0.3")
          .to(cta, { opacity: 1, scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 }, "+=0.2");

    } catch (error) {
        console.error("Feed error:", error);
        // Fallback for ad network compliance
        document.getElementById('ad-headline').innerText = "Shop Now";
        document.getElementById('ad-headline').style.opacity = 1;
    }
}

window.onload = initAd;
