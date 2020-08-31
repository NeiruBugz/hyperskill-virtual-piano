const keys = document.querySelector('.white-keys').children;
const blackKeys = document.querySelector('.black-keys').children;

const keysText = [];
const blackKeysText = [];

for (let value of keys) {
    keysText.push(value.innerText);
}

for (let value of blackKeys) {
    blackKeysText.push(value.innerText);
}

document.addEventListener('keypress', (evt) => {
    if (keysText.includes(evt.key.toUpperCase())) {
        const audio = document.createElement('AUDIO');
        audio.src = `white_keys/${evt.key.toUpperCase()}.mp3`;
        audio.play();
    } else if (blackKeysText.includes(evt.key.toUpperCase())) {
        const audio = document.createElement('AUDIO');
        audio.src = `black_keys/${evt.key.toUpperCase()}.mp3`;
        audio.play();
    } else {
        console.warn('No such key');
    }
});