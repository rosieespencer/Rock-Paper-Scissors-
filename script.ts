const words: string[] = ["Rock", "Paper", "Scissors", "Shoot!"];
const displayElement: HTMLElement | null = document.getElementById("game-display");
const winnerDisplay: HTMLElement | null = document.getElementById("winner-display");
const rock: number = 0;
const paper: number = 1;
const scissors: number = 2;
let index: number = 0;
let play: boolean = false;

function computerChoice(): number {
    return Math.floor(Math.random() * 3);
}

function userChoice(): number {
    return -1;
}

function showNextWord(): any {
    if (index < words.length) {
        if (displayElement == null) {
            console.log("Error: displayElement is null");
            return;
        }
        displayElement.textContent = words[index];
        index++;
        setTimeout(showNextWord, 1000);
    }
}

function gameplay(): any {
    return;
}