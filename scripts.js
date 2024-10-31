document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const button = item.querySelector(".toggle-button");
        
        question.addEventListener("click", function () {
            const isOpen = answer.style.display === "block";
            
            
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".toggle-button").forEach(btn => btn.textContent = "+");
            
            
            answer.style.display = isOpen ? "none" : "block";
            button.textContent = isOpen ? "+" : "×";
        });
    });
    

    const movieRow = document.querySelector('.movie-row');
    const rightButton = document.querySelector(".slider-button.right");
    const leftButton = document.querySelector(".slider-button.left");
    let scrollAmount = 0;

    function updateButtons() {
       
        leftButton.style.display = scrollAmount > 0 ? "block" : "none";

        
        const maxScroll = movieRow.scrollWidth - movieRow.clientWidth;
        rightButton.style.display = scrollAmount < maxScroll ? "block" : "none";
    }

    function scrollRight() {
        const cardWidth = movieRow.querySelector(".movie-card").offsetWidth + 20; 
        scrollAmount += cardWidth * 5; 
        const maxScroll = movieRow.scrollWidth - movieRow.clientWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        movieRow.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    }

    function scrollLeft() {
        const cardWidth = movieRow.querySelector(".movie-card").offsetWidth + 20;
        scrollAmount -= cardWidth * 5;
        if (scrollAmount < 0) scrollAmount = 0;
        movieRow.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    }

    if (rightButton && leftButton) {
        rightButton.addEventListener("click", scrollRight);
        leftButton.addEventListener("click", scrollLeft);
    }

    
    updateButtons();
});