document.addEventListener("DOMContentLoaded", () => {
    const bottle = document.getElementById("bottle");
    const clickText = document.getElementById("click-text");
    const messageContainer = document.getElementById("message-container");
    const anniversaryMessage = document.getElementById("anniversary-message");
    const countMessage = document.getElementById("count-message");
    const continuePrompt = document.getElementById("continue-prompt");
    const yearsCount = document.getElementById("years-count");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const celebration = document.getElementById("celebration");

    let years = 0;
    let counting = false;

    const createConfetti = () => {
        const numConfetti = 100; // Number of confetti pieces
        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
            celebration.appendChild(confetti);
        }
    };

    const handleClick = () => {
        bottle.style.display = "none";
        clickText.style.display = "none";
        document.body.style.backgroundColor = "red"; // Solid romantic red
        messageContainer.style.display = "block";
        celebration.style.display = "block"; // Show celebration effects
        createConfetti();
        
        // Start counting years
        if (!counting) {
            counting = true;
            const interval = setInterval(() => {
                if (years < 6) {
                    years++;
                    yearsCount.textContent = years;
                } else {
                    clearInterval(interval);
                    continuePrompt.style.display = "block";
                }
            }, 500);
        }
    };

    bottle.addEventListener("click", handleClick);
    clickText.addEventListener("click", handleClick);

    yesBtn.addEventListener("click", () => {
        const phoneNumber = '919830717821'; // Your WhatsApp number
        const message = 'I am sorry Nayan, whatever false allegation I have given to you was wrong cause I am a clown, don\'t mind Nayan, Muaaaaaaaaaaaaaaaaaaaa'; // Prewritten message
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open in a new window or tab
        window.open(whatsappURL, '_blank');
    });

    noBtn.addEventListener("click", () => {
        const message = 'I am a bitch'; // Prewritten message for 'No' button
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
});
