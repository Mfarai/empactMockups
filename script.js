
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

        const observerOption = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const counterObservers = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.metric-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    counterObservers.unobserve(entry.target);
                }
            });
        }, observerOption);

        // Observe stats section
        document.addEventListener('DOMContentLoaded', () => {
            const statsSection = document.querySelector('.stats-section');
            counterObserver.observe(statsSection);
        });
        document.addEventListener('DOMContentLoaded', () => {
            const impactSection = document.querySelector('.impact-container');
            counterObservers.observe(impactSection);
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

        const $next = document.querySelector('.carousel-btn next');
        const $prev = document.querySelector('.carousel-btn prev');

        $next.addEventListener(
            'click',
            () => {
                const items =document.querySelectorAll('.item');
                document.querySelector('.slide').appendChild(items[0]);
            },
        );
        $prev.addEventListener(
            'click',
            () => {
                const items =document.querySelectorAll('.item');
                document.querySelector('.slide').prepend(items[items.length -1]);
            },
        );

        // Side NavIgation Menu JS Code
        let body = document.querySelector("body");
        let navBar = document.querySelector(".nav-menu");
        let menuBtn = document.querySelector(".menu-btn");
        let cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = function(){
        navBar.classList.add("active");
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
        body.style.overflow = "hidden";
        scrollBtn.style.pointerEvents = "none";
        }
        cancelBtn.onclick = function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow = "auto";
        scrollBtn.style.pointerEvents = "auto";
        }

        // Side Navigation Bar Close While We Click On Navigation Links
        let navLinks = document.querySelectorAll(".menu li a");
        for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click" , function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        });
    }

