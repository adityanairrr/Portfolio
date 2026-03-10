var typed = new Typed(".typing", {
    strings: ["Data Scientist", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["Data Scientist", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const systemLogs = [
    "[SYSTEM] Initializing Swarnim Startup University modules...",
    "[INFO] Degree: Computer Science & Engineering confirmed.",
    "[DATA] Loading toolsets: Python, SQL, PyTorch, Power BI.",
    "[STATUS] Shortlisted for Data Engineer Analyst @ GSK.",
    "[LOG] Project: Movie Recommender System (Cosine Similarity).",
    "[LOG] Project: Sales Forecasting (Sk-Learn/Pandas).",
    "[SUCCESS] All career nodes operational.",
    "[NOTICE] System ready for new connections."
];

let logIndex = 0;
function runSystemLog() {
    const logContainer = document.getElementById("system-log");
    if (logIndex < systemLogs.length) {
        const p = document.createElement("p");
        p.className = "log-entry";
        p.textContent = systemLogs[logIndex];
        logContainer.appendChild(p);
        
        // Auto-scroll if log gets too long
        logContainer.scrollTop = logContainer.scrollHeight;
        
        logIndex++;
        setTimeout(runSystemLog, 1000); // Lines appear every second
    }
}

// Start the log when the page is ready
window.addEventListener('DOMContentLoaded', runSystemLog);
function openTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Deactivate all buttons
    const buttons = document.querySelectorAll('.t-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab and activate the button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// last add 
$(document).ready(function(){
    // 1. Sticky navbar logic
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // 2. Mobile Menu Toggle logic
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // 3. Close menu when clicking a link
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });
});
// This script doesn't need jQuery to run
window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    const icon = document.querySelector('.menu-btn i');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle("active");
            icon.classList.toggle("active");
            console.log("Mobile menu toggled");
        });
    }

    // Close menu when clicking any link
    const menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove("active");
            icon.classList.remove("active");
        });
    });
});