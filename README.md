# 💪 FitZone — Premium Gym & Fitness Website

> A modern, responsive, and visually premium gym & fitness website built with HTML5, CSS3, JavaScript, and Bootstrap 5.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-f97316?style=for-the-badge&logo=github)](https://YOUR-USERNAME.github.io/fitzone/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/YOUR-USERNAME/fitzone)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🖼️ Preview

| Section | Screenshot |
|--------|------------|
| Hero Section | *(Add screenshot)* |
| Programs | *(Add screenshot)* |
| BMI Calculator | *(Add screenshot)* |
| Membership Plans | *(Add screenshot)* |
| Mobile View | *(Add screenshot)* |

---

## ✨ Features

- 🌑 **Dark / Light Mode** — Full theme switching with localStorage persistence
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- 🎞️ **Smooth Animations** — Scroll-reveal via AOS + CSS keyframe animations
- 🧮 **BMI Calculator** — Fully functional JS BMI calculator with animated gauge
- 💰 **Membership Plans** — Tiered pricing cards with hover effects
- 📬 **Contact Form** — With simulated success state
- 🔢 **Animated Counters** — Stats count up when they enter the viewport
- 🖱️ **Ripple Effect** — Interactive button feedback
- 🗺️ **Google Maps Embed** — Contact section with map

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, CSS variables |
| JavaScript (Vanilla) | Interactivity, BMI, counters, theme |
| Bootstrap 5 | Responsive grid & components |
| Font Awesome 6 | Icons |
| Google Fonts | Bebas Neue + Barlow typography |
| AOS Library | Scroll-reveal animations |

---

## 📁 File Structure

```
FitZone/
│
├── index.html          ← Main HTML file
├── style.css           ← All custom styles
├── script.js           ← All JavaScript
├── assets/
│   ├── images/         ← Add your gym images here
│   └── videos/         ← Add promo videos here
└── README.md           ← This file
```

---

## 📱 Website Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Fixed, glassmorphism, dark mode toggle, mobile menu |
| 2 | **Hero** | Full-screen, animated headline, CTA buttons, live stats |
| 3 | **Programs** | 6 program cards with gradient visuals & hover effects |
| 4 | **Trainers** | 4 trainer cards with social overlay |
| 5 | **BMI Calculator** | Height/weight/age input with animated SVG gauge |
| 6 | **Membership** | Basic / Premium / Pro pricing cards |
| 7 | **Testimonials** | Customer reviews with star ratings |
| 8 | **Gallery** | Responsive CSS grid gallery with hover reveal |
| 9 | **Contact** | Form + info cards + Google Maps embed |
| 10 | **Footer** | Socials, quick links, newsletter signup |

---

## 🚀 Getting Started

### Option 1 — Open Locally
```bash
# Clone this repository
git clone https://github.com/YOUR-USERNAME/fitzone.git

# Open in browser
cd fitzone
# Double-click index.html OR use Live Server in VS Code
```

### Option 2 — Deploy to GitHub Pages
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit: FitZone website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fitzone.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to Repository → Settings → Pages → Source: main / root
# Your site will be live at: https://YOUR-USERNAME.github.io/fitzone/
```

---

## 🎨 Design System

### Color Palette (Dark Mode)

| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep Navy | `#0f172a` |
| Card | Slate Dark | `#1e293b` |
| Accent | Flame Orange | `#f97316` |
| Text | Off White | `#f1f5f9` |
| Secondary Text | Cool Gray | `#cbd5e1` |

### Typography

| Role | Font |
|------|------|
| Headings / Display | Bebas Neue |
| Condensed / Labels | Barlow Condensed |
| Body / Paragraphs | Barlow |

---

## ⚙️ Customization

### Change Accent Color
In `style.css`, update:
```css
:root {
  --accent: #f97316;   /* Change this to any color */
  --accent2: #fb923c;  /* Slightly lighter version */
}
```

### Add Real Images
Replace the gradient placeholders in `index.html` by adding:
```html
<img src="assets/images/trainer-1.jpg" alt="Trainer" class="img-fluid" />
```

### Change Gym Info
In `index.html`, search for:
- `123 FitZone Avenue` → your address
- `+92 301 234 5678` → your phone number
- `hello@fitzone.pk` → your email

---

## 🧮 BMI Calculator Logic

```
BMI = weight (kg) / height (m)²

< 18.5   → Underweight
18.5–24.9 → Normal Weight
25–29.9  → Overweight
≥ 30     → Obese
```

---

## 📌 Future Improvements

- [ ] User login / signup with Firebase
- [ ] Online membership booking system
- [ ] Payment gateway integration (Stripe)
- [ ] Workout tracking dashboard
- [ ] Nutrition planner
- [ ] Admin panel

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rifaq Ajmal**
- GitHub: [@rifaqajmal](https://github.com/rifaqajmal)
- LinkedIn: [linkedin.com/in/rifaq-ajmal-4b5a513b3](https://linkedin.com/in/rifaq-ajmal-4b5a513b3)
- Website: [rifaqajmal.github.io](https://rifaqajmal.github.io)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!

---

*Built with 💪 for fitness enthusiasts and frontend developers.*
