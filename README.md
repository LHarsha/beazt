# beazt — Independent Video Editing & Motion Studio

> Post-production for creators and brands that measure retention. Long-form YouTube episodes, multi-cam podcasts, 9:16 Reels & Shorts, and high-CTR thumbnail packaging delivered within a standard 24–48 hour turnaround window.

---

## 🌟 Overview

**beazt** is an independent post-production and creative studio led by Umang. The studio bridges the gap between raw footage and high-retention social content by pairing narrative video editors, After Effects motion designers, and thumbnail packaging specialists under a unified turnaround schedule.

---

## 🚀 Key Features

- **Asymmetric Editorial Hero & Showreel Player**:
  - Interactive HTML5 showreel video monitor featuring real client cuts.
  - Multi-chapter timecode scrubber (Guitar performance sync, creator vlog pacing, multi-cam studio podcast, and 3-second hook structure).
- **Work & Portfolio Index**:
  - 10 curated project studies (6 verified/archive client cuts + 4 format specs).
  - Multi-format filtering: Long-form YouTube, Podcast & Multi-cam, 9:16 Reels & Shorts, and Music & Packaging.
  - Interactive project detail modal with full preview and scope inspection.
- **Turnaround & Scope Estimator**:
  - Live interactive estimator calculating delivery windows and deliverables based on format and raw footage duration (10–180 minutes).
- **Client Notes & Case Studies**:
  - Verified testimonials and workflow breakdowns, including work for creator Gaurav Sharma (210k+ YouTube subscribers).
- **Consultation Scheduler**:
  - Interactive calendar with 16 available time slots (09:00 to 00:00 across multiple time zones).
  - One-click `.ics` calendar file download.
  - Direct WhatsApp desk follow-up integration.
- **Studio Collective & Roster Application**:
  - Structured application pipeline for remote editors, motion designers, and thumbnail artists.

---

## 🛠️ Tech Stack

- **Core Structure**: HTML5 (Semantic, SEO Schema.org, OpenGraph, Twitter Cards)
- **Styling**: Vanilla CSS with custom studio design tokens (`--bg-paper`, `--bg-cinema`, `--signal`, `--hairline`, `--ink`) + Tailwind CSS (v3 via CDN)
- **Typography**: Google Fonts ([Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Manrope](https://fonts.google.com/specimen/Manrope), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Logic & Interactions**: Modern Vanilla JavaScript (ES6+, zero runtime framework dependencies)
- **Audio / Video**: HTML5 Video API with fallback handling

---

## 📁 Project Structure

```
beaztweb/
├── index.html                  # Main production website entry point
├── styles.css                  # Core CSS styles and design tokens
├── app.js                      # Main application logic & interactivity
├── package.json                # Project metadata and run scripts
├── README.md                   # Project documentation
├── beazt-standalone.html       # Offline single-file build with inline base64 assets
├── beazt-studio-source.md      # Studio source pack reference
├── import-beazt-project.js     # Standalone project generator script
├── css/
│   └── styles.css              # Modular stylesheet
├── js/
│   └── app.js                  # Modular script
└── assets/
    ├── images/                 # Client still frames (slot-01 through slot-06)
    │   ├── slot-01.jpg
    │   ├── slot-02.jpg
    │   ├── slot-03.jpg
    │   ├── slot-04.jpg
    │   ├── slot-05.jpg
    │   └── slot-06.jpg
    └── video/
        └── showreel.mp4        # Showreel video clip
```

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18+) or Python (3.x) or any local static web server.

### Option 1: Node.js (Recommended)
Clone the repository and serve locally:

```bash
git clone https://github.com/LHarsha/beazt.git
cd beazt
npm start
```
*Runs via `npx serve . -l 3000` at [http://localhost:3000](http://localhost:3000).*

### Option 2: Python 3
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Direct Browser / Live Server
You can open `index.html` directly in any modern web browser or use VS Code's **Live Server** extension.

---

## 📄 License & Attribution

Designed and developed for **beazt** studio. All client footage, branding, and assets are subject to creator and studio copyright.
