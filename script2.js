document.addEventListener("DOMContentLoaded", function() {
    // Define the brand text for each section
    const brandText = {
        page: "HELLO! WELCOME,",
        page1: "ABOUT ME 🙉",
        page2: "SKILLS 🎯",
        page3: "EXPERIENCE 🔬",
        page4: "PROJECTS ⚙️"
    };

    // Get the navbar-brand element
    const navbarBrand = document.querySelector(".navbar-brand");

    // Function to update the navbar-brand text
    function updateNavbarBrand(sectionId) {
        if (brandText[sectionId]) {
            navbarBrand.textContent = brandText[sectionId];
        }
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateNavbarBrand(entry.target.id);
            }
        });
    }, {
        threshold: 0.7  // Trigger the callback when 50% of the section is in view
    });

    // Observe each section
    const sections = document.querySelectorAll("#page, #page1, #page2, #page3, #page4");
    sections.forEach(section => observer.observe(section));
});

const totalSolved = 497;
const totalProblems = 3166;
const attemptingCount = 1;

const easySolved = 235;
const easyTotal = 797;
const mediumSolved = 188;
const mediumTotal = 1663;
const hardSolved = 74;
const hardTotal = 706;

const easyPercentage = Math.round((easySolved / easyTotal) * 100);
const mediumPercentage = Math.round((mediumSolved / mediumTotal) * 100);
const hardPercentage = Math.round((hardSolved / hardTotal) * 100);

function showProgress(solved, total, level) {
    const percentage = Math.round((solved / total) * 100);
    const circle = document.getElementById(`${level}-circle`);
    const solvedCount = document.getElementById('solved-count');
    const attemptingCountText = document.getElementById('attempting-count');

    document.getElementById('easy-circle').style.strokeDasharray = `0, 100`;
    document.getElementById('medium-circle').style.strokeDasharray = `0, 100`;
    document.getElementById('hard-circle').style.strokeDasharray = `0, 100`;

    circle.style.strokeDasharray = `${percentage}, 100`;
    solvedCount.textContent = `${solved}`;
    attemptingCountText.textContent = `${percentage}% Solved`;
}

function resetProgress() {
    const easyCircle = document.getElementById('easy-circle');
    const mediumCircle = document.getElementById('medium-circle');
    const hardCircle = document.getElementById('hard-circle');
    const solvedCount = document.getElementById('solved-count');
    const attemptingCountText = document.getElementById('attempting-count');

    easyCircle.style.strokeDasharray = `${easyPercentage}, 100`;
    mediumCircle.style.strokeDasharray = `${mediumPercentage }, 100`;
    hardCircle.style.strokeDasharray = `${hardPercentage}, 100`;
    
    solvedCount.textContent = `${totalSolved}`;
}

document.addEventListener("DOMContentLoaded", resetProgress);


