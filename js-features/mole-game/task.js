for(let i=0; i<=9; i++) {
    let chosenHole = document.getElementById(`hole` + i).onclick;
    if (chosenHole.classList.contains('hole_has-mole')) {
        document.getElementById('dead').textContent += 1
    } else {
        document.getElementById('lost').textContent += 1
    };

    if (+document.getElementById('dead').textContent === 10) {
        alert('Вы победили!')
    }
    if (+document.getElementById('lost').textContent === 5) {
        alert('Вы проиграли!')
    }
}