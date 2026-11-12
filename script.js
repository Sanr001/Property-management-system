
// ======================================
// PROPERTY MANAGEMENT SYSTEM
// LOGIN, LOGOUT AND NAVIGATION
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // GET HTML ELEMENTS
    const loginPage = document.getElementById("loginPage");
    const app = document.getElementById("app");
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");

    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    const topbarTitle = document.getElementById("topbarTitle");


    // ======================================
    // LOGIN FUNCTION
    // ======================================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        // Hide login page
        loginPage.classList.add("hidden");

        // Show application
        app.classList.remove("hidden");

        // Open dashboard after login
        showPage("dashboard");

    });


    // ======================================
    // PAGE NAVIGATION FUNCTION
    // ======================================

    function showPage(pageId) {

        // Hide all pages
        pages.forEach(page => {
            page.classList.remove("active");
        });

        // Remove active navigation highlight
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Find selected page
        const selectedPage = document.getElementById(pageId);

        if (!selectedPage) {
            console.error("Page not found:", pageId);
            return;
        }

        // Show selected page
        selectedPage.classList.add("active");

        // Highlight selected sidebar tab
        const selectedLink = document.querySelector(
            `.nav-link[data-page="${pageId}"]`
        );

        if (selectedLink) {
            selectedLink.classList.add("active");
        }

        // Update topbar title
        if (topbarTitle) {
            topbarTitle.textContent = selectedLink
                ? selectedLink.textContent.trim()
                : pageId;
        }

    }


    // ======================================
    // SIDEBAR CLICK EVENTS
    // ======================================

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            const pageId = this.getAttribute("data-page");

            showPage(pageId);

        });

    });


    // ======================================
    // BUTTONS THAT NAVIGATE TO OTHER PAGES
    // ======================================

    document.querySelectorAll("[data-go]").forEach(button => {

        button.addEventListener("click", function () {

            const pageId = this.getAttribute("data-go");

            showPage(pageId);

        });

    });


    // ======================================
    // LOGOUT FUNCTION
    // ======================================

    logoutBtn.addEventListener("click", function () {

        app.classList.add("hidden");
        loginPage.classList.remove("hidden");

        loginForm.reset();

        showPage("dashboard");

    });


});
