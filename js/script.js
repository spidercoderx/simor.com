// ================================
// SIMOR Hardware Website
// script.js
// ================================

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    console.log("SIMOR Website Loaded");

    // ================================
    // Sticky Header
    // ================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

    // ================================
    // Mobile Menu
    // ================================

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

    // ================================
    // Smooth Scroll
    // ================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ================================
    // Scroll To Top Button
    // ================================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.style.display = "block";

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

    // ================================
    // Product Card Hover
    // ================================

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // ================================
    // Counter Animation
    // ================================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.innerText);

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    // ================================
    // Reveal Animation
    // ================================

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});

// ================================
// Dealer Button
// ================================

function becomeDealer() {

    alert("Dealer Registration Coming Soon!");

}

// ================================
// Catalogue Download
// ================================

function downloadCatalogue() {

    window.location.href = "catalogue/simor-catalogue.pdf";

}

// ================================
// WhatsApp Button
// ================================

function openWhatsApp() {

    window.open(
        "https://wa.me/919999999999",
        "_blank"
    );

}

// ================================
// Call Button
// ================================

function callNow() {

    window.location.href = "tel:+919999999999";

}