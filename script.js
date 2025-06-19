
        // Animated Counter Function
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 30);
        }

        // Intersection Observer for Counter Animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe stats section
        document.addEventListener('DOMContentLoaded', () => {
            const statsSection = document.querySelector('.stats-section');
            counterObserver.observe(statsSection);
        });

        // Language Switching Function
        let currentLanguage = 'en';
        const translations = {
            en: {
                title: "Empowering Communities Through Education",
                subtitle: "Creating transformative ripple effects across communities, engaging youth as leaders and influencing positive change through the power of education in Ivory Coast.",
                cta: "See Our Impact",
                mission: "Our Mission",
                impact: "Our Impact"
            },
            fr: {
                title: "Autonomiser les Communautés par l'Éducation",
                subtitle: "Créer des effets d'entraînement transformateurs dans les communautés, engager les jeunes comme leaders et influencer le changement positif grâce au pouvoir de l'éducation en Côte d'Ivoire.",
                cta: "Voir Notre Impact",
                mission: "Notre Mission",
                impact: "Notre Impact"
            }
        };

        function switchLanguage(lang) {
            currentLanguage = lang;
            
            // Update active language button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Update content (simplified example)
            const translation = translations[lang];
            document.querySelector('.hero-text h1').textContent = translation.title;
            document.querySelector('.hero-text p').textContent = translation.subtitle;
            document.querySelector('.cta-button').textContent = translation.cta;
            
            // Add smooth transition effect
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 200);
        }

        // Interactive Map Function
        function showMapDetails() {
            alert('Interactive map would show detailed information about our projects in Anyama, Ivory Coast, including photos, testimonials, and project statistics.');
        }

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
