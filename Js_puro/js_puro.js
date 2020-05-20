class MyTitle extends HTMLElement { // uma classe que extende de HTMLElement
    connectedCallback() { // fução é chamada depois que o elemento é adicionada na página
        const shadow = this.attachShadow( { mode: 'open'}); //diz que os elemtentos podem ser acessedos pelo root

        const title = document.createElement('h1'); //cria tag h1
        const style = document.createElement('style'); //cria tag para estilo 

        title.textContent = this.getAttribute('title'); //pega o atributo title passado
        title.classList.add('my-title'); //adiciona uma classe ao titulo 
        style.textContent = '.my-title { color: red;'; //aplica uma cor

        shadow.appendChild(style); //adiciona o style ao shadow
        shadow.appendChild(title); //adiciona o title ao shadow
    }
}

customElements.define('my-title', MyTitle);