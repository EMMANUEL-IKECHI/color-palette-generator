const container = document.querySelector('.container');
const refreshBtn = document.querySelector('button');

let maxColors = 32;

//Generate hex codes and display colors
let generateHex = ()=>{
    container.innerHTML=``;
    for (let i = 0; i < maxColors; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,'0')}`;

        let li = document.createElement('li');
        li.classList.add('color');
        li.innerHTML = `<div class="rect-box" style="background-color:${randomHex};"></div>
                        <span class="hex-value">${randomHex}</span>`;
        li.addEventListener('click', ()=> copyColor(li, randomHex));
        container.appendChild(li);
    }
}
generateHex();

const copyColor = (element, hex) => {
    const hexValue = element.querySelector('span');
    navigator.clipboard.writeText(hex).then(()=> {
        hexValue.innerText='COPIED!';
        setTimeout(() =>  hexValue.innerHTML= hex, 1000);
    }).catch(()=>{alert('Failed to copy!')});
}

refreshBtn.addEventListener('click', generateHex);