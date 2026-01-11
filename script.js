const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        icon.classList.replace("bx-moon", "bx-sun");
    } else {
        icon.classList.replace("bx-sun", "bx-moon");
    }
});

const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")

})

