for(let i=1; i<=9; i++) {
    let chosenHole = document.getElementById(`hole${i}`);
    chosenHole.onclick = function() {
        let numberOfDeadMoles = +document.getElementById('dead').textContent;
        let numberOfWrongHoles = +document.getElementById('lost').textContent
        if (chosenHole.classList.contains('hole_has-mole')) {
            document.getElementById('dead').textContent = (numberOfDeadMoles + 1).toString()
        } else {
            document.getElementById('lost').textContent = (numberOfWrongHoles + 1).toString()
        };
        console.log(chosenHole)
        if (numberOfDeadMoles === 10) {
            alert('Вы победили!');
            document.getElementById('dead').textContent = (0).toString();
            document.getElementById('lost').textContent = (0).toString();
        }
        if (numberOfWrongHoles === 5) {
            alert('Вы проиграли!');
            document.getElementById('dead').textContent = (0).toString();
            document.getElementById('lost').textContent = (0).toString();
        }
    }
}
