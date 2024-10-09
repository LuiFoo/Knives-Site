const textElement = document.getElementById('code');
const imagemBotao = document.querySelector('.imagem-bangue');
const classBody = document.querySelector('.body');
const sfxBang = new Audio('./src/audio/sfx-bang.mp3');
const text = '< Knives Dev />';
let index = 0;
let deleting = false;

function typeCode() {
    if (!deleting && index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
    } else if (deleting && index >= 0) {
        textElement.textContent = text.slice(0, index);
        index--;
    }

    if (index === text.length) {
        deleting = true;
    } else if (index === 0 && deleting) {
        deleting = false;
    }

    // Aumentando os tempos para digitar e apagar
    setTimeout(typeCode, deleting ? 500 : 400); // Aqui, 100ms para apagar e 200ms para digitar
}

typeCode();

function trocarFundo() {
    if (classBody.classList[1] == 'fundo-black') {
        classBody.classList.remove('fundo-black');
        classBody.classList.add('.fundo-white');
        imagemBotao.src = './src/img/Bang_preta.png';
    } else {
        classBody.classList.remove('.fundo-white');
        classBody.classList.add('fundo-black');   
        imagemBotao.src = './src/img/Bang_branca.png';
    }
}


imagemBotao.addEventListener('click', () => {
    

    if (sfxBang.paused) {
        sfxBang.play();
        trocarFundo()
    }
    
})