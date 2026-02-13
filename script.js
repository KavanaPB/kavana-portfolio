document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       1️⃣ LOADER (SAFE REMOVE)
    =============================== */
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 800);
    }

    /* ===============================
       2️⃣ AOS INIT (SAFE)
    =============================== */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1200,
            once: true
        });
    }

    /* ===============================
       3️⃣ TYPING ANIMATION
    =============================== */
    const text = "Full Stack Developer | MCA Graduate";
    const typingElement = document.getElementById("typing");

    if (typingElement) {
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 70);
            }
        }

        type();
    }

    /* ===============================
       4️⃣ SKILL BAR ANIMATION
    =============================== */
    function animateSkills() {
        const bars = document.querySelectorAll(".bar");

        bars.forEach(bar => {
            const position = bar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                bar.style.width = bar.getAttribute("data-width");
            }
        });
    }

    window.addEventListener("scroll", animateSkills);
    animateSkills(); // Run once in case already visible

    /* ===============================
       5️⃣ COUNTER ANIMATION
    =============================== */
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        function updateCounter() {
            const increment = target / 100;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    });

    /* ===============================
       6️⃣ PARTICLES (SAFE CHECK)
    =============================== */
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60 },
                size: { value: 3 },
                move: { speed: 2 },
                line_linked: { enable: true }
            }
        });
    }

});

