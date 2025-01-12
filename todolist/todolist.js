let todoList=[{
    name:"make dinner",
    duedate:"2024-12-24"}];

renderTodoList();

function renderTodoList(){
    let todoListHTML='';

    todoList.forEach(function(todoObject,i){
        
        const {name, duedate} = todoObject;
        const html = `
        
        <div>${name}</div>
        <div>${duedate}</div>
        <button class="js-delete-todo-button" data-index="${i}">Delete</button>`;
        todoListHTML += html;

    });


    
    

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton) => {
        deleteButton.addEventListener('click',() => {
            const index = deleteButton.getAttribute('data-index');
            todoList.splice(index,1);
            renderTodoList();
        });
    });
}
document.querySelector('.js-add-todo-button').addEventListener('click',() => {
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date');
    const duedate = dateInputElement.value;

    if(name && duedate){
    todoList.push({
        name,
        duedate
    });
    
    inputElement.value = '';
    renderTodoList();
} else{
    alert("please enter both name and due date!");
}
}
