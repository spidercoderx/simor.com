// ==========================================
// SIMOR Hardware Website
// script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("SIMOR Website Loaded");

    // ==========================
    // PRELOADER
    // ==========================
    const preloader = document.getElementById("preloader");

    const hidePreloader = () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add("hide");
            }
        }, 100);
    };

    // If the window is already loaded, hide preloader immediately. Otherwise, wait for load.
    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        window.addEventListener("load", hidePreloader);
    }

    // ==========================
    // STICKY HEADER
    // ==========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // ==========================
    // SMOOTH SCROLL (With Safety Check)
    // ==========================
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            // Bypass smooth scroll if the link is just a placeholder "#"
            if (href === "#") return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ==========================
    // SCROLL TO TOP BUTTON
    // ==========================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==========================
    // SIMPLE REVEAL ANIMATION
    // ==========================
    const revealItems = document.querySelectorAll(
        ".trusted, .categories, .products, .about, .stats, .portfolio, .dealer, .contact"
    );

    function revealSections() {
        revealItems.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    // Initialize initial state for reveal items
    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";
    });

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger once on load in case elements are already visible
});

// ==========================================
// GLOBAL HELPER FUNCTIONS
// ==========================================

// Dealer Registration
function becomeDealer() {
    alert("Dealer Registration Coming Soon!");
}

// Catalogue Download
function downloadCatalogue() {
    window.location.href = "catalogue/SIMOR-Catalogue.pdf";
}

// WhatsApp
function openWhatsApp() {
    window.open(
        "https://wa.me/919876543210",
        "_blank"
    );
}

// Call
function callNow() {
    window.location.href = "tel:+919876543210";
}