// ---------- PAGE SHOW / HIDE ----------
function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show selected section
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = "block";
    }
}

// Default page on load
window.onload = function () {
    showPage("home");
    startGMTClock();
};

// Fix for typo showpage
function showpage(pageId) {
    showPage(pageId);
}

// ---------- GMT LIVE TIME ----------
function startGMTClock() {
    setInterval(() => {
        const now = new Date();
        const gmtTime = now.toUTCString();
        const gmtElement = document.getElementById("gmt");
        if (gmtElement) {
            gmtElement.innerText = gmtTime;
        }
    }, 1000);
}

// ---------- RESET PASSWORD ----------
function resetPassword() {
    const newPass = document.getElementById("newPass").value;
    const confirmPass = document.getElementById("confirmPass").value;
    const msg = document.getElementById("msg");

    if (newPass === "" || confirmPass === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    if (newPass.length < 6) {
        msg.style.color = "red";
        msg.innerText = "Password must be at least 6 characters!";
        return;
    }

    if (newPass !== confirmPass) {
        msg.style.color = "red";
        msg.innerText = "Passwords do not match!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Password reset successfully!";
}

// ---------- CONTACT FORM (OPTIONAL) ----------
document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector("#contact button");
    if (contactBtn) {
        contactBtn.addEventListener("click", () => {
            alert("Thank you! Your message has been sent.");
        });
    }
});