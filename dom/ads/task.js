let changingBlocks = Array.from(document.getElementsByClassName('rotator__case'));
let changeBlock = function() {
    let activeBlock = changingBlocks.findIndex(item => item.classList.contains('rotator__case_active'));
    if(activeBlock === changingBlocks.length-1) {
        changingBlocks[0].classList.add('rotator__case_active');
    }
    else {
        changingBlocks[activeBlock+1].classList.add('rotator__case_active');
    };
    changingBlocks[activeBlock].classList.remove('rotator__case_active');
}

setInterval('changeBlock', 1000)