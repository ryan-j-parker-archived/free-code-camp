// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
const holdingPen = document.querySelector('.holding-pen');
const playerImgTag = document.getElementById('player-img');
const form = document.querySelector('form');

let enemies = [
    { name: 'One bad dude', hp: 20 },
    { name: 'A badder dude', hp: 30 },
    { name: 'The baddest dude', hp: 50 },
];


let playerHP = 100;

form.addEventListener('submit', (e) => {
    e.preventDefault;

    const data = new FormData(form);

    const newEnemyName = data.get('new-enemy');

    const newEnemy = { name: newEnemyName, hp: Math.floor(Math.random() * 30) + 10 };

    enemies.push(newEnemy);

    form.reset();
    displayEnemies();
});

function renderEnemy(enemy) {

    const enemyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    nameEl.textContent = `${enemies.name}`;
    hpEl.textContent = `${enemies.hp} `;

    enemyEl.classList.add('enemy');

    enemyEl.append(nameEl, hpEl);

    return enemyEl;
}

function Enemy() {
    this.name = `${enemies.name}`;
    this.hp = `${enemies.hp}`;
}

const enemy = new Enemy();

function displayEnemies() {

    holdingPen.textContent = '';
    for (let enemy of enemies) {
        const enemyEl = renderEnemy(enemy);
        enemyEl.textContent = `${enemies.name} ${enemies.hp}`;
        enemyEl.classList.add('enemies');

        enemyEl.addEventListener('click', () => {

            if (enemies.hp > 0 && playerHP > 0) {
                playerImgTag.src = './assets/wizard.png';


                displayEnemies();
            }
        });
        holdingPen.append(enemyEl);


    }
}
renderEnemy();
displayEnemies();