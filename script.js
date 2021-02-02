const dino = document.getElementsByClassName('dino');
let isJumping = false;

function handleyKeyUp(event) {
    if (event.keyCode === 32) { //32 = espaço
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    let position = 0;
    isJumping = true;

    if (position >= 150) 
    {
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
            if (position <= 0) 
            {
                clearInterval(downInterval());
                isJumping = false;
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