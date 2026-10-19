beazt — Studio Website Source Code (IDE Import Pack)
You can open this .md file directly in VS Code, Cursor, WebStorm, or any IDE, or save the three files below (index.html, styles.css, and app.js) in the same folder (or in css/styles.css and js/app.js—both layouts are auto-detected!).

1. index.html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>beazt — independent video editing &amp; motion studio</title>
  <meta name="description" content="beazt is an independent video editing, motion graphics, and thumbnail studio led by Umang. Long-form YouTube episodes, multi-cam podcasts, and 9:16 Reels delivered in 24–48 hours." />
  <meta property="og:title" content="beazt — independent video editing &amp; motion studio" />
  <meta property="og:description" content="Long-form YouTube editing, motion graphics, 9:16 Reels, and thumbnail packaging for creators and brands. 24–48h standard turnaround." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#111110" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "beazt",
    "url": "https://beaztmotions.vercel.app",
    "email": "contact@beaztmotions.org",
    "telephone": "+91-7983652995",
    "founder": {
      "@type": "Person",
      "name": "Umang"
    },
    "sameAs": [
      "https://www.instagram.com/beaztmotions",
      "https://www.linkedin.com/company/beaztmotions"
    ],
    "description": "Independent post-production and creative studio specializing in long-form YouTube editing, motion design, vertical Reels, and thumbnail packaging."
  }
  </script>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <script>
    window.tailwind = window.tailwind || {}; window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            paper: '#F4F1EA',
            paperLight: '#FAF8F4',
            paperMuted: '#E8E3D8',
            ink: '#121210',
            inkMuted: '#4E4B46',
            inkSubtle: '#75716A',
            cinema: '#111110',
            cinemaElevated: '#181816',
            cinemaCard: '#1F1F1C',
            cinemaBorder: '#2C2B28',
            hairline: '#DAD4C8',
            signal: '#D9381E',
            signalHover: '#B82B14',
            trackEmerald: '#15803D'
          },
          fontFamily: {
            display: ['"Space Grotesk"', 'sans-serif'],
            sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>
    <link rel="stylesheet" href="css/styles.css" onerror="this.href='styles.css'" />

</head>
<body class="min-h-screen flex flex-col selection:bg-signal selection:text-white">

  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2.5 focus:text-xs">
    Skip to main content
  </a>

  <!-- STICKY STUDIO HEADER (Clean, lowercase identity; no robotic numbering or fake REC ticker) -->
  <header class="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-hairline">
    <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4">
      <!-- Lowercase Brand Wordmark: beazt -->
      <div class="flex items-center gap-6">
        <button type="button" data-nav-view="overview" class="nav-view-trigger text-left group focus:outline-none py-1 flex items-baseline gap-3">
          <span class="font-display font-bold text-2xl sm:text-[28px] tracking-tighter text-ink lowercase">beazt<span class="text-signal">.</span></span>
          <span class="hidden sm:inline text-xs text-inkMuted font-medium tracking-normal">
            post-production &amp; motion studio
          </span>
        </button>
      </div>

      <!-- Desktop Navigation Links + Studio Submenu -->
      <nav aria-label="Primary Navigation" class="hidden lg:flex items-center gap-1">
        <button type="button" data-nav-view="overview" class="nav-view-trigger px-3.5 py-2 text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors">
          Index
        </button>
        <button type="button" data-nav-view="work" class="nav-view-trigger px-3.5 py-2 text-sm font-medium text-inkMuted hover:text-ink transition-colors">
          Work
        </button>
        <button type="button" data-nav-view="services" class="nav-view-trigger px-3.5 py-2 text-sm font-medium text-inkMuted hover:text-ink transition-colors">
          Capabilities
        </button>

        <!-- Accessible Studio / About Dropdown -->
        <div class="relative" id="about-dropdown-wrapper">
          <button
            type="button"
            id="about-dropdown-btn"
            aria-expanded="false"
            aria-haspopup="true"
            aria-controls="about-dropdown-menu"
            class="px-3.5 py-2 text-sm font-medium text-inkMuted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <span>Studio</span>
            <span id="about-dropdown-caret" class="text-xs" aria-hidden="true">▾</span>
          </button>
          <div
            id="about-dropdown-menu"
            role="menu"
            aria-label="Studio Submenu"
            class="hidden absolute left-0 mt-1 w-56 bg-paperLight border border-ink shadow-md py-1.5 z-50 divide-y divide-hairline"
          >
            <button type="button" role="menuitem" data-dropdown-target="sec-about" class="about-dropdown-item w-full text-left px-4 py-2.5 text-sm font-medium text-ink hover:bg-paperMuted flex items-center justify-between">
              <span>Client notes</span>
              <span class="text-signal">→</span>
            </button>
            <button type="button" role="menuitem" data-dropdown-target="sec-team" class="about-dropdown-item w-full text-left px-4 py-2.5 text-sm font-medium text-ink hover:bg-paperMuted flex items-center justify-between">
              <span>Join the roster</span>
              <span class="text-signal">→</span>
            </button>
            <button type="button" role="menuitem" data-dropdown-target="sec-faq" class="about-dropdown-item w-full text-left px-4 py-2.5 text-sm font-medium text-ink hover:bg-paperMuted flex items-center justify-between">
              <span>Process &amp; FAQ</span>
              <span class="text-signal">→</span>
            </button>
          </div>
        </div>

        <button type="button" data-nav-view="contact" class="nav-view-trigger px-3.5 py-2 text-sm font-medium text-inkMuted hover:text-ink transition-colors">
          Contact
        </button>
      </nav>

      <!-- Right CTA & Mobile Menu Toggle -->
      <div class="flex items-center gap-3">
        <a href="mailto:contact@beaztmotions.org" class="hidden xl:inline text-xs font-mono text-inkMuted hover:text-ink">
          contact@beaztmotions.org
        </a>
        <button type="button" data-nav-view="booking" class="nav-view-trigger min-h-[44px] bg-ink hover:bg-signal text-paper text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 transition-colors flex items-center gap-2">
          <span>Book a call</span>
          <span aria-hidden="true">→</span>
        </button>
        <button type="button" id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="Toggle Menu" class="lg:hidden min-w-[44px] min-h-[44px] p-2.5 border border-hairline text-ink hover:bg-paperMuted flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path id="mobile-menu-icon" stroke-linecap="square" stroke-width="1.75" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-hairline bg-paper px-4 pt-3 pb-6 space-y-1">
      <button type="button" data-nav-view="overview" class="nav-view-trigger w-full min-h-[44px] text-left px-3 py-2.5 text-sm font-semibold text-ink bg-paperMuted">
        Index (Full Studio View)
      </button>
      <button type="button" data-nav-view="work" class="nav-view-trigger w-full min-h-[44px] text-left px-3 py-2.5 text-sm font-medium text-inkMuted hover:text-ink">
        Selected Work &amp; Reel
      </button>
      <button type="button" data-nav-view="services" class="nav-view-trigger w-full min-h-[44px] text-left px-3 py-2.5 text-sm font-medium text-inkMuted hover:text-ink">
        Capabilities &amp; Turnaround Estimator
      </button>
      <div class="pl-3 border-l-2 border-signal space-y-1 py-1">
        <span class="block px-3 text-xs font-mono uppercase tracking-wider text-inkSubtle">Studio</span>
        <button type="button" data-dropdown-target="sec-about" class="about-dropdown-item w-full min-h-[42px] text-left px-3 py-2 text-sm text-ink hover:text-signal">
          Client notes
        </button>
        <button type="button" data-dropdown-target="sec-team" class="about-dropdown-item w-full min-h-[42px] text-left px-3 py-2 text-sm text-ink hover:text-signal">
          Join the roster
        </button>
        <button type="button" data-dropdown-target="sec-faq" class="about-dropdown-item w-full min-h-[42px] text-left px-3 py-2 text-sm text-ink hover:text-signal">
          Process &amp; FAQ
        </button>
      </div>
      <button type="button" data-nav-view="contact" class="nav-view-trigger w-full min-h-[44px] text-left px-3 py-2.5 text-sm font-medium text-inkMuted hover:text-ink">
        Contact
      </button>
      <button type="button" data-nav-view="booking" class="nav-view-trigger w-full min-h-[44px] text-left px-3.5 py-2.5 text-sm bg-signal text-white font-semibold">
        Book a consultation call →
      </button>
    </div>
  </header>

  <main id="main-content" class="flex-grow">

    <!-- ===================================================================== -->
    <!-- SECTION 1: ASYMMETRIC STUDIO HERO & PLAYABLE SHOWREEL                 -->
    <!-- ===================================================================== -->
    <section id="sec-hero" class="view-section border-b border-hairline bg-paper pt-8 pb-14 sm:py-16 lg:py-20">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <!-- Asymmetric 5 / 7 Editorial Split -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          <!-- Left 5 Columns: Direct Studio Statement -->
          <div class="lg:col-span-5 flex flex-col justify-between lg:pt-2">
            <div>
              <div class="flex items-center gap-2.5 text-xs font-mono text-inkMuted mb-5">
                <span class="w-2 h-2 rounded-full bg-signal inline-block" aria-hidden="true"></span>
                <span>24–48h standard turnaround · led by Umang</span>
              </div>

              <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] text-ink leading-[1.05] mb-6">
                Post-production for creators and brands that measure retention.
              </h1>

              <p class="text-base sm:text-[17px] text-inkMuted leading-relaxed mb-8">
                <strong class="text-ink font-semibold">beazt</strong> is an independent editing and motion studio. We cut long-form YouTube episodes, multi-cam podcasts, 9:16 Reels, and high-CTR thumbnails—shaping raw footage into tight, repeatable channel formats without losing the creator's voice.
              </p>

              <!-- Primary & Secondary Actions -->
              <div class="flex flex-wrap items-center gap-3 mb-10">
                <button type="button" data-nav-view="booking" class="nav-view-trigger min-h-[48px] bg-signal hover:bg-signalHover text-white text-sm font-semibold px-6 py-3.5 transition-colors flex items-center gap-2.5">
                  <span>Book your first edit</span>
                  <span aria-hidden="true">→</span>
                </button>
                <button type="button" data-scroll-target="sec-portfolio" class="scroll-trigger min-h-[48px] bg-transparent hover:bg-paperMuted text-ink border border-ink/40 text-sm font-semibold px-6 py-3.5 transition-colors">
                  Selected work ↓
                </button>
              </div>
            </div>

            <!-- Quiet Two-Row Studio Facts (Varied widths, no boxed cards) -->
            <dl class="border-t border-hairline pt-6 grid grid-cols-2 gap-y-5 gap-x-6 text-sm">
              <div>
                <dt class="text-xs font-mono text-inkSubtle uppercase">Turnaround</dt>
                <dd class="font-display font-semibold text-lg text-ink mt-0.5">24–48 hours</dd>
              </div>
              <div>
                <dt class="text-xs font-mono text-inkSubtle uppercase">Deliverables</dt>
                <dd class="font-display font-semibold text-lg text-ink mt-0.5">16:9, 9:16 &amp; PSD</dd>
              </div>
              <div class="col-span-2 pt-4 border-t border-hairline/70 flex items-center justify-between gap-4">
                <div>
                  <dt class="text-xs font-mono text-inkSubtle uppercase">Featured creator partner</dt>
                  <dd class="text-sm text-ink font-medium mt-0.5">
                    <a href="https://www.gauravsharmamusic.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-signal hover:text-signal font-semibold">Gaurav Sharma</a> (210k YouTube subscribers)
                  </dd>
                </div>
                <a href="https://wa.me/917983652995" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-ink underline hover:text-signal shrink-0">
                  WhatsApp desk ↗
                </a>
              </div>
            </dl>
          </div>

          <!-- Right 7 Columns: Large-Scale Finished-Work Reel Player -->
          <div class="lg:col-span-7">
            <div class="bg-cinema text-paper p-3 sm:p-4 border border-ink">
              <!-- Playable HTML5 Video Frame of Actual beazt Finished Cuts -->
              <div id="hero-video-wrapper" class="relative aspect-16-9 bg-cinemaElevated overflow-hidden group">
                <video
                  id="hero-showreel-video"
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/video/showreel.mp4" data-bm-src="reel"
                  poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" poster="assets/images/slot-04.jpg" data-bm-poster="p4"
                  muted
                  loop
                  playsinline
                  preload="metadata"
                  class="w-full h-full object-cover"
                ></video>
                <img
                  id="hero-monitor-img"
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/images/slot-04.jpg" data-bm-src="p4"
                  alt="beazt finished creator edit frame"
                  class="hidden w-full h-full object-cover"
                />

                <!-- Restrained Editorial Caption Overlay -->
                <div id="safe-guides-overlay" class="absolute inset-0 pointer-events-none flex flex-col justify-between p-3.5 sm:p-5 bg-gradient-to-t from-black/80 via-transparent to-black/35">
                  <div class="flex justify-between items-center font-mono text-xs text-stone-200">
                    <span id="hero-client-pill" class="bg-black/75 px-2.5 py-1 border border-white/15">
                      beazt reel — finished client cuts
                    </span>
                    <span id="hero-tc-counter" class="bg-black/75 px-2.5 py-1 timecode-pill">00:00:04:12</span>
                  </div>
                  <div class="flex items-end justify-between gap-4">
                    <div>
                      <p id="reel-chapter-code" class="font-mono text-xs text-signal uppercase tracking-wider">01 / Gaurav Sharma (210k subscribers)</p>
                      <p id="hero-monitor-title" class="font-display font-bold text-lg sm:text-xl text-white leading-snug mt-0.5">
                        Dual-Guitar Acoustic Comparison &amp; Multi-Mic Sync
                      </p>
                      <p id="hero-monitor-credit" class="text-xs text-stone-300 mt-0.5">
                        Edited by Umang &amp; team · <span id="reel-aspect-badge" class="font-mono">16:9 · 24fps</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Minimalist Transport & Chapter Selector Bar -->
              <div class="mt-3 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-cinemaBorder">
                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    id="hero-play-toggle"
                    class="min-h-[40px] px-4 py-1.5 bg-signal hover:bg-signalHover text-white text-xs font-semibold tracking-wide transition-colors flex items-center gap-2"
                  >
                    <span id="hero-play-icon">▶</span>
                    <span id="hero-play-label">Play reel</span>
                  </button>
                  <button
                    type="button"
                    id="hero-open-modal-btn"
                    class="min-h-[40px] px-3.5 py-1.5 border border-cinemaBorder hover:border-stone-400 text-xs text-stone-200 transition-colors"
                  >
                    Watch with controls ↗
                  </button>
                  <span id="hero-playback-status" class="hidden sm:inline font-mono text-xs text-stone-400 ml-1">6 cuts · 00:09 loop</span>
                </div>

                <!-- 4 Direct Chapter Jump Pills -->
                <div class="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                  <button type="button" data-reel-idx="0" class="reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-signal bg-cinemaCard text-white transition-colors">
                    01 Guitar
                  </button>
                  <button type="button" data-reel-idx="1" class="reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-cinemaBorder hover:border-stone-500 text-stone-300 transition-colors">
                    02 Vlog
                  </button>
                  <button type="button" data-reel-idx="2" class="reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-cinemaBorder hover:border-stone-500 text-stone-300 transition-colors">
                    03 Podcast
                  </button>
                  <button type="button" data-reel-idx="3" class="reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-cinemaBorder hover:border-stone-500 text-stone-300 transition-colors">
                    04 Hook
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 2: PORTFOLIO CENTREPIECE (ASYMMETRIC EDITORIAL WORK INDEX)    -->
    <!-- ===================================================================== -->
    <section id="sec-portfolio" class="view-section cinema-surface border-b border-cinemaBorder py-16 sm:py-24">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <!-- Asymmetric Header: Left Title, Right Offset Editorial Context -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-cinemaBorder items-end">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Selected work</p>
            <h2 class="font-display font-bold text-3xl sm:text-5xl text-paper tracking-tight leading-[1.08]">
              Finished edits &amp; format studies.
            </h2>
          </div>
          <div class="lg:col-span-5">
            <p class="text-stone-300 text-sm sm:text-base leading-relaxed">
              Every project below is either a real edit produced by <strong class="text-white font-semibold">beazt</strong> or a clearly labeled format sample demonstrating our grading and framing specs. Click any frame to play the cut.
            </p>
          </div>
        </div>

        <!-- Filter & View Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-cinemaBorder">
          <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by format">
            <button type="button" data-cat-filter="all" class="cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-signal bg-signal text-white transition-colors">
              All formats
            </button>
            <button type="button" data-cat-filter="youtube" class="cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-cinemaBorder bg-cinemaElevated text-stone-300 hover:text-white transition-colors">
              Long-form YouTube
            </button>
            <button type="button" data-cat-filter="podcast" class="cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-cinemaBorder bg-cinemaElevated text-stone-300 hover:text-white transition-colors">
              Podcast &amp; multi-cam
            </button>
            <button type="button" data-cat-filter="reels" class="cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-cinemaBorder bg-cinemaElevated text-stone-300 hover:text-white transition-colors">
              9:16 Reels &amp; Shorts
            </button>
            <button type="button" data-cat-filter="motion" class="cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-cinemaBorder bg-cinemaElevated text-stone-300 hover:text-white transition-colors">
              Music &amp; packaging
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-1.5">
            <button type="button" data-portfolio-mode="all" class="portfolio-mode-btn min-h-[38px] px-3 py-1.5 font-mono text-xs bg-cinemaCard border border-stone-500 text-white">
              All (<span id="portfolio-count-label">10</span>)
            </button>
            <button type="button" data-portfolio-mode="captured" class="portfolio-mode-btn min-h-[38px] px-3 py-1.5 font-mono text-xs text-stone-400 hover:text-white border border-transparent">
              beazt client cuts (6)
            </button>
            <button type="button" data-portfolio-mode="studies" class="portfolio-mode-btn min-h-[38px] px-3 py-1.5 font-mono text-xs text-stone-400 hover:text-white border border-transparent">
              Format samples (4)
            </button>
          </div>
        </div>

        <!-- Asymmetric Staggered Portfolio Layout (Populated by JS) -->
        <div id="portfolio-grid" class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 mt-10 items-start"></div>

      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 3: CAPABILITIES & INTERACTIVE TURNAROUND ESTIMATOR            -->
    <!-- ===================================================================== -->
    <section id="sec-services" class="view-section bg-paper border-b border-hairline py-16 sm:py-24">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <!-- Asymmetric 4 / 8 Layout: Left Column Context, Right Column Editorial Index + Estimator -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          <!-- Left 4 Columns: Studio Capabilities Intro -->
          <div class="lg:col-span-4 lg:sticky lg:top-28">
            <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Capabilities</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-4">
              Four disciplines, one post-production desk.
            </h2>
            <p class="text-inkMuted text-base leading-relaxed mb-6">
              Instead of handing your raw footage to disconnected freelancers, <strong class="text-ink font-semibold">beazt</strong> pairs long-form narrative editors, After Effects motion designers, and thumbnail artists under one turnaround schedule.
            </p>
            <div class="pt-5 border-t border-hairline text-xs font-mono text-inkMuted space-y-1.5">
              <div>· Standard delivery: 24–48 hours</div>
              <div>· Handoff: Google Drive, Frame.io, Dropbox</div>
              <div>· Select any discipline to preview scope →</div>
            </div>
          </div>

          <!-- Right 8 Columns: Hairline-Divided Capabilities Index + Live Scope Estimator -->
          <div class="lg:col-span-8 space-y-10">

            <!-- Editorial Capabilities List (No nested boxed sub-cards) -->
            <div id="service-pillars-list" class="border-t-2 border-ink divide-y divide-hairline">

              <!-- 01 Video Editing -->
              <article data-service-id="editing" class="service-card py-6 sm:py-7 px-4 sm:px-6 bg-paperLight border-l-4 border-l-signal cursor-pointer transition-colors">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div class="flex items-baseline gap-3">
                    <span class="font-mono text-xs text-signal font-semibold">01</span>
                    <h3 class="font-display font-bold text-xl sm:text-2xl text-ink">Long-form video editing</h3>
                  </div>
                  <span class="font-mono text-xs text-inkMuted">16:9 · 4K Rec.709 · 24–48h</span>
                </div>
                <p class="text-inkMuted text-sm sm:text-base max-w-[62ch] leading-relaxed ml-0 sm:ml-7">
                  Retention-focused assembly for YouTube episodes, creator vlogs, podcasts, and documentaries. Includes multi-mic audio sync, breath and dead-air trimming, rhythm pacing, and natural skin-tone color correction.
                </p>
              </article>

              <!-- 02 Motion Graphics -->
              <article data-service-id="motion" class="service-card py-6 sm:py-7 px-4 sm:px-6 hover:bg-paperLight/70 border-l-4 border-l-transparent cursor-pointer transition-colors">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div class="flex items-baseline gap-3">
                    <span class="font-mono text-xs text-inkSubtle">02</span>
                    <h3 class="font-display font-bold text-xl sm:text-2xl text-ink">Motion graphics &amp; title systems</h3>
                  </div>
                  <span class="font-mono text-xs text-inkMuted">60fps After Effects · Custom rigs</span>
                </div>
                <p class="text-inkMuted text-sm sm:text-base max-w-[62ch] leading-relaxed ml-0 sm:ml-7">
                  Custom lower thirds, kinetic typography, map callouts, and data overlays built in After Effects to clarify complex points and hold visual attention through mid-roll transitions.
                </p>
              </article>

              <!-- 03 YouTube / Instagram Reels -->
              <article data-service-id="reels" class="service-card py-6 sm:py-7 px-4 sm:px-6 hover:bg-paperLight/70 border-l-4 border-l-transparent cursor-pointer transition-colors">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div class="flex items-baseline gap-3">
                    <span class="font-mono text-xs text-inkSubtle">03</span>
                    <h3 class="font-display font-bold text-xl sm:text-2xl text-ink">YouTube Shorts &amp; Instagram Reels</h3>
                  </div>
                  <span class="font-mono text-xs text-inkMuted">9:16 vertical · 24h turnaround</span>
                </div>
                <p class="text-inkMuted text-sm sm:text-base max-w-[62ch] leading-relaxed ml-0 sm:ml-7">
                  Scroll-stopping vertical cuts engineered around the first three seconds. We reframe 16:9 masters into 9:16 safe zones with animated captions, speed ramps, and sound-design accents.
                </p>
              </article>

              <!-- 04 Thumbnail Designing -->
              <article data-service-id="thumbnails" class="service-card py-6 sm:py-7 px-4 sm:px-6 hover:bg-paperLight/70 border-l-4 border-l-transparent cursor-pointer transition-colors">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div class="flex items-baseline gap-3">
                    <span class="font-mono text-xs text-inkSubtle">04</span>
                    <h3 class="font-display font-bold text-xl sm:text-2xl text-ink">Thumbnail design &amp; packaging</h3>
                  </div>
                  <span class="font-mono text-xs text-inkMuted">1280×720 PNG + layered PSD</span>
                </div>
                <p class="text-inkMuted text-sm sm:text-base max-w-[62ch] leading-relaxed ml-0 sm:ml-7">
                  High-contrast YouTube thumbnail concepts designed for mobile and desktop home feeds—combining clean subject separation, rim lighting, and legible three-word focal hierarchy.
                </p>
              </article>

            </div>

            <!-- Interactive Scope & Turnaround Estimator Split Box -->
            <div class="border border-ink bg-cinema text-paper p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <!-- Finished Frame Preview -->
              <div class="md:col-span-5">
                <div class="flex items-center justify-between font-mono text-xs text-stone-300 mb-2">
                  <span id="service-preview-tag" class="text-signal">01 / Long-form editing</span>
                  <span id="service-preview-source">beazt cut</span>
                </div>
                <div class="aspect-16-9 overflow-hidden border border-cinemaBorder bg-cinemaElevated">
                  <img
                    id="service-preview-img"
                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/images/slot-03.jpg" data-bm-src="p3"
                    alt="Finished studio edit by beazt"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p id="service-preview-caption" class="font-mono text-xs text-stone-300 mt-2">
                  Multi-cam sync, dialogue polish &amp; studio grade
                </p>
              </div>

              <!-- Interactive Turnaround Calculator -->
              <div class="md:col-span-7 space-y-4">
                <div class="flex items-center justify-between border-b border-cinemaBorder pb-2.5">
                  <h4 class="font-display font-bold text-lg text-white">Turnaround &amp; scope estimator</h4>
                  <span class="font-mono text-xs text-stone-400">Live estimate</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label for="calc-service-type" class="block text-stone-300 font-mono mb-1">Deliverable format</label>
                    <select id="calc-service-type" class="w-full min-h-[42px] bg-cinemaElevated border border-cinemaBorder text-white px-3 py-2 text-xs">
                      <option value="longform">Long-Form YouTube Edit (8–20 min)</option>
                      <option value="reels">Short-Form Reels / Shorts Batch (3 × 60s)</option>
                      <option value="motion">Motion-Heavy Explainer / Documentary</option>
                      <option value="thumbnail">Custom Thumbnail Package (3 Variants)</option>
                    </select>
                  </div>
                  <div>
                    <label for="calc-footage-slider" class="flex justify-between text-stone-300 font-mono mb-1">
                      <span>Raw footage</span>
                      <span id="calc-footage-val" class="text-white font-semibold">45 mins</span>
                    </label>
                    <input id="calc-footage-slider" type="range" min="10" max="180" step="5" value="45" class="w-full h-2 accent-signal cursor-pointer mt-2" />
                  </div>
                </div>

                <div class="p-3.5 bg-cinemaElevated border border-cinemaBorder flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div>
                    <span class="text-stone-400 block">First cut window</span>
                    <span id="calc-turnaround-out" class="text-signal font-semibold text-sm">24–48 Hours</span>
                  </div>
                  <div class="text-right">
                    <span class="text-stone-400 block">Deliverables</span>
                    <span id="calc-deliverables-out" class="text-white">16:9 Master + Audio Mix + Color</span>
                  </div>
                </div>

                <button type="button" id="btn-calc-book" class="w-full min-h-[44px] bg-signal hover:bg-signalHover text-white text-xs font-semibold uppercase tracking-wider py-3 transition-colors">
                  Book this scope for consultation →
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 4: CLIENT NOTES & STUDIO ROSTER                               -->
    <!-- ===================================================================== -->
    <section id="sec-about" class="view-section border-b border-hairline py-16 sm:py-24 bg-paperLight">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <!-- Part A: Client Voices (Asymmetric Editorial Pull-Quote + Archive Index) -->
        <div class="pb-20 border-b border-hairline">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Client notes</p>
              <h2 class="font-display font-bold text-3xl sm:text-4xl text-ink">
                Trusted by creators who publish weekly.
              </h2>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" id="test-prev-btn" aria-label="Previous testimonial" class="min-h-[42px] px-4 py-2 border border-ink/30 hover:bg-ink hover:text-paper text-xs font-mono transition-colors">
                ← Prev
              </button>
              <span id="test-counter" class="font-mono text-xs px-3 text-inkMuted">01 / 03</span>
              <button type="button" id="test-next-btn" aria-label="Next testimonial" class="min-h-[42px] px-4 py-2 border border-ink/30 hover:bg-ink hover:text-paper text-xs font-mono transition-colors">
                Next →
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <!-- Left 8 Columns: Unboxed Editorial Pull-Quote -->
            <div class="lg:col-span-8 bg-paper p-6 sm:p-10 border-l-4 border-l-signal">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span id="test-verification-badge" class="font-mono text-xs px-2.5 py-1 bg-ink text-paper">
                  Verified creator client · 210k YouTube subscribers
                </span>
                <span id="test-context-note" class="font-mono text-xs text-inkMuted">
                   Portfolio cuts BM-01 &amp; BM-02
                </span>
              </div>

              <blockquote id="test-quote-text" class="font-display font-medium text-xl sm:text-2xl text-ink leading-relaxed">
                "Working with Umang and his team was a game-changer for my brand. His clarity in communication, sharp creative instincts, and deep understanding of social media strategy helped me streamline my content and actually see results. What I appreciated most was that he didn't just chase trends, he understood my voice and crafted a presence that felt authentic. If you're looking for someone who blends strategy with soul, Umang is your guy."
              </blockquote>

              <div class="mt-8 pt-6 border-t border-hairline flex items-center justify-between flex-wrap gap-4">
                <div class="flex items-center gap-3.5">
                  <img
                    id="test-author-avatar"
                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/images/slot-04.jpg" data-bm-src="p4"
                    alt="Gaurav Sharma in studio"
                    class="w-12 h-12 object-cover border border-ink"
                  />
                  <div>
                    <div id="test-author-name" class="font-display font-bold text-base text-ink">Gaurav Sharma</div>
                    <div id="test-author-role" class="text-xs text-inkMuted">YouTube Creator &amp; Music Educator — 210k Subscribers</div>
                  </div>
                </div>
                <a
                  id="test-external-link"
                  href="https://www.gauravsharmamusic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-mono underline text-signal hover:text-ink font-semibold"
                >
                  gauravsharmamusic.com ↗
                </a>
              </div>
            </div>

            <!-- Right 4 Columns: Client Selector List -->
            <div class="lg:col-span-4 space-y-2">
              <p class="font-mono text-xs uppercase text-inkSubtle mb-3">Select client record</p>
              <button type="button" data-test-idx="0" class="test-select-btn w-full text-left p-4 bg-paper border-l-4 border-l-signal transition-colors">
                <div class="flex items-center justify-between font-mono text-xs text-signal mb-0.5">
                  <span>01 / Verified client</span>
                  <span>210k subs</span>
                </div>
                <div class="font-display font-bold text-base text-ink">Gaurav Sharma</div>
                <div class="text-xs text-inkMuted">YouTube Creator &amp; Music Educator</div>
              </button>

              <button type="button" data-test-idx="1" class="test-select-btn w-full text-left p-4 hover:bg-paper border-l-4 border-l-transparent transition-colors">
                <div class="flex items-center justify-between font-mono text-xs text-inkSubtle mb-0.5">
                  <span>02 / Archive quote</span>
                  <span>YouTube</span>
                </div>
                <div class="font-display font-bold text-base text-ink">Logan</div>
                <div class="text-xs text-inkMuted">YouTube Creator (handle pending release)</div>
              </button>

              <button type="button" data-test-idx="2" class="test-select-btn w-full text-left p-4 hover:bg-paper border-l-4 border-l-transparent transition-colors">
                <div class="flex items-center justify-between font-mono text-xs text-inkSubtle mb-0.5">
                  <span>03 / Archive quote</span>
                  <span>Instagram</span>
                </div>
                <div class="font-display font-bold text-base text-ink">Alex Thompson</div>
                <div class="text-xs text-inkMuted">Instagram Creator (handle pending release)</div>
              </button>

              <p class="pt-3 text-xs text-inkSubtle leading-relaxed">
                Gaurav Sharma is a verified <strong class="text-ink">beazt</strong> client featured in the video archive above. Quotes from Logan and Alex Thompson are preserved from <code class="font-mono">beaztmotions.vercel.app</code> pending channel link release.
              </p>
            </div>
          </div>
        </div>

        <!-- Part B: Studio Leadership & Editor Roster Application -->
        <div id="sec-team" class="pt-20 scroll-mt-24">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div class="lg:col-span-7">
              <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Studio &amp; roster</p>
              <h3 class="font-display font-bold text-2xl sm:text-4xl text-ink leading-tight mb-4">
                Art-directed by Umang. Built for editors who care about rhythm.
              </h3>
              <p class="text-inkMuted text-base leading-relaxed max-w-[60ch] mb-8">
                <strong class="text-ink font-semibold">beazt</strong> operates as a remote post-production collective. Every cut is reviewed for pacing, audio clarity, and visual consistency before it reaches the client. We are always looking for sharp long-form editors, After Effects motion designers, and thumbnail artists to join our roster.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-hairline">
                <div>
                  <span class="font-mono text-xs text-signal uppercase block mb-1">Remote workflow</span>
                  <strong class="font-display font-bold text-base text-ink block">Cloud handoffs</strong>
                  <p class="text-sm text-inkMuted mt-1 leading-relaxed">Work from anywhere with structured proxy and project-file handoffs.</p>
                </div>
                <div>
                  <span class="font-mono text-xs text-signal uppercase block mb-1">Predictable pace</span>
                  <strong class="font-display font-bold text-base text-ink block">Async milestones</strong>
                  <p class="text-sm text-inkMuted mt-1 leading-relaxed">Flexible hours built around clear 24–48 hour delivery windows.</p>
                </div>
                <div>
                  <span class="font-mono text-xs text-signal uppercase block mb-1">Creative growth</span>
                  <strong class="font-display font-bold text-base text-ink block">Direct feedback</strong>
                  <p class="text-sm text-inkMuted mt-1 leading-relaxed">Cut for established YouTube and Instagram creators with competitive per-project rates.</p>
                </div>
              </div>
            </div>

            <!-- Right 5 Columns: Roster Application Form -->
            <div class="lg:col-span-5 bg-paper p-6 sm:p-8 border border-hairline">
              <h4 class="font-display font-bold text-lg text-ink mb-1">Join the beazt roster</h4>
              <p class="text-xs text-inkMuted mb-5">
                Share your showreel or portfolio link directly with Umang and our production desk.
              </p>
              <form id="career-form" class="space-y-3.5">
                <div>
                  <label for="career-name" class="block font-mono text-xs text-inkMuted mb-1">Full name *</label>
                  <input id="career-name" type="text" required placeholder="Your full name" class="w-full min-h-[42px] px-3.5 py-2 text-sm bg-paperLight border border-hairline text-ink" />
                </div>
                <div>
                  <label for="career-role" class="block font-mono text-xs text-inkMuted mb-1">Primary craft *</label>
                  <select id="career-role" class="w-full min-h-[42px] px-3.5 py-2 text-xs bg-paperLight border border-hairline text-ink font-mono">
                    <option value="Long-Form Video Editor (Premiere / DaVinci)">Long-Form Video Editor (Premiere / DaVinci)</option>
                    <option value="Motion Graphics Artist (After Effects)">Motion Graphics Artist (After Effects)</option>
                    <option value="Short-Form Reels Editor">Short-Form Reels Editor</option>
                    <option value="Thumbnail Designer (Photoshop)">Thumbnail Designer (Photoshop)</option>
                  </select>
                </div>
                <div>
                  <label for="career-portfolio" class="block font-mono text-xs text-inkMuted mb-1">Showreel / portfolio URL *</label>
                  <input id="career-portfolio" type="url" required placeholder="https://..." class="w-full min-h-[42px] px-3.5 py-2 text-sm bg-paperLight border border-hairline text-ink" />
                </div>
                <button type="submit" class="w-full min-h-[44px] bg-ink hover:bg-signal text-paper text-xs font-semibold uppercase tracking-wider py-3 transition-colors">
                  Send Roster Application →
                </button>
              </form>
              <div id="career-feedback" class="hidden mt-3 p-3 bg-paperMuted border border-ink text-xs font-mono text-ink"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 5: PROCESS & FAQ                                              -->
    <!-- ===================================================================== -->
    <section id="sec-faq" class="view-section border-b border-hairline py-16 sm:py-24 bg-paper">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          <div class="lg:col-span-4">
            <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Process &amp; FAQ</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-4">
              How we work from raw upload to final master.
            </h2>
            <p class="text-inkMuted text-base leading-relaxed mb-8">
              Answers to common questions on turnaround times, revision rounds, brand matching, and raw footage transfer.
            </p>
            <div class="pt-6 border-t border-hairline">
              <p class="text-sm text-ink font-semibold mb-1">Need a custom monthly retainer?</p>
              <p class="text-xs text-inkMuted mb-4 leading-relaxed">
                Reach out directly and we'll scope a weekly episode and Reels schedule for your channel.
              </p>
              <button type="button" data-nav-view="contact" class="nav-view-trigger min-h-[44px] px-5 py-2.5 bg-ink hover:bg-signal text-paper text-xs font-semibold uppercase tracking-wider transition-colors">
                Contact Us Directly →
              </button>
            </div>
          </div>

          <div class="lg:col-span-8 divide-y divide-hairline border-t border-b border-hairline" id="faq-accordion">
            <!-- FAQ 1 -->
            <div class="faq-item">
              <button type="button" data-faq-toggle="0" aria-expanded="true" aria-controls="faq-panel-0" class="faq-btn w-full py-6 flex items-center justify-between text-left gap-4 group">
                <span class="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-signal transition-colors">
                  01. How long does it take to edit a video?
                </span>
                <span class="faq-icon w-9 h-9 flex items-center justify-center font-mono text-base border border-hairline bg-paperLight shrink-0">−</span>
              </button>
              <div id="faq-panel-0" class="pb-6 pr-4 sm:pr-12 text-base text-inkMuted leading-relaxed">
                Our standard turnaround time is <strong class="text-ink">24–48 hours</strong> for most projects. For multi-cam podcasts or motion-heavy documentary episodes, we set a clear milestone schedule during your initial consultation.
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-item">
              <button type="button" data-faq-toggle="1" aria-expanded="false" aria-controls="faq-panel-1" class="faq-btn w-full py-6 flex items-center justify-between text-left gap-4 group">
                <span class="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-signal transition-colors">
                  02. Do you provide revisions?
                </span>
                <span class="faq-icon w-9 h-9 flex items-center justify-center font-mono text-base border border-hairline bg-paperLight shrink-0">+</span>
              </button>
              <div id="faq-panel-1" class="hidden pb-6 pr-4 sm:pr-12 text-base text-inkMuted leading-relaxed">
                Yes. Every edit includes structured revision rounds so pacing, music cues, motion graphics, and color grading match your exact feedback before final export.
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-item">
              <button type="button" data-faq-toggle="2" aria-expanded="false" aria-controls="faq-panel-2" class="faq-btn w-full py-6 flex items-center justify-between text-left gap-4 group">
                <span class="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-signal transition-colors">
                  03. Can you match my brand's style?
                </span>
                <span class="faq-icon w-9 h-9 flex items-center justify-center font-mono text-base border border-hairline bg-paperLight shrink-0">+</span>
              </button>
              <div id="faq-panel-2" class="hidden pb-6 pr-4 sm:pr-12 text-base text-inkMuted leading-relaxed">
                Before cutting your first video, we study your past uploads, type choices, color LUTs, caption placement, and pacing rhythm to build a dedicated channel preset.
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-item">
              <button type="button" data-faq-toggle="3" aria-expanded="false" aria-controls="faq-panel-3" class="faq-btn w-full py-6 flex items-center justify-between text-left gap-4 group">
                <span class="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-signal transition-colors">
                  04. What's included in your media services?
                </span>
                <span class="faq-icon w-9 h-9 flex items-center justify-center font-mono text-base border border-hairline bg-paperLight shrink-0">+</span>
              </button>
              <div id="faq-panel-3" class="hidden pb-6 pr-4 sm:pr-12 text-base text-inkMuted leading-relaxed">
                We handle long-form video editing (vlogs, short films, ads, documentaries), multi-mic audio/video sync and pacing, Rec.709 color correction, custom After Effects motion graphics, 9:16 YouTube/Instagram Reels, and high-CTR thumbnail design.
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-item">
              <button type="button" data-faq-toggle="4" aria-expanded="false" aria-controls="faq-panel-4" class="faq-btn w-full py-6 flex items-center justify-between text-left gap-4 group">
                <span class="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-signal transition-colors">
                  05. How do I send you my footage?
                </span>
                <span class="faq-icon w-9 h-9 flex items-center justify-center font-mono text-base border border-hairline bg-paperLight shrink-0">+</span>
              </button>
              <div id="faq-panel-4" class="hidden pb-6 pr-4 sm:pr-12 text-base text-inkMuted leading-relaxed">
                Share raw files via Google Drive, Frame.io, Dropbox, or WeTransfer. When you book a call or submit a brief below, paste your folder link directly for review.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 6: BOOK A CONSULTATION CALL (INTERACTIVE SCHEDULER)           -->
    <!-- ===================================================================== -->
    <section id="sec-booking" class="view-section border-b border-hairline py-16 sm:py-24 bg-paperLight">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <div class="mb-10 pb-6 border-b border-hairline flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Schedule a call</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-ink">
              Book a 1-on-1 production consultation.
            </h2>
          </div>
          <p class="text-sm text-inkMuted max-w-[46ch]">
            Pick a date and 24-hour slot below to scope your edit with Umang and receive an instant <code class="font-mono text-xs">.ics</code> calendar invite.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 border border-ink bg-paper">

          <!-- Left 5 Columns: Interactive Calendar Date Picker -->
          <div class="lg:col-span-5 p-6 sm:p-8 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="font-mono text-xs uppercase tracking-wider text-ink font-semibold">01 / Date</span>
                <div class="flex items-center gap-2">
                  <button type="button" id="cal-prev-month" aria-label="Previous month" class="min-w-[40px] min-h-[40px] px-3 py-1.5 border border-hairline bg-paperLight hover:bg-paperMuted font-mono text-sm">
                    ‹
                  </button>
                  <span id="cal-month-label" class="font-display font-bold text-base text-ink min-w-[135px] text-center">October 2026</span>
                  <button type="button" id="cal-next-month" aria-label="Next month" class="min-w-[40px] min-h-[40px] px-3 py-1.5 border border-hairline bg-paperLight hover:bg-paperMuted font-mono text-sm">
                    ›
                  </button>
                </div>
              </div>

              <div class="grid grid-cols-7 text-center font-mono text-xs text-inkSubtle pb-2.5 border-b border-hairline">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
              </div>

              <div id="calendar-days-grid" class="grid grid-cols-7 gap-1.5 pt-3 font-mono text-xs"></div>
            </div>

            <div class="mt-8 pt-5 border-t border-hairline space-y-2 text-xs text-inkMuted font-mono">
              <div class="flex items-center justify-between">
                <span>Date:</span>
                <strong id="selected-date-display" class="text-ink">Sunday, Oct 18, 2026</strong>
              </div>
              <div class="flex items-center justify-between">
                <span>Slot:</span>
                <strong id="selected-slot-display" class="text-signal">11:00 (EST)</strong>
              </div>
            </div>
          </div>

          <!-- Right 7 Columns: Timezone, 16 Time Slots (09:00-00:00), & Client Details -->
          <div class="lg:col-span-7 p-6 sm:p-8 bg-paperLight">
            <form id="booking-form" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="booking-timezone" class="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-2">
                    02 / Timezone
                  </label>
                  <select id="booking-timezone" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline font-mono text-xs text-ink">
                    <option value="EST (Eastern Standard Time)">EST (Eastern Standard Time)</option>
                    <option value="IST (India Standard Time · UTC+5:30)">IST (India Standard Time · UTC+5:30)</option>
                    <option value="PST (Pacific Standard Time)">PST (Pacific Standard Time)</option>
                    <option value="GMT / UTC (London)">GMT / UTC (London)</option>
                  </select>
                </div>
                <div>
                  <label for="booking-focus" class="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-2">
                    03 / Project scope
                  </label>
                  <select id="booking-focus" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline font-mono text-xs text-ink">
                    <option value="Flagship Video Editing (Long-Form)">Flagship Video Editing (Long-Form)</option>
                    <option value="YouTube / Instagram Reels Batch">YouTube / Instagram Reels Batch</option>
                    <option value="Motion Graphics & Visual Effects">Motion Graphics &amp; Visual Effects</option>
                    <option value="High-CTR Thumbnail Package">High-CTR Thumbnail Package</option>
                    <option value="Full Channel Retainer">Full Channel Retainer</option>
                  </select>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-2.5">
                  <span class="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                    04 / Time slot (24h)
                  </span>
                  <span class="font-mono text-xs text-inkMuted">30-minute consultation</span>
                </div>
                <div id="time-slots-grid" class="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs"></div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-hairline">
                <div>
                  <label for="booking-name" class="block font-mono text-xs text-inkMuted mb-1.5">Full name *</label>
                  <input id="booking-name" type="text" required placeholder="Your name" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink" />
                </div>
                <div>
                  <label for="booking-email" class="block font-mono text-xs text-inkMuted mb-1.5">Email address *</label>
                  <input id="booking-email" type="email" required placeholder="you@channel.com" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink" />
                </div>
              </div>

              <div>
                <label for="booking-footage" class="block font-mono text-xs text-inkMuted mb-1.5">
                  Channel URL or raw footage link (optional)
                </label>
                <input id="booking-footage" type="text" placeholder="https://youtube.com/@yourchannel or Drive folder link" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink" />
              </div>

              <button type="submit" class="w-full min-h-[48px] bg-signal hover:bg-signalHover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider py-4 transition-colors">
                Confirm Appointment →
              </button>
            </form>

            <!-- Booking Confirmation Receipt Box -->
            <div id="booking-confirmation" class="hidden mt-6 p-5 border border-ink bg-paper space-y-4">
              <div class="flex items-center justify-between border-b border-hairline pb-3">
                <span class="font-mono text-xs uppercase tracking-wider text-trackEmerald font-semibold">
                  ✓ Consultation slot reserved with beazt
                </span>
                <span id="booking-ref-id" class="font-mono text-xs text-inkMuted">REF #BZ-2026</span>
              </div>
              <p id="booking-summary-text" class="text-sm text-ink leading-relaxed"></p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button type="button" id="btn-download-ics" class="min-h-[42px] px-4 py-2.5 bg-ink text-paper font-mono text-xs uppercase tracking-wider hover:bg-signal transition-colors">
                  Download Calendar Invite (.ICS)
                </button>
                <a id="booking-wa-followup" href="https://wa.me/917983652995" target="_blank" rel="noopener noreferrer" class="min-h-[42px] inline-flex items-center px-4 py-2.5 border border-ink text-ink font-mono text-xs uppercase tracking-wider hover:bg-paperMuted transition-colors">
                  Send Details via WhatsApp →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 7: DIRECT CONTACT & CHANNELS                                  -->
    <!-- ===================================================================== -->
    <section id="sec-contact" class="view-section py-16 sm:py-24 border-b border-hairline bg-paper">
      <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          <!-- Left 5 Columns: Direct Studio Channels -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <p class="font-mono text-xs text-signal uppercase tracking-wider mb-2">Contact</p>
              <h2 class="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-3">
                Start a project or send a raw folder.
              </h2>
              <p class="text-inkMuted text-base leading-relaxed">
                Write to our production desk directly or reach out on WhatsApp for same-day turnaround availability.
              </p>
            </div>

            <div class="border-t border-hairline divide-y divide-hairline">
              <a href="mailto:contact@beaztmotions.org" class="py-4 flex items-center justify-between group">
                <div>
                  <span class="font-mono text-xs uppercase text-inkSubtle block">Email</span>
                  <span class="font-display font-bold text-base text-ink group-hover:text-signal transition-colors">contact@beaztmotions.org</span>
                </div>
                <span class="font-mono text-xs text-inkMuted">↗</span>
              </a>
              <a href="https://wa.me/917983652995" target="_blank" rel="noopener noreferrer" class="py-4 flex items-center justify-between group">
                <div>
                  <span class="font-mono text-xs uppercase text-inkSubtle block">WhatsApp</span>
                  <span class="font-display font-bold text-base text-ink group-hover:text-signal transition-colors">+91-7983652995</span>
                </div>
                <span class="font-mono text-xs text-inkMuted">↗</span>
              </a>
              <a href="https://www.instagram.com/beaztmotions" target="_blank" rel="noopener noreferrer" class="py-4 flex items-center justify-between group">
                <div>
                  <span class="font-mono text-xs uppercase text-inkSubtle block">Instagram</span>
                  <span class="font-display font-bold text-base text-ink group-hover:text-signal transition-colors">@beaztmotions</span>
                </div>
                <span class="font-mono text-xs text-inkMuted">↗</span>
              </a>
              <a href="https://www.linkedin.com/company/beaztmotions" target="_blank" rel="noopener noreferrer" class="py-4 flex items-center justify-between group">
                <div>
                  <span class="font-mono text-xs uppercase text-inkSubtle block">LinkedIn</span>
                  <span class="font-display font-bold text-base text-ink group-hover:text-signal transition-colors">linkedin.com/company/beaztmotions</span>
                </div>
                <span class="font-mono text-xs text-inkMuted">↗</span>
              </a>
            </div>
          </div>

          <!-- Right 7 Columns: Project Brief Form -->
          <div class="lg:col-span-7 border border-ink bg-paperLight p-6 sm:p-10">
            <h3 class="font-display font-bold text-2xl text-ink mb-6">Send a project brief</h3>
            <form id="contact-form" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="contact-name" class="block font-mono text-xs text-inkMuted mb-1.5">Name *</label>
                  <input id="contact-name" type="text" required placeholder="Your name" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink" />
                </div>
                <div>
                  <label for="contact-email" class="block font-mono text-xs text-inkMuted mb-1.5">Email *</label>
                  <input id="contact-email" type="email" required placeholder="you@domain.com" class="w-full min-h-[44px] px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink" />
                </div>
              </div>
              <div>
                <label for="contact-message" class="block font-mono text-xs text-inkMuted mb-1.5">Project details &amp; target turnaround *</label>
                <textarea id="contact-message" rows="4" required placeholder="Tell us about your channel format, footage length, and deadline..." class="w-full px-3.5 py-2.5 bg-paper border border-hairline text-sm text-ink"></textarea>
              </div>
              <button type="submit" class="w-full min-h-[48px] bg-ink hover:bg-signal text-paper text-xs sm:text-sm font-semibold uppercase tracking-wider py-3.5 transition-colors">
                Send Message →
              </button>
            </form>
            <div id="contact-feedback" class="hidden mt-4 p-4 border border-ink bg-paper text-xs font-mono text-ink"></div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ===================================================================== -->
  <!-- STUDIO FOOTER                                                         -->
  <!-- ===================================================================== -->
  <footer class="cinema-surface border-t border-cinemaBorder pt-14 pb-10">
    <div class="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cinemaBorder">

        <div class="md:col-span-5">
          <div class="font-display font-bold text-3xl tracking-tighter text-white lowercase mb-3">
            beazt<span class="text-signal">.</span>
          </div>
          <p class="text-stone-300 text-sm max-w-[40ch] leading-relaxed mb-4">
            Independent video editing, motion design, and thumbnail studio led by Umang. Built for creators and brands publishing on a 24–48 hour turnaround.
          </p>
        </div>

        <div class="md:col-span-3">
          <h3 class="font-mono text-xs uppercase tracking-wider text-stone-400 mb-4">Navigation</h3>
          <ul class="space-y-2.5 text-sm text-stone-300">
            <li><button type="button" data-nav-view="overview" class="nav-view-trigger hover:text-white transition-colors">Index</button></li>
            <li><button type="button" data-nav-view="work" class="nav-view-trigger hover:text-white transition-colors">Selected work</button></li>
            <li><button type="button" data-nav-view="services" class="nav-view-trigger hover:text-white transition-colors">Capabilities &amp; estimator</button></li>
            <li><button type="button" data-dropdown-target="sec-about" class="about-dropdown-item hover:text-white transition-colors">Client notes</button></li>
            <li><button type="button" data-dropdown-target="sec-team" class="about-dropdown-item hover:text-white transition-colors">Join the roster</button></li>
            <li><button type="button" data-nav-view="booking" class="nav-view-trigger text-signal font-semibold hover:underline">Book a call →</button></li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <h3 class="font-mono text-xs uppercase tracking-wider text-stone-400 mb-4">Direct desk</h3>
          <ul class="space-y-2.5 text-xs font-mono text-stone-300">
            <li><a href="mailto:contact@beaztmotions.org" class="hover:text-white underline decoration-stone-600">contact@beaztmotions.org</a></li>
            <li><a href="https://wa.me/917983652995" target="_blank" rel="noopener noreferrer" class="hover:text-white underline decoration-stone-600">WhatsApp +91-7983652995</a></li>
            <li><a href="https://www.instagram.com/beaztmotions" target="_blank" rel="noopener noreferrer" class="hover:text-white underline decoration-stone-600">Instagram @beaztmotions</a></li>
            <li><a href="https://www.linkedin.com/company/beaztmotions" target="_blank" rel="noopener noreferrer" class="hover:text-white underline decoration-stone-600">linkedin.com/company/beaztmotions</a></li>
          </ul>
        </div>

      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-400">
        <div>© 2024–2026 beazt (beaztmotions.org). All rights reserved.</div>
        <div>Client edits © beazt &amp; respective creators · Format reference stills licensed via Pexels &amp; Unsplash.</div>
      </div>
    </div>
  </footer>

  <!-- ===================================================================== -->
  <!-- MODAL: PORTFOLIO VIDEO PLAYER                                         -->
  <!-- ===================================================================== -->
  <div id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-proj-title" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-cinema text-paper border border-stone-600 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div class="bg-cinemaElevated px-5 py-3.5 flex items-center justify-between border-b border-cinemaBorder">
        <div class="flex items-center gap-2.5 font-mono text-xs">
          <span id="modal-proj-badge" class="px-2 py-0.5 bg-signal text-white font-medium">beazt cut</span>
          <span id="modal-proj-code" class="text-stone-300">BZ-01</span>
        </div>
        <button type="button" id="close-project-modal" aria-label="Close modal" class="min-h-[36px] font-mono text-xs px-3 py-1 border border-cinemaBorder text-stone-300 hover:text-white">
          ESC / CLOSE ×
        </button>
      </div>

      <div class="p-6 space-y-5">
        <div id="modal-media-container" class="aspect-16-9 bg-black overflow-hidden border border-cinemaBorder relative">
          <video
            id="modal-proj-video"
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/video/showreel.mp4" data-bm-src="reel"
            poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" poster="assets/images/slot-01.jpg" data-bm-poster="p1"
            controls
            playsinline
            class="w-full h-full object-cover"
          ></video>
          <img id="modal-proj-img" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9'><rect width='16' height='9' fill='%23111110'/></svg>" src="assets/images/slot-01.jpg" data-bm-src="p1" alt="Project preview frame" class="hidden w-full h-full object-cover" />
          <iframe id="modal-proj-iframe" title="Project Video Embed" class="hidden w-full h-full" allowfullscreen></iframe>
        </div>

        <div class="flex flex-wrap items-start justify-between gap-4 border-b border-cinemaBorder pb-4">
          <div>
            <h3 id="modal-proj-title" class="font-display font-bold text-2xl text-white">Project Title</h3>
            <p id="modal-proj-sub" class="font-mono text-xs text-stone-300 mt-1">Category &amp; Deliverable Spec</p>
          </div>
          <a id="modal-proj-source-link" href="https://www.instagram.com/beaztmotions" target="_blank" rel="noopener noreferrer" class="min-h-[38px] inline-flex items-center px-3.5 py-1.5 border border-cinemaBorder text-stone-200 hover:border-signal hover:text-white font-mono text-xs transition-colors">
            View creator / source ↗
          </a>
        </div>

        <p id="modal-proj-desc" class="text-sm sm:text-base text-stone-300 leading-relaxed"></p>

        <div class="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-cinemaBorder">
          <span class="font-mono text-xs text-stone-400">Turnaround for similar scope: <strong class="text-white">24–48 hours</strong></span>
          <button type="button" id="modal-book-similar-btn" class="min-h-[42px] px-5 py-2 bg-signal hover:bg-signalHover text-white text-xs font-semibold uppercase tracking-wider transition-colors">
            Book similar edit →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- APPLICATION JAVASCRIPT                                                -->
  <!-- ===================================================================== -->
  <script src="js/app.js" onerror="var s=document.createElement('script');s.src='app.js';document.body.appendChild(s);"></script>
</body>
</html>
2. css/styles.css (or styles.css)
:root {
      --bg-paper: #F4F1EA;
      --bg-cinema: #111110;
      --ink: #121210;
      --signal: #D9381E;
      --hairline: #DAD4C8;
    }
    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }
    body {
      background-color: #F4F1EA;
      color: #121210;
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      letter-spacing: -0.005em;
    }
    h1, h2, h3, h4, .font-display {
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: -0.03em;
    }
    .hidden { display: none !important; }
    @media (min-width: 640px) {
      .sm\:inline { display: inline !important; }
    }
    @media (min-width: 768px) {
      .md\:inline { display: inline !important; }
    }
    @media (min-width: 1024px) {
      .lg\:flex { display: flex !important; }
      .lg\:hidden { display: none !important; }
    }
    .border-hairline { border-color: #DAD4C8; }
    .border-cinema { border-color: #2C2B28; }
    .cinema-surface {
      background-color: #111110;
      color: #F4F1EA;
    }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #E8E3D8; }
    ::-webkit-scrollbar-thumb { background: #9C9689; }
    ::-webkit-scrollbar-thumb:hover { background: #4E4B46; }
    *:focus-visible {
      outline: 2px solid #D9381E !important;
      outline-offset: 2px !important;
    }
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    .timecode-pill { font-variant-numeric: tabular-nums; }
    .aspect-16-9 { aspect-ratio: 16 / 9; }
3. js/app.js (or app.js)
window.__BM_ASSETS = {
  p1: 'assets/images/slot-01.jpg',
  p2: 'assets/images/slot-02.jpg',
  p3: 'assets/images/slot-03.jpg',
  p4: 'assets/images/slot-04.jpg',
  p5: 'assets/images/slot-05.jpg',
  p6: 'assets/images/slot-06.jpg',
  reel: 'assets/video/showreel.mp4'
};

(function () {
      'use strict';

      // Hydrate initial HTML media elements from window.__BM_ASSETS
      document.querySelectorAll("[data-bm-poster]").forEach(function (el) {
        var k = el.getAttribute("data-bm-poster");
        if (window.__BM_ASSETS && window.__BM_ASSETS[k]) el.setAttribute("poster", window.__BM_ASSETS[k]);
      });
      document.querySelectorAll("[data-bm-src]").forEach(function (el) {
        var k = el.getAttribute("data-bm-src");
        if (window.__BM_ASSETS && window.__BM_ASSETS[k]) {
          el.setAttribute("src", window.__BM_ASSETS[k]);
          if (el.tagName === "VIDEO") el.load();
        }
      });


      // -----------------------------------------------------------------------
      // 1. HERO SHOWREEL VIDEO PLAYER & CHAPTER SCRUBBER
      // -----------------------------------------------------------------------
      const reelChapters = [
        {
          code: '01 / Gaurav Sharma (210k subscribers)',
          aspect: '16:9 · 24fps',
          tc: '00:00:04:12',
          startTime: 4.5,
          pill: 'beazt client cut · verified creator',
          title: 'Dual-Guitar Acoustic Comparison & Multi-Mic Sync',
          credit: 'Edited by Umang & team · ',
          img: 'assets/images/slot-04.jpg',
          portfolioId: 'bm-edit-04'
        },
        {
          code: '02 / Outdoor creator vlog',
          aspect: '16:9 · 24fps',
          tc: '00:00:00:08',
          startTime: 0.0,
          pill: 'beazt client cut · archive #01',
          title: 'Outdoor Creator Vlog & Retention Pacing Cut',
          credit: 'Dynamic graphic compositing & jump-cut rhythm · ',
          img: 'assets/images/slot-01.jpg',
          portfolioId: 'bm-edit-01'
        },
        {
          code: '03 / Studio podcast interview',
          aspect: '16:9 · broadcast',
          tc: '00:00:03:04',
          startTime: 3.0,
          pill: 'beazt client cut · archive #03',
          title: 'Executive Studio Podcast & Multi-Cam Switch',
          credit: 'Dialogue cleanup & warm bookcase studio grade · ',
          img: 'assets/images/slot-03.jpg',
          portfolioId: 'bm-edit-03'
        },
        {
          code: '04 / Short-form hook cut',
          aspect: '9:16 · Reels & Shorts',
          tc: '00:00:01:16',
          startTime: 1.5,
          pill: 'beazt client cut · archive #02',
          title: 'Direct-to-Camera Short-Form Creator Hook',
          credit: 'First-3-second hook structure & breath trimming · ',
          img: 'assets/images/slot-02.jpg',
          portfolioId: 'bm-edit-02'
        }
      ];

      let activeHeroChapterIdx = 0;
      const heroVideo = document.getElementById('hero-showreel-video');
      const heroImg = document.getElementById('hero-monitor-img');
      const heroCode = document.getElementById('reel-chapter-code');
      const heroAspect = document.getElementById('reel-aspect-badge');
      const heroTc = document.getElementById('hero-tc-counter');
      const heroPill = document.getElementById('hero-client-pill');
      const heroTitle = document.getElementById('hero-monitor-title');
      const heroPlayToggle = document.getElementById('hero-play-toggle');
      const heroPlayIcon = document.getElementById('hero-play-icon');
      const heroPlayLabel = document.getElementById('hero-play-label');
      const heroPlaybackStatus = document.getElementById('hero-playback-status');
      const chapterBtns = document.querySelectorAll('.reel-chapter-btn');

      function selectHeroChapter(idx, autoPlay) {
        const ch = reelChapters[idx];
        if (!ch) return;
        activeHeroChapterIdx = idx;
        heroImg.src = ch.img;
        if (heroVideo) {
          heroVideo.poster = ch.img;
          try {
            heroVideo.currentTime = ch.startTime;
          } catch (e) {}
          if (autoPlay) {
            const p = heroVideo.play();
            if (p && typeof p.then === 'function') {
              p.then(function () {
                heroPlayIcon.textContent = '❚❚';
                heroPlayLabel.textContent = 'Pause reel';
                if (heroPlaybackStatus) heroPlaybackStatus.textContent = 'Playing ' + ch.code;
              }).catch(function () {});
            }
          }
        }
        heroCode.textContent = ch.code;
        if (heroAspect) heroAspect.textContent = ch.aspect;
        heroTc.textContent = ch.tc;
        heroPill.textContent = ch.pill;
        heroTitle.textContent = ch.title;

        chapterBtns.forEach(function (b, i) {
          if (i === idx) {
            b.className = 'reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-signal bg-cinemaCard text-white transition-colors';
          } else {
            b.className = 'reel-chapter-btn min-h-[38px] px-2.5 py-1 border border-cinemaBorder hover:border-stone-500 text-stone-300 transition-colors';
          }
        });
      }

      chapterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-reel-idx'), 10);
          selectHeroChapter(idx, true);
        });
      });

      if (heroPlayToggle && heroVideo) {
        heroPlayToggle.addEventListener('click', function () {
          if (heroVideo.paused) {
            const p = heroVideo.play();
            if (p && typeof p.then === 'function') {
              p.then(function () {
                heroPlayIcon.textContent = '❚❚';
                heroPlayLabel.textContent = 'Pause reel';
                if (heroPlaybackStatus) heroPlaybackStatus.textContent = 'Playing reel (24fps)';
              }).catch(function () {});
            }
          } else {
            heroVideo.pause();
            heroPlayIcon.textContent = '▶';
            heroPlayLabel.textContent = 'Play reel';
            if (heroPlaybackStatus) heroPlaybackStatus.textContent = 'Reel paused';
          }
        });

        heroVideo.addEventListener('timeupdate', function () {
          const sec = Math.floor(heroVideo.currentTime || 0);
          const frames = Math.floor(((heroVideo.currentTime || 0) % 1) * 24);
          const secStr = sec < 10 ? '0' + sec : String(sec);
          const frStr = frames < 10 ? '0' + frames : String(frames);
          heroTc.textContent = '00:00:' + secStr + ':' + frStr;
        });
      }

      const heroOpenModalBtn = document.getElementById('hero-open-modal-btn');
      if (heroOpenModalBtn) {
        heroOpenModalBtn.addEventListener('click', function () {
          const ch = reelChapters[activeHeroChapterIdx] || reelChapters[0];
          openProjectModal(ch.portfolioId);
        });
      }

      // -----------------------------------------------------------------------
      // 2. PORTFOLIO CATALOG (ASYMMETRIC EDITORIAL WORK INDEX)
      //    Varying column spans (7 / 5 / 5 / 7 / 6 / 6) for natural studio rhythm
      // -----------------------------------------------------------------------
      const portfolioItems = [
        {
          id: 'bm-edit-04',
          code: '01 / Verified client cut',
          mode: 'captured',
          category: 'motion',
          colSpan: 'lg:col-span-7',
          badge: 'Gaurav Sharma · 210k YouTube subscribers',
          title: 'Dual-Guitar Music & Creator Comparison Cut',
          subtitle: 'Multi-track acoustic audio sync & studio color grade',
          img: 'assets/images/slot-04.jpg',
          startTime: 4.5,
          duration: '08:42 master',
          desc: 'Produced by beazt for verified YouTube creator and guitar educator Gaurav Sharma (210k subscribers). Combines phase-accurate dual-guitar audio alignment, studio key-light grading, and chapter pacing.',
          sourceUrl: 'https://www.gauravsharmamusic.com/',
          sourceLabel: 'gauravsharmamusic.com'
        },
        {
          id: 'bm-edit-06',
          code: '02 / Verified client cut',
          mode: 'captured',
          category: 'reels',
          colSpan: 'lg:col-span-5 lg:mt-10',
          badge: 'Gaurav Sharma · 210k YouTube subscribers',
          title: 'Direct-to-Audience Creator Monologue Cut',
          subtitle: 'Voice-driven pacing & tight pause removal · 16:9 & 9:16',
          img: 'assets/images/slot-06.jpg',
          startTime: 7.5,
          duration: '00:58 cut',
          desc: 'Produced by beazt for Gaurav Sharma. Cut to preserve conversational authenticity while tightening breath pauses and maintaining dark studio contrast.',
          sourceUrl: 'https://www.gauravsharmamusic.com/',
          sourceLabel: 'gauravsharmamusic.com'
        },
        {
          id: 'bm-edit-03',
          code: '03 / beazt archive cut',
          mode: 'captured',
          category: 'podcast',
          colSpan: 'lg:col-span-5',
          badge: 'Studio podcast production',
          title: 'Executive Library Podcast & Multi-Cam Interview',
          subtitle: 'Broadcast condenser dialogue polish & warm wood-tone grade',
          img: 'assets/images/slot-03.jpg',
          startTime: 3.0,
          duration: '42:15 episode',
          desc: 'Multi-camera podcast episode cut by beazt featuring active speaker switching, broadcast EQ and noise reduction, and warm Rec.709 grading.',
          sourceUrl: 'https://www.instagram.com/beaztmotions',
          sourceLabel: '@beaztmotions'
        },
        {
          id: 'bm-edit-01',
          code: '04 / beazt archive cut',
          mode: 'captured',
          category: 'youtube',
          colSpan: 'lg:col-span-7 lg:mt-8',
          badge: 'Creator vlog retention edit',
          title: 'Outdoor Creator Vlog & Graphic Backdrop Cut',
          subtitle: 'High-energy jump-cut pacing & graphic integration',
          img: 'assets/images/slot-01.jpg',
          startTime: 0.0,
          duration: '11:20 vlog',
          desc: 'Creator vlog cut from the beazt archive featuring kinetic outdoor pacing, bold background graphic compositing, and punchy audio transitions.',
          sourceUrl: 'https://www.instagram.com/beaztmotions',
          sourceLabel: '@beaztmotions'
        },
        {
          id: 'bm-edit-05',
          code: '05 / beazt archive cut',
          mode: 'captured',
          category: 'podcast',
          colSpan: 'lg:col-span-6',
          badge: 'Multi-creator roundtable',
          title: 'Three-Creator Studio Sofa Roundtable Cut',
          subtitle: '3-lavalier room-tone balance & reaction punch-ins',
          img: 'assets/images/slot-05.jpg',
          startTime: 6.0,
          duration: '28:10 cut',
          desc: 'Conversational group episode edited for natural comedic timing, balanced three-mic dialogue levels, and clean wide-to-tight camera cuts.',
          sourceUrl: 'https://www.instagram.com/beaztmotions',
          sourceLabel: '@beaztmotions'
        },
        {
          id: 'bm-edit-02',
          code: '06 / beazt archive cut',
          mode: 'captured',
          category: 'reels',
          colSpan: 'lg:col-span-6',
          badge: 'Short-form hook engineering',
          title: 'First-3-Second Talking-Head Hook Cut',
          subtitle: 'YouTube Shorts & Instagram Reels · 9:16 & 16:9',
          img: 'assets/images/slot-02.jpg',
          startTime: 1.5,
          duration: '00:45 reel',
          desc: 'Short-form creator cut from the beazt archive built around immediate verbal hook delivery and zero dead air in the opening three seconds.',
          sourceUrl: 'https://www.instagram.com/beaztmotions',
          sourceLabel: '@beaztmotions'
        },
        {
          id: 'study-01',
          code: 'Sample 01 / Format reference',
          mode: 'studies',
          category: 'podcast',
          colSpan: 'lg:col-span-6',
          badge: 'Format sample · licensed Pexels footage',
          title: 'Solo Video Podcast & Condenser Mic Framing Spec',
          subtitle: 'Broadcast key-light skin calibration (not a client commission)',
          img: 'https://images.pexels.com/photos/36917947/pexels-photo-36917947/free-photo-of-podcaster-in-studio-with-microphone-setup.jpeg?auto=compress&cs=tinysrgb&w=1200',
          startTime: 3.0,
          duration: 'Format spec',
          desc: 'Illustrative finished-footage reference demonstrating our studio podcast color grade and close-mic framing. Licensed via Pexels (#36917947).',
          sourceUrl: 'https://www.pexels.com/search/video%20podcast/',
          sourceLabel: 'Pexels #36917947'
        },
        {
          id: 'study-02',
          code: 'Sample 02 / Format reference',
          mode: 'studies',
          category: 'youtube',
          colSpan: 'lg:col-span-6',
          badge: 'Format sample · licensed Pexels footage',
          title: 'Exterior Documentary & Travel Grade Spec',
          subtitle: 'Highlight roll-off & natural daylight LUT (not a client commission)',
          img: 'https://images.pexels.com/photos/35120013/pexels-photo-35120013/free-photo-of-filmmaking-team-capturing-scenic-outdoor-view.jpeg?auto=compress&cs=tinysrgb&w=1200',
          startTime: 0.0,
          duration: 'Format spec',
          desc: 'Illustrative finished-footage reference for exterior documentary grading and atmospheric sound design. Licensed via Pexels (#35120013).',
          sourceUrl: 'https://www.pexels.com/search/filmmaking/',
          sourceLabel: 'Pexels #35120013'
        },
        {
          id: 'study-03',
          code: 'Sample 03 / Format reference',
          mode: 'studies',
          category: 'motion',
          colSpan: 'lg:col-span-6',
          badge: 'Format sample · licensed Unsplash still',
          title: 'Live Studio Session & Stem-Synced Music Spec',
          subtitle: 'Multi-angle performance cutting (not a client commission)',
          img: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?fm=jpg&q=80&w=1200&auto=format&fit=crop',
          startTime: 4.5,
          duration: 'Format spec',
          desc: 'Illustrative finished-footage reference for acoustic music session cutting and warm film emulation. Licensed via Unsplash.',
          sourceUrl: 'https://unsplash.com/s/photos/musicians',
          sourceLabel: 'Unsplash Musicians'
        },
        {
          id: 'study-04',
          code: 'Sample 04 / Format reference',
          mode: 'studies',
          category: 'reels',
          colSpan: 'lg:col-span-6',
          badge: 'Format sample · licensed Pexels footage',
          title: 'Two-Mic Studio Interview to 9:16 Reels Spec',
          subtitle: 'Vertical repurposing & safe-zone framing (not a client commission)',
          img: 'https://images.pexels.com/photos/7383469/pexels-photo-7383469.jpeg?auto=compress&cs=tinysrgb&w=1200',
          startTime: 6.0,
          duration: 'Format spec',
          desc: 'Illustrative finished-footage reference showing how two-mic studio interviews are reframed into vertical Reels. Licensed via Pexels (#7383469).',
          sourceUrl: 'https://www.pexels.com/search/podcast%20studio/',
          sourceLabel: 'Pexels #7383469'
        }
      ];

      let activeMode = 'all';
      let activeCat = 'all';

      const portfolioGrid = document.getElementById('portfolio-grid');
      const portfolioCountLabel = document.getElementById('portfolio-count-label');

      function renderPortfolio() {
        const filtered = portfolioItems.filter(function (item) {
          const modeMatch = activeMode === 'all' || item.mode === activeMode;
          const catMatch = activeCat === 'all' || item.category === activeCat;
          return modeMatch && catMatch;
        });

        portfolioCountLabel.textContent = String(filtered.length);
        portfolioGrid.innerHTML = '';

        filtered.forEach(function (item) {
          const article = document.createElement('article');
          const spanClass = (activeMode === 'all' && activeCat === 'all') ? item.colSpan : 'lg:col-span-6';
          article.className = spanClass + ' group';
          article.innerHTML = `
            <div class="relative aspect-16-9 bg-cinemaElevated overflow-hidden border border-cinemaBorder group-hover:border-signal transition-colors cursor-pointer" data-inspect-id="${item.id}">
              <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 flex items-end justify-between p-4">
                <span class="px-3 py-1.5 bg-black/80 text-white font-mono text-xs border border-white/15 group-hover:bg-signal group-hover:border-signal transition-colors">
                  ▶ Play cut (${item.duration})
                </span>
                <span class="font-mono text-xs px-2.5 py-1 bg-black/80 text-stone-300 border border-white/10">
                  ${item.mode === 'captured' ? 'beazt client cut' : 'format sample'}
                </span>
              </div>
            </div>
            <div class="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-cinemaBorder pb-4">
              <div>
                <div class="font-mono text-xs text-signal">${item.code} · ${item.badge}</div>
                <h3 class="font-display font-bold text-xl text-white mt-1 group-hover:text-signal transition-colors cursor-pointer" data-inspect-id="${item.id}">
                  ${item.title}
                </h3>
                <p class="text-sm text-stone-300 mt-1 max-w-[60ch] leading-relaxed">${item.desc}</p>
              </div>
              <div class="flex sm:flex-col items-start sm:items-end justify-between gap-2 shrink-0 pt-1 sm:pt-0 font-mono text-xs">
                <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-white underline">
                  ${item.sourceLabel} ↗
                </a>
                <button type="button" data-inspect-id="${item.id}" class="text-stone-200 hover:text-signal font-semibold">
                  Inspect →
                </button>
              </div>
            </div>
          `;
          portfolioGrid.appendChild(article);
        });

        portfolioGrid.querySelectorAll('[data-inspect-id]').forEach(function (el) {
          el.addEventListener('click', function () {
            openProjectModal(el.getAttribute('data-inspect-id'));
          });
        });
      }

      document.querySelectorAll('.portfolio-mode-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeMode = btn.getAttribute('data-portfolio-mode');
          document.querySelectorAll('.portfolio-mode-btn').forEach(function (b) {
            if (b.getAttribute('data-portfolio-mode') === activeMode) {
              b.className = 'portfolio-mode-btn min-h-[38px] px-3 py-1.5 font-mono text-xs bg-cinemaCard border border-stone-500 text-white';
            } else {
              b.className = 'portfolio-mode-btn min-h-[38px] px-3 py-1.5 font-mono text-xs text-stone-400 hover:text-white border border-transparent';
            }
          });
          renderPortfolio();
        });
      });

      document.querySelectorAll('.cat-filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeCat = btn.getAttribute('data-cat-filter');
          document.querySelectorAll('.cat-filter-btn').forEach(function (b) {
            if (b.getAttribute('data-cat-filter') === activeCat) {
              b.className = 'cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-signal bg-signal text-white transition-colors';
            } else {
              b.className = 'cat-filter-btn min-h-[40px] px-3.5 py-1.5 text-xs font-medium border border-cinemaBorder bg-cinemaElevated text-stone-300 hover:text-white transition-colors';
            }
          });
          renderPortfolio();
        });
      });

      // Project Video Modal Logic
      const projectModal = document.getElementById('project-modal');
      const modalProjBadge = document.getElementById('modal-proj-badge');
      const modalProjCode = document.getElementById('modal-proj-code');
      const modalProjVideo = document.getElementById('modal-proj-video');
      const modalProjImg = document.getElementById('modal-proj-img');
      const modalProjTitle = document.getElementById('modal-proj-title');
      const modalProjSub = document.getElementById('modal-proj-sub');
      const modalProjDesc = document.getElementById('modal-proj-desc');
      const modalProjSourceLink = document.getElementById('modal-proj-source-link');

      function openProjectModal(itemId) {
        const item = portfolioItems.find(function (x) { return x.id === itemId; });
        if (!item) return;
        modalProjBadge.textContent = item.mode === 'captured' ? 'beazt client cut' : 'format sample';
        modalProjCode.textContent = item.code;
        modalProjTitle.textContent = item.title;
        modalProjSub.textContent = item.subtitle + ' · ' + item.duration;
        modalProjDesc.textContent = item.desc;
        modalProjSourceLink.href = item.sourceUrl;
        modalProjSourceLink.textContent = item.sourceLabel + ' ↗';

        modalProjImg.src = item.img;
        if (modalProjVideo) {
          modalProjVideo.poster = item.img;
          try {
            modalProjVideo.currentTime = item.startTime || 0;
          } catch (e) {}
          const p = modalProjVideo.play();
          if (p && typeof p.catch === 'function') p.catch(function () {});
        }
        projectModal.classList.remove('hidden');
      }

      function closeProjectModal() {
        projectModal.classList.add('hidden');
        if (modalProjVideo) {
          try { modalProjVideo.pause(); } catch (e) {}
        }
      }

      document.getElementById('close-project-modal').addEventListener('click', closeProjectModal);
      document.getElementById('modal-book-similar-btn').addEventListener('click', function () {
        closeProjectModal();
        switchView('booking');
      });

      renderPortfolio();

      // -----------------------------------------------------------------------
      // 3. CAPABILITIES INTERACTIVE INSPECTOR & TURNAROUND ESTIMATOR
      // -----------------------------------------------------------------------
      const serviceSpecs = {
        editing: {
          tag: '01 / Long-form editing',
          img: 'assets/images/slot-03.jpg',
          caption: 'Multi-cam sync, dialogue polish & studio grade',
          source: 'beazt cut',
          calcVal: 'longform'
        },
        motion: {
          tag: '02 / Motion graphics',
          img: 'assets/images/slot-01.jpg',
          caption: '60fps After Effects titles & graphic compositing',
          source: 'beazt cut',
          calcVal: 'motion'
        },
        reels: {
          tag: '03 / 9:16 Reels & Shorts',
          img: 'assets/images/slot-06.jpg',
          caption: 'Vertical 9:16 framing, captions & hook cuts',
          source: 'Gaurav Sharma cut',
          calcVal: 'reels'
        },
        thumbnails: {
          tag: '04 / Thumbnail packaging',
          img: 'assets/images/slot-04.jpg',
          caption: 'High-CTR subject separation & focal hierarchy',
          source: 'Gaurav Sharma (210k)',
          calcVal: 'thumbnail'
        }
      };

      const serviceCards = document.querySelectorAll('.service-card');
      const srvTag = document.getElementById('service-preview-tag');
      const srvImg = document.getElementById('service-preview-img');
      const srvCap = document.getElementById('service-preview-caption');
      const srvSrc = document.getElementById('service-preview-source');
      const calcServiceType = document.getElementById('calc-service-type');
      const calcFootageSlider = document.getElementById('calc-footage-slider');
      const calcFootageVal = document.getElementById('calc-footage-val');
      const calcTurnaroundOut = document.getElementById('calc-turnaround-out');
      const calcDeliverablesOut = document.getElementById('calc-deliverables-out');

      function updateEstimator() {
        const type = calcServiceType.value;
        const mins = parseInt(calcFootageSlider.value, 10);
        calcFootageVal.textContent = mins + ' mins';

        if (type === 'thumbnail') {
          calcTurnaroundOut.textContent = '12–24 Hours';
          calcDeliverablesOut.textContent = '3× 1280×720 High-CTR PNGs + PSD';
        } else if (type === 'reels') {
          calcTurnaroundOut.textContent = mins > 90 ? '36–48 Hours' : '24 Hours';
          calcDeliverablesOut.textContent = '3× 9:16 Vertical Edits + Captions';
        } else if (type === 'motion') {
          calcTurnaroundOut.textContent = mins > 60 ? '48–72 Hours' : '24–48 Hours';
          calcDeliverablesOut.textContent = '4K Master + Custom AE Motion Graphics';
        } else {
          calcTurnaroundOut.textContent = mins > 90 ? '48 Hours' : '24–48 Hours';
          calcDeliverablesOut.textContent = '16:9 Master + Audio Sync + Color Grade';
        }
      }

      serviceCards.forEach(function (card) {
        card.addEventListener('click', function () {
          const id = card.getAttribute('data-service-id');
          const spec = serviceSpecs[id];
          if (!spec) return;
          srvTag.textContent = spec.tag;
          srvImg.src = spec.img;
          srvCap.textContent = spec.caption;
          srvSrc.textContent = spec.source;
          calcServiceType.value = spec.calcVal;
          updateEstimator();

          serviceCards.forEach(function (c) {
            if (c.getAttribute('data-service-id') === id) {
              c.className = 'service-card py-6 sm:py-7 px-4 sm:px-6 bg-paperLight border-l-4 border-l-signal cursor-pointer transition-colors';
            } else {
              c.className = 'service-card py-6 sm:py-7 px-4 sm:px-6 hover:bg-paperLight/70 border-l-4 border-l-transparent cursor-pointer transition-colors';
            }
          });
        });
      });

      calcServiceType.addEventListener('change', updateEstimator);
      calcFootageSlider.addEventListener('input', updateEstimator);

      document.getElementById('btn-calc-book').addEventListener('click', function () {
        const bookingFocus = document.getElementById('booking-focus');
        if (calcServiceType.value === 'reels') bookingFocus.selectedIndex = 1;
        else if (calcServiceType.value === 'motion') bookingFocus.selectedIndex = 2;
        else if (calcServiceType.value === 'thumbnail') bookingFocus.selectedIndex = 3;
        else bookingFocus.selectedIndex = 0;
        switchView('booking');
      });

      // -----------------------------------------------------------------------
      // 4. CLIENT NOTES CAROUSEL
      // -----------------------------------------------------------------------
      const testimonials = [
        {
          name: 'Gaurav Sharma',
          role: 'YouTube Creator & Music Educator — 210k Subscribers',
          badge: 'Verified creator client · 210k YouTube subscribers',
          badgeClass: 'font-mono text-xs px-2.5 py-1 bg-ink text-paper',
          note: 'Portfolio cuts 01 & 02',
          avatar: 'assets/images/slot-04.jpg',
          linkUrl: 'https://www.gauravsharmamusic.com/',
          linkText: 'gauravsharmamusic.com ↗',
          quote: '"Working with Umang and his team was a game-changer for my brand. His clarity in communication, sharp creative instincts, and deep understanding of social media strategy helped me streamline my content and actually see results. What I appreciated most was that he didn\'t just chase trends, he understood my voice and crafted a presence that felt authentic. If you\'re looking for someone who blends strategy with soul, Umang is your guy."'
        },
        {
          name: 'Logan',
          role: 'YouTube Creator (Archive Quote · Handle Pending Client Release)',
          badge: 'Site archive quote · channel link pending release',
          badgeClass: 'font-mono text-xs px-2.5 py-1 bg-paperMuted text-ink border border-hairline',
          note: 'From beaztmotions.vercel.app',
          avatar: 'assets/images/slot-01.jpg',
          linkUrl: 'https://beaztmotions.vercel.app/about',
          linkText: 'Source archive ↗',
          quote: '"As a YouTube creator, I\'ve always juggled a million things like scripting, shooting, editing, thumbnails, SEO... you name it. Partnering with beazt took a huge weight off my shoulders. They didn\'t just \'edit videos\'. They helped shape my channel\'s visual identity and actually made my content feel more premium without losing the raw, personal vibe my audience expects. What stood out most? They listen. My channel\'s growth speaks for itself."'
        },
        {
          name: 'Alex Thompson',
          role: 'Instagram Creator (Archive Quote · Handle Pending Client Release)',
          badge: 'Site archive quote · handle pending release',
          badgeClass: 'font-mono text-xs px-2.5 py-1 bg-paperMuted text-ink border border-hairline',
          note: 'From beaztmotions.vercel.app',
          avatar: 'assets/images/slot-02.jpg',
          linkUrl: 'https://beaztmotions.vercel.app/about',
          linkText: 'Source archive ↗',
          quote: '"I\'ve worked with a handful of editors and creative teams over the years, but beazt honestly blew me away. They didn\'t just clean up my videos, they elevated them. Their sense of pacing, storytelling, and visuals matched perfectly with my channel\'s vibe, and the process was insanely smooth. I sent over raw footage, and they came back with edits that felt like I\'d done them myself, only better."'
        }
      ];

      let activeTestIdx = 0;
      const testQuoteText = document.getElementById('test-quote-text');
      const testAuthorName = document.getElementById('test-author-name');
      const testAuthorRole = document.getElementById('test-author-role');
      const testAuthorAvatar = document.getElementById('test-author-avatar');
      const testBadge = document.getElementById('test-verification-badge');
      const testNote = document.getElementById('test-context-note');
      const testExtLink = document.getElementById('test-external-link');
      const testCounter = document.getElementById('test-counter');
      const testSelectBtns = document.querySelectorAll('.test-select-btn');

      function setTestimonial(idx) {
        activeTestIdx = (idx + testimonials.length) % testimonials.length;
        const t = testimonials[activeTestIdx];
        testQuoteText.textContent = t.quote;
        testAuthorName.textContent = t.name;
        testAuthorRole.textContent = t.role;
        if (testAuthorAvatar) testAuthorAvatar.src = t.avatar;
        testBadge.textContent = t.badge;
        testBadge.className = t.badgeClass;
        testNote.textContent = t.note;
        if (testExtLink) {
          testExtLink.href = t.linkUrl;
          testExtLink.textContent = t.linkText;
        }
        testCounter.textContent = '0' + (activeTestIdx + 1) + ' / 0' + testimonials.length;

        testSelectBtns.forEach(function (btn, i) {
          if (i === activeTestIdx) {
            btn.className = 'test-select-btn w-full text-left p-4 bg-paper border-l-4 border-l-signal transition-colors';
          } else {
            btn.className = 'test-select-btn w-full text-left p-4 hover:bg-paper border-l-4 border-l-transparent transition-colors';
          }
        });
      }

      document.getElementById('test-prev-btn').addEventListener('click', function () {
        setTestimonial(activeTestIdx - 1);
      });
      document.getElementById('test-next-btn').addEventListener('click', function () {
        setTestimonial(activeTestIdx + 1);
      });
      testSelectBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          setTestimonial(parseInt(btn.getAttribute('data-test-idx'), 10));
        });
      });

      // -----------------------------------------------------------------------
      // 5. FAQ ACCORDION
      // -----------------------------------------------------------------------
      document.querySelectorAll('.faq-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = btn.getAttribute('data-faq-toggle');
          const panel = document.getElementById('faq-panel-' + idx);
          const icon = btn.querySelector('.faq-icon');
          const expanded = btn.getAttribute('aria-expanded') === 'true';

          btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          if (expanded) {
            panel.classList.add('hidden');
            icon.textContent = '+';
          } else {
            panel.classList.remove('hidden');
            icon.textContent = '−';
          }
        });
      });

      // -----------------------------------------------------------------------
      // 6. INTERACTIVE APPOINTMENT CALENDAR & 16 TIME SLOTS (09:00 - 00:00)
      // -----------------------------------------------------------------------
      const monthsData = [
        { name: 'October 2026', year: 2026, monthIndex: 9, days: 31, startDay: 4 },
        { name: 'November 2026', year: 2026, monthIndex: 10, days: 30, startDay: 0 }
      ];
      let currentMonthIdx = 0;
      let selectedDay = 18;
      let selectedSlot = '11:00';

      const timeSlots = [
        '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00', '20:00',
        '21:00', '22:00', '23:00', '00:00'
      ];

      const calMonthLabel = document.getElementById('cal-month-label');
      const calGrid = document.getElementById('calendar-days-grid');
      const selectedDateDisplay = document.getElementById('selected-date-display');
      const selectedSlotDisplay = document.getElementById('selected-slot-display');
      const bookingTimezone = document.getElementById('booking-timezone');
      const timeSlotsGrid = document.getElementById('time-slots-grid');

      function updateBookingSummaryLabels() {
        const m = monthsData[currentMonthIdx];
        const dateObj = new Date(m.year, m.monthIndex, selectedDay);
        const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
        const shortMonth = m.name.split(' ')[0].slice(0, 3);
        selectedDateDisplay.textContent = weekday + ', ' + shortMonth + ' ' + selectedDay + ', ' + m.year;
        const tzShort = bookingTimezone.value.split(' ')[0];
        selectedSlotDisplay.textContent = selectedSlot + ' (' + tzShort + ')';
      }

      function renderCalendar() {
        const m = monthsData[currentMonthIdx];
        calMonthLabel.textContent = m.name;
        calGrid.innerHTML = '';

        for (let i = 0; i < m.startDay; i++) {
          const empty = document.createElement('div');
          empty.className = 'min-h-[42px] p-2 text-center text-stone-300';
          calGrid.appendChild(empty);
        }

        for (let d = 1; d <= m.days; d++) {
          const btn = document.createElement('button');
          btn.type = 'button';
          const isPast = currentMonthIdx === 0 && d < 18;
          const isSelected = d === selectedDay;

          if (isPast) {
            btn.disabled = true;
            btn.className = 'min-h-[42px] p-2 text-center text-stone-400 line-through cursor-not-allowed';
          } else if (isSelected) {
            btn.className = 'min-h-[42px] p-2 text-center bg-signal text-white font-bold border border-ink';
          } else {
            btn.className = 'min-h-[42px] p-2 text-center bg-paperLight hover:bg-paperMuted text-ink border border-hairline transition-colors';
          }
          btn.textContent = String(d);
          if (!isPast) {
            btn.addEventListener('click', function () {
              selectedDay = d;
              renderCalendar();
              updateBookingSummaryLabels();
            });
          }
          calGrid.appendChild(btn);
        }
      }

      function renderTimeSlots() {
        timeSlotsGrid.innerHTML = '';
        timeSlots.forEach(function (slot) {
          const btn = document.createElement('button');
          btn.type = 'button';
          const active = slot === selectedSlot;
          btn.className = active
            ? 'min-h-[44px] py-2.5 px-2 text-center bg-ink text-paper font-bold border border-ink transition-colors'
            : 'min-h-[44px] py-2.5 px-2 text-center bg-paper hover:bg-paperMuted text-ink border border-hairline transition-colors';
          btn.textContent = slot;
          btn.addEventListener('click', function () {
            selectedSlot = slot;
            renderTimeSlots();
            updateBookingSummaryLabels();
          });
          timeSlotsGrid.appendChild(btn);
        });
      }

      document.getElementById('cal-prev-month').addEventListener('click', function () {
        if (currentMonthIdx > 0) {
          currentMonthIdx--;
          selectedDay = 18;
          renderCalendar();
          updateBookingSummaryLabels();
        }
      });

      document.getElementById('cal-next-month').addEventListener('click', function () {
        if (currentMonthIdx < monthsData.length - 1) {
          currentMonthIdx++;
          selectedDay = 2;
          renderCalendar();
          updateBookingSummaryLabels();
        }
      });

      bookingTimezone.addEventListener('change', updateBookingSummaryLabels);

      renderCalendar();
      renderTimeSlots();
      updateBookingSummaryLabels();

      // Booking Form Submission & .ICS Generation
      let lastBookingData = null;
      document.getElementById('booking-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('booking-name').value.trim();
        const email = document.getElementById('booking-email').value.trim();
        const focus = document.getElementById('booking-focus').value;
        const footage = document.getElementById('booking-footage').value.trim();
        const tz = bookingTimezone.value;
        if (!name || !email) return;

        const refId = 'BZ-' + Math.floor(1000 + Math.random() * 9000);
        lastBookingData = {
          refId: refId,
          name: name,
          email: email,
          focus: focus,
          footage: footage,
          dateText: selectedDateDisplay.textContent,
          slot: selectedSlot,
          tz: tz
        };

        document.getElementById('booking-ref-id').textContent = 'REF #' + refId;
        document.getElementById('booking-summary-text').textContent =
          'Confirmed for ' + name + ' (' + email + ') on ' + selectedDateDisplay.textContent +
          ' at ' + selectedSlot + ' [' + tz + '] — Scope: ' + focus +
          (footage ? ' · Footage/Channel: ' + footage : '') + '.';

        const waMsg = encodeURIComponent(
          'Hi beazt team! I booked consultation #' + refId + ' on ' +
          selectedDateDisplay.textContent + ' at ' + selectedSlot + ' (' + tz + ') for ' + focus + '.'
        );
        document.getElementById('booking-wa-followup').href = 'https://wa.me/917983652995?text=' + waMsg;
        document.getElementById('booking-confirmation').classList.remove('hidden');
      });

      document.getElementById('btn-download-ics').addEventListener('click', function () {
        if (!lastBookingData) return;
        const icsLines = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'PRODID:-//beazt studio//Consultation Scheduler//EN',
          'BEGIN:VEVENT',
          'UID:' + lastBookingData.refId + '@beaztmotions.org',
          'SUMMARY:beazt Consultation — ' + lastBookingData.focus,
          'DESCRIPTION:Client: ' + lastBookingData.name + ' (' + lastBookingData.email + ')\\nSlot: ' + lastBookingData.dateText + ' at ' + lastBookingData.slot + ' ' + lastBookingData.tz,
          'ORGANIZER;CN=beazt:mailto:contact@beaztmotions.org',
          'END:VEVENT',
          'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsLines], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'beazt-consultation-' + lastBookingData.refId + '.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });

      // -----------------------------------------------------------------------
      // 7. CONTACT & CAREER FORMS
      // -----------------------------------------------------------------------
      document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const msg = document.getElementById('contact-message').value.trim();
        if (!name || !email || !msg) return;
        const fb = document.getElementById('contact-feedback');
        fb.textContent = '✓ Inquiry logged for ' + name + ' (' + email + '). Our production desk at contact@beaztmotions.org responds within 12 business hours.';
        fb.classList.remove('hidden');
        document.getElementById('contact-form').reset();
      });

      document.getElementById('career-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('career-name').value.trim();
        const role = document.getElementById('career-role').value;
        const url = document.getElementById('career-portfolio').value.trim();
        if (!name || !url) return;
        const fb = document.getElementById('career-feedback');
        fb.textContent = '✓ Roster application received from ' + name + ' (' + role + '). Umang & our lead editors review showreels weekly.';
        fb.classList.remove('hidden');
        document.getElementById('career-form').reset();
      });

      // -----------------------------------------------------------------------
      // 8. NAVIGATION VIEW SWITCHER, STUDIO DROPDOWN & MOBILE DRAWER
      // -----------------------------------------------------------------------
      const viewMap = {
        overview: ['sec-hero', 'sec-portfolio', 'sec-services', 'sec-about', 'sec-faq', 'sec-booking', 'sec-contact'],
        work: ['sec-portfolio'],
        services: ['sec-services'],
        about: ['sec-about', 'sec-faq'],
        contact: ['sec-contact'],
        booking: ['sec-booking']
      };

      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileDrawer = document.getElementById('mobile-nav-drawer');
      const aboutDropdownBtn = document.getElementById('about-dropdown-btn');
      const aboutDropdownMenu = document.getElementById('about-dropdown-menu');
      const aboutDropdownWrapper = document.getElementById('about-dropdown-wrapper');

      function closeAboutDropdown() {
        if (aboutDropdownMenu && aboutDropdownBtn) {
          aboutDropdownMenu.classList.add('hidden');
          aboutDropdownBtn.setAttribute('aria-expanded', 'false');
        }
      }

      if (aboutDropdownBtn && aboutDropdownMenu) {
        aboutDropdownBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          const isOpen = !aboutDropdownMenu.classList.contains('hidden');
          if (isOpen) {
            closeAboutDropdown();
          } else {
            aboutDropdownMenu.classList.remove('hidden');
            aboutDropdownBtn.setAttribute('aria-expanded', 'true');
          }
        });
      }

      document.addEventListener('click', function (e) {
        if (aboutDropdownWrapper && !aboutDropdownWrapper.contains(e.target)) {
          closeAboutDropdown();
        }
      });

      function switchView(viewName, skipScrollTop) {
        const visibleIds = viewMap[viewName] || viewMap.overview;
        document.querySelectorAll('.view-section').forEach(function (sec) {
          if (visibleIds.indexOf(sec.id) !== -1) {
            sec.classList.remove('hidden');
          } else {
            sec.classList.add('hidden');
          }
        });

        document.querySelectorAll('header nav .nav-view-trigger').forEach(function (btn) {
          if (btn.getAttribute('data-nav-view') === viewName) {
            btn.className = 'nav-view-trigger px-3.5 py-2 text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors';
          } else {
            btn.className = 'nav-view-trigger px-3.5 py-2 text-sm font-medium text-inkMuted hover:text-ink transition-colors';
          }
        });

        closeAboutDropdown();
        mobileDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (!skipScrollTop) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      document.querySelectorAll('.nav-view-trigger').forEach(function (btn) {
        btn.addEventListener('click', function () {
          switchView(btn.getAttribute('data-nav-view'));
        });
      });

      document.querySelectorAll('.about-dropdown-item').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const targetId = btn.getAttribute('data-dropdown-target');
          switchView('overview', true);
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      });

      document.querySelectorAll('.scroll-trigger').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const targetId = btn.getAttribute('data-scroll-target');
          switchView('overview', true);
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      });

      mobileMenuBtn.addEventListener('click', function () {
        const isOpen = !mobileDrawer.classList.contains('hidden');
        if (isOpen) {
          mobileDrawer.classList.add('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        } else {
          mobileDrawer.classList.remove('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'true');
        }
      });

      // Close modals & dropdowns on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeProjectModal();
          closeAboutDropdown();
        }
      });
    })();


// Automatic HTTPS fallback if opened without local assets/ folder
window.addEventListener('DOMContentLoaded', function () {
  var fallbackImgs = [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574717025179-0b6d03d4d86f?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    'https://images.pexels.com/photos/31718971/pexels-photo-31718971/free-photo-of-professional-video-editing-interface-on-computer-screen.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/18880006/pexels-photo-18880006/free-photo-of-cameras-and-lenses-on-table.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/29505140/pexels-photo-29505140/free-photo-of-video-editing-software-interface-close-up.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/11025649/pexels-photo-11025649.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];
  document.querySelectorAll('img').forEach(function (img, idx) {
    img.addEventListener('error', function () {
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = '1';
        img.src = fallbackImgs[idx % fallbackImgs.length];
      }
    });
  });
});
4. package.json
{
  "name": "beazt-studio-website",
  "version": "2.0.0",
  "private": true,
  "description": "beazt — independent video editing & motion studio website",
  "scripts": {
    "start": "npx serve . -l 3000",
    "dev": "python3 -m http.server 3000"
  }
}