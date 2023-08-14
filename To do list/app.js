const taskList = document.querySelector('.list');
const listInput = document.querySelector('#input-header');
const addListBtn = document.querySelector('#add');

addListBtn.addEventListener('click', addTodo);


function addTodo(event) {


    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = listInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completedBtn');
    completedBtn.innerHTML = '<img src="./images/check.png"/>';
    todoDiv.appendChild(completedBtn);    
    //Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = '<img src="./images/delete.png"/>';
    todoDiv.appendChild(deleteBtn);
    //Add div to the ul
    taskList.appendChild(todoDiv);
    //Clear input
    listInput.value='';


//Delete button functionality
deleteBtn.addEventListener('click', ()=>{
   
   newTodo.remove();
    deleteBtn.remove();
    completedBtn.remove();
})


    //Check button functionality
    completedBtn.addEventListener('click',()=>{
        newTodo.classList.add('newTodo-check');
        newTodo.classList.remove('todo-item');


        deleteBtn.addEventListener('click',()=>{
            newTodo.remove();
            deleteBtn.remove();
            completedBtn.remove();
        })
    })
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "deleteBtn"){
        const todo = item.parentElement;
        todo.remove();
    }
    
}

