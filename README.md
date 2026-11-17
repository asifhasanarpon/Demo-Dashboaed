# Material Dashboard 2 (Creative Tim Style)

An exact, pixel-perfect reproduction of the **Creative Tim Material Dashboard 2** built with **Bootstrap 5.3**, **Chart.js 4**, and modern CSS glassmorphism.

![Dashboard Preview](screenshot.png)

## ✨ Key Features

- **Scenic Glassmorphic Wallpaper Mode**: 
  - Features the scenic oil-painted mountain backdrop with a frosted glass floating container (`backdrop-filter: blur(28px)`).
  - Can be toggled between **Wallpaper Mode** and **Clean Mode** from the sidebar toggle button.
- **Top Metric Cards (KPIs)**:
  - Today's Money (`$53k`, `+55% than last week`)
  - Today's Users (`2,300`, `+3% than last month`)
  - Today's Users / Clients (`3,462`, `-2% than yesterday`)
  - Sales (`$103,430`, `+5% than yesterday`)
  - High-contrast charcoal gradient icon badges with soft drop shadows.
- **Interactive Green Performance Charts**:
  - **Website Views**: Emerald bar chart with daily intervals (`M, T, W, T, F, S, S`)
  - **Daily Sales**: Smooth curved line chart with monthly datapoints (`J` through `D`)
  - **Completed Tasks**: Dynamic line chart tracking task milestones (`Apr` through `Dec`)
- **Projects Table & Orders Overview**:
  - Active projects table with company badges (Adobe XD, Atlassian, Slack, Spotify, Jira, InVision), overlapping avatar stacks, budgets, and colored progress bars.
  - Real-time search filter for instant querying of project rows.
  - Orders overview timeline with colored status badges and timestamps.
- **Responsive & Modern Navigation**:
  - Full-featured sidebar navigation with active dark gradient pill button.
  - Floating **Bootstrap 5** pill badge.
  - Full mobile responsiveness with sliding drawer and backdrop.

## 🚀 How to Run

Simply open `index.html` in any modern web browser:

```bash
# On Windows PowerShell:
Start-Process index.html

# Or via any local server:
npx serve .
# or
python -m http.server 3000
```

## 📁 File Structure

```
├── index.html        # Main dashboard structure & semantic HTML
├── css/
│   └── styles.css    # Custom CSS, glassmorphism, responsive grid & animations
├── js/
│   ├── charts.js     # Chart.js configs for bar & line charts
│   └── app.js        # Search filter, wallpaper toggle, mobile drawer & interactions
└── README.md
```
