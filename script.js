// ==========================================
// PORTFOLIO - Enhanced Interactive Script
// ==========================================

// --- Preloader ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    }
});

// --- Mobile Navigation Toggle ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });

        // Close mobile nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            });
        });
    }
};

// --- Header Scroll Effect (transparent → solid) ---
const headerScrollEffect = () => {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// --- Active Nav Link Highlighting on Scroll ---
const activeNavHighlight = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const onScroll = () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
};

// --- Scroll Reveal Animation ---
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.project-card, .about-text, .skill-item, .timeline-item, .doc-card, .bento-card');

    const revealOnScroll = () => {
        if (!reveals || reveals.length === 0) return;
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
};

// --- Animated Number Counters ---
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    let animated = false;

    const startCounting = () => {
        if (animated) return;

        const statsRow = document.querySelector('.stats-row');
        if (!statsRow) return;

        const rect = statsRow.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animated = true;

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 1500;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };

                updateCounter();
            });
        }
    };

    window.addEventListener('scroll', startCounting);
    startCounting();
};

// --- Typing Effect for Overline ---
const typingEffect = () => {
    const overline = document.querySelector('.overline');
    if (!overline) return;

    const originalText = overline.textContent.trim();
    overline.textContent = '';
    overline.style.minHeight = '1.5rem';

    let i = 0;
    const speed = 50;

    const type = () => {
        if (i < originalText.length) {
            overline.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };

    // Start after preloader
    setTimeout(type, 1000);
};

// --- Back to Top Button ---
const backToTop = () => {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// --- Certificate Data & Rendering ---
const certificateData = [
    {
        category: "NXTWAVE MASTERCLASS CERTIFICATES",
        certs: [
            { name: "Masterclass Certificate 1", date: "Nov 2024", link: "CERTIFICATES/nxt wave/IMG-20241121-WA0029.jpg" },
            { name: "Masterclass Certificate 2", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0015.jpg" },
            { name: "Masterclass Certificate 3", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0016.jpg" },
            { name: "Masterclass Certificate 4", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0017.jpg" },
            { name: "Technical Milestone - ID 36UXL4A66N", date: "2024", link: "CERTIFICATES/nxt wave/36UXL4A66N.png" },
            { name: "Technical Milestone - ID OZQKV8YV9W", date: "2024", link: "CERTIFICATES/nxt wave/OZQKV8YV9W.png" },
            { name: "Skill Validation - ID 94P3JLOMEE", date: "2024", link: "CERTIFICATES/nxt wave/94P3JLOMEE.png" }
        ]
    },
    {
        category: "NXTWAVE CERTIFICATES",
        certs: [
            { name: "Professional Specialization PDF", date: "2024", link: "CERTIFICATES/nxt wave/ARFVGJOZGG.pdf" },
            { name: "Course Completion - ID BDG4KGTWWC", date: "2024", link: "CERTIFICATES/nxt wave/BDG4KGTWWC[1].png" },
            { name: "Skill Validation - ID D8PM2DSM5J", date: "2024", link: "CERTIFICATES/nxt wave/D8PM2DSM5J.png" },
            { name: "Advanced Training - ID FHWHHR4W5G", date: "2024", link: "CERTIFICATES/nxt wave/FHWHHR4W5G.png" },
            { name: "Industry Readiness - ID G799IV76DD", date: "2024", link: "CERTIFICATES/nxt wave/G799IV76DD.png" },
            { name: "Final Certification - ID ZHTUSYJIUY", date: "2024", link: "CERTIFICATES/nxt wave/ZHTUSYJIUY.png" }
        ]
    },
    {
        category: "NXTWAVE WORKSHOP CERTIFICATES",
        certs: [
            { name: "Workshop Certificate 1", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0018.jpg" },
            { name: "Workshop Certificate 2", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0019.jpg" },
            { name: "Workshop Certificate 3", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0020.jpg" },
            { name: "Workshop Certificate 4", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0021.jpg" },
            { name: "Workshop Certificate 5", date: "Dec 2024", link: "CERTIFICATES/nxt wave/IMG-20241208-WA0022.jpg" },
            { name: "Coding Challenge - ID V5MV176J73", date: "2024", link: "CERTIFICATES/nxt wave/V5MV176J73.png" },
            { name: "Expert Mastery - ID QIYG0GEOUY", date: "2024", link: "CERTIFICATES/nxt wave/QIYG0GEOUY.png" },
            { name: "Project Completion - ID QITSFHMUFQ", date: "2024", link: "CERTIFICATES/nxt wave/QITSFHMUFQ (1).png" },
            { name: "Technical Certificate - ID 3JMT0P02LZ", date: "2024", link: "CERTIFICATES/nxt wave/3JMT0P02LZ.png" }
        ]
    },
    {
        category: "ACADEMIC SPECIALIZATIONS",
        certs: [
            { name: "Cisco Networking Certificate", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/CISCO.pdf" },
            { name: "IBM Professional Certificate", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/IBM.pdf" },
            { name: "Oracle Database Certificate", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/ORACLE.pdf" },
            { name: "Introduction to Python", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/Introduction to Python.pdf" },
            { name: "Simplilearn: Data Science", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/simpleearn.pdf" },
            { name: "Udemy Specialization", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/UC-6709a559-e485-4cc4-9f16-57470839c961.jpg" },
            { name: "Operating Systems (Advanced)", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/CERTIFICATE OF COURSE COMPLETION OF OPERATING SYSTEMS BASICS COURSE.pdf" },
            { name: "Operating Systems (Basics)", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/Operating Systems Basics.pdf" },
            { name: "Software Engineering", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/Software Engineering.pdf" },
            { name: "AI: HCI Methodologies", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/Artificial Intelligence Human-computer Interaction Methodologies.pdf" },
            { name: "Python for Data Science", date: "2023", link: "CERTIFICATES/MU CERTIFICATES/Python for Data Science.pdf" },
            { name: "Machine Learning with Python", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/Explore Machine Learning using Python.pdf" },
            { name: "Techkriti'25 - IIT Kanpur", date: "2025", link: "CERTIFICATES/MU CERTIFICATES/TECHKRITI’25.pdf" },
            { name: "University Honors Certificate", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/JAKKA SIVA SUBRAMANYAM GUPTHA_92410151004.pdf" },
            { name: "Official Merit Record", date: "2024", link: "CERTIFICATES/MU CERTIFICATES/JAKKA SIVA SUBRAMANYAM GUPTHA_92410151004.jpg" }
        ]
    },
    {
        category: "UNIVERSITY",
        certs: [
            { name: "AISTS 2025: Certificate of Appreciation", date: "Aug 2025", link: "CERTIFICATES/MU CERTIFICATES/WhatsApp Image 2025-09-08 at 18.54.54_9610fe59.jpg" },
            { name: "MU X Postman: API Challenge", date: "Dec 2024", link: "CERTIFICATES/MU CERTIFICATES/WhatsApp Image 2024-12-17 at 15.45.48_38d72c5e.jpg" }
        ]
    },
    {
        category: "AI & CLOUD SPECIALIZATIONS",
        certs: [
            { name: "Microsoft Learn: AI Studio", date: "2024", link: "CERTIFICATES/New folder (2)/AI STUDIO.pdf" },
            { name: "Achievements: Microsoft Learn", date: "2024", link: "CERTIFICATES/New folder (2)/Achievements - jakkasivasubramanyamguptha-7624 _ Microsoft Learn.pdf" },
            { name: "RAG (Retrieval Augmented Generation)", date: "2024", link: "CERTIFICATES/New folder (2)/RAG.pdf" },
            { name: "AI Development Lifecycle", date: "2024", link: "CERTIFICATES/New folder (2)/DEVELOP.pdf" },
            { name: "AI Exploration & Strategy", date: "2024", link: "CERTIFICATES/New folder (2)/EXPLORE.pdf" },
            { name: "AI Integration Systems", date: "2024", link: "CERTIFICATES/New folder (2)/INTEGRATE.pdf" }
        ]
    }
];

const updateIndexCounts = () => {
    // Certificate counts
    let totalCerts = 0;
    certificateData.forEach(cat => totalCerts += cat.certs.length);

    const docCount = document.getElementById('doc-cert-count');
    const bentoCertCount = document.getElementById('about-cert-count');
    const heroCertCount = document.getElementById('hero-cert-count');

    if (docCount) docCount.innerText = totalCerts;
    if (bentoCertCount) bentoCertCount.innerText = totalCerts;
    if (heroCertCount) {
        heroCertCount.setAttribute('data-target', totalCerts);
        heroCertCount.innerText = totalCerts;
    }

    // Project counts
    const projectCards = document.querySelectorAll('.project-card');
    const projectCount = projectCards.length;

    const heroProjectCount = document.getElementById('hero-project-count');
    const bentoProjectCount = document.getElementById('about-project-count');

    if (heroProjectCount) {
        heroProjectCount.setAttribute('data-target', projectCount);
        // If animation hasn't run yet, it will picked up by the scroll listener.
        // If it should have already run, we set it manually or re-trigger if needed.
        heroProjectCount.innerText = projectCount; 
    }
    
    if (bentoProjectCount) {
        bentoProjectCount.innerText = projectCount + "+";
    }
};

const renderCertificates = () => {
    const fullCertList = document.getElementById('full-cert-list');
    if (!fullCertList) return;

    fullCertList.innerHTML = '';

    certificateData.forEach(cat => {
        if (cat.certs.length > 0) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'cert-category';

            const header = document.createElement('h4');
            header.innerText = cat.category;
            categoryDiv.appendChild(header);

            const ul = document.createElement('ul');
            ul.className = 'cert-list';

            cat.certs.forEach(cert => {
                const li = document.createElement('li');
                li.className = 'cert-item';

                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'cert-content-inner';
                contentWrapper.style.display = 'flex';
                contentWrapper.style.flexDirection = 'column';
                contentWrapper.style.gap = '4px';

                const nameText = document.createElement('span');
                nameText.className = 'cert-name-text';
                nameText.style.display = 'block';
                nameText.style.fontWeight = '600';
                nameText.innerText = cert.name;

                const dateText = document.createElement('span');
                dateText.className = 'cert-date-text';
                dateText.style.display = 'block';
                dateText.style.fontSize = '0.75rem';
                dateText.style.opacity = '0.6';
                dateText.innerText = cert.date || '';

                contentWrapper.appendChild(nameText);
                contentWrapper.appendChild(dateText);

                if (cert.link && cert.link !== "#") {
                    const a = document.createElement('a');
                    a.href = cert.link;
                    a.target = "_blank";
                    a.style.textDecoration = 'none';
                    a.style.color = 'inherit';
                    a.style.display = 'flex';
                    a.style.alignItems = 'center';
                    a.style.justifyContent = 'space-between';
                    a.style.width = '100%';

                    a.appendChild(contentWrapper);

                    const icon = document.createElement('i');
                    icon.className = 'fas fa-external-link-alt';
                    icon.style.fontSize = '0.7em';
                    icon.style.opacity = '0.6';
                    a.appendChild(icon);

                    li.appendChild(a);
                } else {
                    li.appendChild(contentWrapper);
                    li.style.cursor = 'default';
                    li.classList.add('no-link');
                }

                ul.appendChild(li);
            });

            categoryDiv.appendChild(ul);
            fullCertList.appendChild(categoryDiv);
        }
    });
};

// --- Dynamic Scroll Reveal Styles ---
const injectStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .project-card, .about-text, .skill-item, .timeline-item, .doc-card, .bento-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        .project-card.active, .about-text.active, .skill-item.active, 
        .timeline-item.active, .doc-card.active, .bento-card.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        .toggle .line2 {
            opacity: 0;
        }
        .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        @keyframes navLinkFade {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
};

// --- Smooth Scroll for Nav Links (with offset) ---
const smoothScrollNav = () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const top = targetEl.offsetTop - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
};

// --- Theme Toggle ---
const themeToggle = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = toggleBtn?.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set initial theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if(toggleIcon) toggleIcon.className = 'fas fa-sun';
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                toggleIcon.className = 'fas fa-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                toggleIcon.className = 'fas fa-sun';
            }
        });
    }
};


// --- Hero Video Play Overlay ---
const initHeroVideo = () => {
    const overlay = document.getElementById('video-play-overlay');
    const video = document.getElementById('hero-intro-video');
    if (!overlay || !video) return;

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        video.play();
    });

    video.addEventListener('pause', () => {
        if (video.currentTime > 0) overlay.classList.add('hidden');
    });
    video.addEventListener('ended', () => {
        overlay.classList.remove('hidden');
    });
};

// --- Photo Slider ---
const initPhotoSlider = () => {
    const track = document.getElementById('photo-slider-track');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');
    if (!track) return;

    const slides = track.querySelectorAll('.slide');
    let current = 0;
    const total = slides.length;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const updateDots = () => {
        dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    };

    const goTo = (index) => {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        updateDots();
        
        // Pause video if navigating away from video slide
        const video = document.getElementById('hero-intro-video');
        if (video && current !== 0 && !video.paused) {
            video.pause();
            const overlay = document.getElementById('video-play-overlay');
            if(overlay) overlay.classList.remove('hidden');
        }
    };

    prevBtn?.addEventListener('click', () => goTo(current - 1));
    nextBtn?.addEventListener('click', () => goTo(current + 1));

    // Auto-play every 4 seconds, but check if video is playing
    const nextSlideIfAllowed = () => {
        const video = document.getElementById('hero-intro-video');
        // Do not auto-advance if video is currently active/playing
        if (current === 0 && video && !video.paused) return; 
        goTo(current + 1);
    };

    let autoPlay = setInterval(nextSlideIfAllowed, 4000);
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.parentElement.addEventListener('mouseleave', () => {
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlideIfAllowed, 4000);
    });
};

// --- Contact Modal Setup ---
const contactModal = () => {
    const modal = document.getElementById('contact-modal');
    const trigger = document.getElementById('contact-trigger');
    const closeBtn = document.getElementById('close-contact-modal');
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status');

    if (!modal || !trigger) return;

    const openModal = () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    trigger.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
};

// --- Copy Email to Clipboard ---
const initEmailCopy = () => {
    const trigger = document.getElementById('email-copy-trigger');
    const toast = document.getElementById('copy-toast');
    const email = "jakkasivasubramanyamguptha@gmail.com";

    if (!trigger || !toast) return;

    trigger.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
            // Show toast with the email
            toast.innerText = `${email} copied!`;
            toast.classList.add('show');
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
};


// ==========================================
// Initialize Everything
// ==========================================
const app = () => {
    injectStyles();
    navSlide();
    headerScrollEffect();
    activeNavHighlight();
    scrollReveal();
    animateCounters();
    typingEffect();
    backToTop();
    smoothScrollNav();
    updateIndexCounts();
    renderCertificates();
    themeToggle();
    initHeroVideo();
    initPhotoSlider();
    contactModal();
    initEmailCopy();
};

app();
