var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
//     'Fazer café',
//     'Estudar Javascript',
//     'Fazer café'
// ]; // cria um array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = ''; //zera a tela
    var id = 0;

    for (let todo of todos) { //varre o array 'todos'
        var todoElement = document.createElement('li'); // cria um elemento li 
        todoElement.setAttribute('class', 'item'); // cria um atributo 'href' no 'a'
        var todoText = document.createTextNode(todo); // põe o volor contido em 'todo' na variavel todoText

        var linkElement = document.createElement('button'); //cria um elemento a
        linkElement.setAttribute('class', 'delete'); // cria um atributo 'href' no 'a'
        // var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ id +')')
        
        var linkText = document.createTextNode('X'); // Cria uma variavel com a string 'Excluir'
        linkElement.appendChild(linkText); // põe o texto do linkText no link 'a'
       
        todoElement.appendChild(todoText); //põe o texto do todoText na li
        todoElement.appendChild(linkElement); //põe o link do linkElement na li
        
        listElement.appendChild(todoElement); // põe a li no listElement (na ul)
        id++;
    }
}

renderTodos(); // chama função que renderiza

function addTodo() {
    var todoText = inputElement.value; // pega o valor do input
    
    if(todoText.length <= 0) return alert('Dígite algo!!!');

    todos.push(todoText); // adiciona ao array
    inputElement.value = ''; // limpa o input
    inputElement.focus(); //põe foco no campo input
    renderTodos(); //chama a função de renderizar
    saveToStorage();
}

buttonElement.onclick = addTodo; // cria evento para o click do button

function deleteTodo(id) {
    todos.splice(id, 1); // a partir da posição (pos), remova 1 item. Ex: Se 'pos' = 1, vai remover o item de referência 1 somente. Se fosse (pos, 2) removeria o item passado em 'pos' + o próximo item.
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));

    // localStorage é uma variável global que representa o local na memória. 
    // setItem() para setar um valor no storage.
    // local storage não grava arrays, apenas chave valor no formato string, parecido com objeto.
    // JSON têm uma etrutura parecida com objetos porém é string!
    // stringfy transforma o vetor em string, e organiza no formato json.
}