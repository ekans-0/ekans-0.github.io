// Function to open project popup
function openPopup(projectId) {
    document.getElementById(projectId + '-popup').style.display = 'flex';
}

// Function to close project popup
function closePopup(projectId) {
    document.getElementById(projectId + '-popup').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    const phrases = ["Harvard Debate Champion", "CyberPatriot Winner 2026", "Brawl Stars World Finalist", "Harvard Valedictorian"];
    const element = document.getElementById('dynamic-subheading');
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    element.appendChild(cursor);

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Typing speed in milliseconds
    let deletingSpeed = 50; // Deleting speed in milliseconds
    let pauseBetweenPhrases = 1000; // Pause between phrases in milliseconds

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            if (currentCharIndex > 0) {
                currentCharIndex--;
                element.textContent = currentPhrase.substring(0, currentCharIndex);
                setTimeout(type, deletingSpeed);
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, pauseBetweenPhrases);
            }
        } else {
            if (currentCharIndex < currentPhrase.length) {
                currentCharIndex++;
                element.textContent = currentPhrase.substring(0, currentCharIndex);
                setTimeout(type, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(type, pauseBetweenPhrases);
            }
        }
    }

    type();
});
