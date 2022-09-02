
// seleção da dom

const todoInput = document.querySelector('.todo-input')

const todoButton = document.querySelector('.todo-button')

const taskContainer = document.querySelector('.section-stak')



// validation input


const validationInput = () => {


    return todoInput.value.trim().length > 0

}

const handleaddTask = () => {

    const inputvalidation = validationInput();

    if (!inputvalidation) {
        return todoInput.classList.add('error')
    }


    const  taskitemUL = document.createElement('ul')
    taskitemUL.classList.add('todo-list') 

    const listTask = document.createElement('li')
    listTask.classList.add('todo-item')
    listTask.innerHTML = todoInput.value

    listTask.addEventListener('click', handleClik(listTask))

    const deletIcon = document.createElement('i')
    deletIcon.classList.add('far')
    deletIcon.classList.add('fa-trash-alt')

    listTask.addEventListener('click', handleDeleteClik(taskitemUL, listTask  ))



    taskitemUL.appendChild(listTask)
    listTask.appendChild(deletIcon)

    taskContainer.appendChild(taskitemUL)


    todoInput.value = "";



}
const handleinputchange = () => {
    const inputvalidation = validationInput();

    if(inputvalidation) {
        return todoInput.classList.remove('error')
    }
}

const handleClik = (listTask) => {

    const tasks = taskContainer.childNodes()
    
    for (task of tasks) {
        if(task.firstChild.isSameNode(listTask)) {
            task.firstChild.classList.toggle('complete')
        }

    }

};
const handleDeleteClik = () => {

    const tasks = taskitemUL.isSameNode(taskitemUL, listTask);

    for (task of tasks) {
        if(task.firstChild.isSameNode(listTask)) {
            taskitemUL.remove();
        }
    }

}



addEventListener('click', () =>  handleaddTask());
addEventListener('change', () => handleinputchange());