for(let i=0; i<=9; i++) {
    let chosenHole = document.getElementById(`hole${i}`);
    chosenHole.onclick = function() {
        let numberOfDeadMoles = +document.getElementById('dead').textContent;
        let numberOfWrongHoles = +document.getElementById('lost').textContent
        if (chosenHole.classList.contains('hole_has-mole')) {
            document.getElementById('dead').textContent = (numberOfDeadMoles + 1).toString()
        } else {
            document.getElementById('lost').textContent = (numberOfWrongHoles + 1).toString()
        }
        ;
        if (numberOfDeadMoles === 10) {
            alert('Вы победили!');
            numberOfDeadMoles = 0;
            numberOfWrongHoles = 0;

        }
        if (numberOfWrongHoles === 5) {
            alert('Вы проиграли!');
            numberOfWrongHoles = 0;
            numberOfDeadMoles = 0;
        }
    }
}
