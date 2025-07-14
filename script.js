const homeScoreDisplay = document.getElementById("home-score-display");
const guestScoreDisplay = document.getElementById("guest-score-display");

// Initialize scores for each team independently
let homeScore = 0;
let guestScore = 0;

// Function to update the score display for a specific team
function updateDisplay(team, score) {
    if (team === 'home') {
        homeScoreDisplay.textContent = score;
    } else if (team === 'guest') {
        guestScoreDisplay.textContent = score;
    }
}

// Single function to handle score changes for both teams
function changeScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        updateDisplay('home', homeScore);
    } else if (team === 'guest') {
        guestScore += points;
        updateDisplay('guest', guestScore);
    }
    console.log(`Team ${team} score: ${team === 'home' ? homeScore : guestScore}`);
}

// Initial display setup when the DOM content is fully loaded
// This ensures that homeScoreDisplay and guestScoreDisplay are not null
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay('home', homeScore);
    updateDisplay('guest', guestScore);
});