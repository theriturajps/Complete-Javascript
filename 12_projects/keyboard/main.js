const box = document.querySelector('.msg')

window.addEventListener('keydown', (e) => {
  box.innerHTML = `<div class="keyInfo">
        <div class="key">${e.key}</div>
        <div class="keyCode">${e.keyCode}</div>
        <div class="code">${e.code}</div>
      </div>`
})

