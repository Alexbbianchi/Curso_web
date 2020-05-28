var body = document.querySelector('body');

var button = document.createElement('button');
button.setAttribute('id', 'novotodo');
var texto = document.createTextNode('Adicionar');
button.appendChild(texto);
body.appendChild(button);
//#region Classe
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.addTodo();
// }
//#endregion

//#region Herança
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor() {
        super(); //chama o constructor da classe pai

        this.usuario = 'Alex';
    }

    mostrarUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostrarUsuario();

//#region Método estático

class Matematica {
    static soma(a, b) { // Não preciso instanciar a classe
      return a + b
    }
  }
  
console.log(Matematica.soma(1, 2));
//#endregion