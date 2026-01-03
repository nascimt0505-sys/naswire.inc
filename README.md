# NASWIRE - Modern Business Website

A fully functional, modern, and responsive website designed to attract clients and showcase professional business solutions.

## Features

✨ **Modern Design**
- Clean, professional interface with gradient accents
- Smooth animations and transitions
- Responsive design that works on all devices

🎯 **Client Acquisition Focused**
- Clear call-to-action buttons
- Easy-to-use contact form
- Service showcase with detailed descriptions
- Social proof with testimonials
- Trust indicators (stats, experience)

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized layouts for tablets and phones
- Touch-friendly interface

⚡ **Performance Optimized**
- Fast loading times
- Smooth scroll animations
- Lazy loading images
- Optimized CSS and JavaScript

🎨 **Interactive Elements**
- Animated statistics counter
- Hover effects on cards and buttons
- Smooth section transitions
- Parallax background effects
- Active navigation highlighting

## Sections

1. **Navigation Bar**
   - Fixed position with scroll effects
   - Mobile-responsive hamburger menu
   - Smooth scroll to sections

2. **Hero Section**
   - Eye-catching headline with gradient text
   - Clear value proposition
   - Dual call-to-action buttons
   - Animated statistics showcase
   - Scroll indicator

3. **Services**
   - 6 core service offerings
   - Icon-based visual design
   - Hover animations
   - Clear descriptions

4. **About**
   - Company story and values
   - Key differentiators
   - Feature highlights
   - Visual placeholder for team/office photos

5. **Testimonials**
   - Client reviews
   - Star ratings
   - Professional presentation

6. **Contact**
   - Working contact form
   - Multiple contact methods
   - Business hours
   - Form validation

7. **Footer**
   - Quick links
   - Contact information
   - Professional branding

## How to Use

### Quick Start

1. Open `index.html` in any modern web browser
2. All files are self-contained and work without a server

### For Development

1. **Local Server** (recommended for testing)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

2. Open browser to `http://localhost:8000`

### Customization

#### Update Contact Information
Edit `index.html`:
- Phone numbers (lines with phone icons)
- Email address
- Business hours

#### Change Services
Edit the `.services-grid` section in `index.html`:
- Service titles
- Service descriptions
- Icons (using Heroicons SVG)

#### Modify Colors
Edit `styles.css` (`:root` section):
```css
--primary-color: #2563eb;  /* Main brand color */
--secondary-color: #1e40af; /* Secondary accent */
--accent-color: #3b82f6;    /* Additional accent */
```

#### Add Your Logo
Replace the logo URL in `index.html`:
```html
<img src="YOUR_LOGO_URL" alt="NASWIRE Logo" class="logo-img">
```

#### Connect Contact Form
Edit `script.js` - Replace the `simulateFormSubmission` function with your actual backend API:
```javascript
function submitToBackend(formData) {
    return fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
}
```

## Backend Integration Options

The contact form is ready to integrate with:

1. **Email Services**
   - FormSpree
   - EmailJS
   - SendGrid

2. **Backend APIs**
   - Custom Node.js/Express server
   - PHP mail handler
   - Netlify Forms
   - Google Forms

3. **Example with FormSpree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Files Structure

```
NASWIRE.INC/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Inter typeface
- **Heroicons** - SVG icons

## Performance Tips

1. **Images**: Replace placeholder images with optimized versions
   - Use WebP format for better compression
   - Compress images before uploading
   - Add `loading="lazy"` attribute

2. **Fonts**: Already optimized with Google Fonts
   - Preconnect to font servers
   - Only weights used: 300, 400, 500, 600, 700, 800

3. **Minification**: For production, minify CSS and JS
   ```bash
   # Using online tools or build tools
   npx terser script.js -o script.min.js
   npx clean-css-cli styles.css -o styles.min.css
   ```

## SEO Optimization

Already included:
- ✅ Meta description
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text placeholders for images

To enhance:
1. Add Open Graph meta tags for social sharing
2. Create a sitemap.xml
3. Add robots.txt
4. Set up Google Analytics
5. Add structured data (JSON-LD)

## Deployment

### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Direct upload

### Option 2: Traditional Hosting
- Upload all files via FTP to web host
- Ensure proper file permissions
- Test all functionality

### Option 3: Own Server
- Configure Apache/Nginx
- Set up SSL certificate (Let's Encrypt)
- Enable gzip compression

## Maintenance

Regular tasks:
- Update contact information as needed
- Refresh testimonials with new clients
- Update service offerings
- Keep content current
- Monitor form submissions

## Support

For customization help or questions:
- Email: pedro@naswire.com
- Phone: 416-456-4089 / 416-930-9711

## License

© 2026 NASWIRE. All rights reserved.

---

**Built with ❤️ for NASWIRE**

*Last updated: January 2026*
