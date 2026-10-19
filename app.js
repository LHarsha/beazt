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
