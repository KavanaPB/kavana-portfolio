document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       1️⃣ SCROLL PROGRESS BAR
    =============================== */

    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "4px";
    progressBar.style.background = "#2563eb";
    progressBar.style.width = "0%";
    progressBar.style.zIndex = "3000";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", function () {
        const scroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });


    /* ===============================
       2️⃣ BACK TO TOP BUTTON
    =============================== */

    const topBtn = document.createElement("button");
    topBtn.innerText = "↑";
    topBtn.style.position = "fixed";
    topBtn.style.bottom = "30px";
    topBtn.style.right = "30px";
    topBtn.style.padding = "12px 16px";
    topBtn.style.borderRadius = "50%";
    topBtn.style.border = "none";
    topBtn.style.background = "#2563eb";
    topBtn.style.color = "white";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "2000";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    /* ===============================
       3️⃣ THEME TOGGLE (Dark/Light)
    =============================== */

    const toggle = document.createElement("button");
    toggle.innerText = "🌙";
    toggle.style.position = "fixed";
    toggle.style.bottom = "30px";
    toggle.style.left = "30px";
    toggle.style.padding = "10px";
    toggle.style.borderRadius = "50%";
    toggle.style.border = "none";
    toggle.style.cursor = "pointer";
    toggle.style.zIndex = "2000";
    document.body.appendChild(toggle);

    toggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });


    /* ===============================
       4️⃣ SAFE EMAILJS (Optional)
    =============================== */

    if (typeof emailjs !== "undefined") {
        try {
            emailjs.init("YOUR_PUBLIC_KEY");
        } catch (e) {
            console.log("EmailJS not configured.");
        }

        const form = document.getElementById("contact-form");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
                    .then(function () {
                        alert("Message Sent Successfully!");
                    })
                    .catch(function () {
                        alert("Failed to send message.");
                    });
            });
        }
    }

});

