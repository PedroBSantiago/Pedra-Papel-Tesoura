const choices = ['pedra', 'papel', 'tesoura']

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.CDATA_SECTION_NODE.choice;
        const computadorChoice = getComputedChoice();
        const winner = determineWinner(playerChoice, computadorChoice);
        updateScores(winner);
        showResult(playerChoice, computadorChoice, winner);
    })
})
function getComputedChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}