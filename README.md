# Ali Aman — Personal Portfolio
 
A modern, animated personal portfolio built with React and Vite. Features smooth scroll-based animations, a horizontal project showcase, an interactive contact section, and a working contact form — all optimized for both desktop and mobile.
 
🌐 **Live Demo:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app) ← replace with your URL after deploying
 
---
 
## Features
 
- **Hero Section** — Animated introduction with an interactive 3D Spline scene
- **About Section** — Parallax star animations and personal bio
- **Projects Section** — GSAP-powered horizontal scroll showcase with live project links
- **Contact Section** — Scroll-triggered circle zoom animation with Gmail compose integration
- **Contact Form** — Fully functional "Get In Touch" modal powered by EmailJS
- **Progress Bar** — Scroll-based reading progress indicator
- **Custom Cursor** — Desktop-only custom cursor experience
- **Responsive Design** — Mobile-first layout with a collapsible navigation menu
- **Smooth Animations** — Page-wide GSAP ScrollTrigger and Framer Motion animations
 
---
 
## Tech Stack
 
| Category | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | GSAP 3 + ScrollTrigger |
| Transitions | Framer Motion 12 |
| 3D Scene | Spline (@splinetool/react-spline) |
| Contact Form | EmailJS |
| Icons | React Icons |
| Routing | React Router DOM 7 |
| Deployment | Vercel |
 
---
 
## Projects Showcased
 
| Project | Description | Live |
|---|---|---|
| Imagify | AI-powered image generation app | Coming soon |
| Dubai Geenie | Dubai tourism web application | Coming soon |
| Turf And Pool | Sports facility booking platform | Coming soon |
| Portfolio | This personal portfolio website | Live above |
| Job Portal | Full-stack MERN job listing platform | [Live](https://react-job-portal-ohsk.vercel.app/) |
 
---
 
## Getting Started
 
### Prerequisites
- Node.js v18 or higher
- npm or yarn
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/mernAli/portfolio.git
 
# Navigate into the project
cd portfolio
 
# Install dependencies
npm install
 
# Start the development server
npm run dev
```
 
The app will be running at `http://localhost:5173`
 
### Build for Production
 
```bash
npm run build
```
 
### Preview Production Build
 
```bash
npm run preview
```
 
---
 
## Project Structure
 
```
src/
├── App.jsx                  # Root component, GSAP ScrollTrigger setup
├── main.jsx                 # React DOM entry point
├── index.css                # Global styles and Tailwind directives
└── components/
    ├── Header.jsx           # Navigation, mobile menu, contact form modal
    ├── HeroSection.jsx      # Landing section with Spline 3D scene
    ├── AboutSection.jsx     # About me with parallax star animations
    ├── ProjectSection.jsx   # Horizontal scroll project showcase
    ├── ContactSection.jsx   # Scroll-triggered circle zoom contact section
    ├── Footer.jsx           # Footer with social links
    ├── ProgressBar.jsx      # Scroll progress indicator
    └── CustomCursor.jsx     # Custom cursor for desktop
```
 
---
 
## Environment & Configuration
 
This project uses **EmailJS** for the contact form. To configure it:
 
1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Set up a Gmail service and email template
3. Replace the following in `Header.jsx` with your own credentials:
 
```js
await send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { from_name, from_email, message },
  'YOUR_PUBLIC_KEY'
)
```
 
---
 
## Deployment
 
This portfolio is deployed on **Vercel**. To deploy your own:
 
1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — no configuration needed
4. Click **Deploy**
 
Every push to the `main` branch triggers an automatic redeployment.
 
---
 
## Connect With Me
 
- GitHub: [github.com/mernAli](https://github.com/mernAli)
- LinkedIn: [linkedin.com/in/ali-aman-8943b725b](https://www.linkedin.com/in/ali-aman-8943b725b/)
- Instagram: [instagram.com/ali_aman_____](https://www.instagram.com/ali_aman_____/)
 
---
 
## License
 
This project is open source and available under the [MIT License](LICENSE).
 
