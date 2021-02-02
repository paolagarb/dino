const dino = document.getElementsByClassName('dino');

function handleyKeyUp(event) {
    if (event.keyCode === 32) { //32 = espaço
        jump();
    }
}

function jump() {
    let position = 0;

    if (position >= 150) 
    {
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
            if (position <= 0) 
            {
                clearInterval(downInterval());
            } 
            else 
            {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        }, 20);

    } 
    else 
    {
        let upInterval = setInterval(() => {
        position += 20;

        dino.style.bottom = position + 'px';

    }, 20);
    }
}

document.addEventListener('keyup', handleyKeyUp);