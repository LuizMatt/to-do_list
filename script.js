const button = document.querySelector('.buttom-add-task');
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-task')

let taskList = []

function addTask() {
    taskList.push({
        task: input.value,
        done: false

    });
    input.value = '';
    showTask();

}

function deleteTask(index) {
    taskList.splice(index, 1)
    showTask();
}

function taskDone(index) {
    taskList[index].done = !taskList[index].done
    showTask();

}

function recarregarTarefar() {
    const storage = localStorage.getItem("list")
    if (storage) {
        taskList = JSON.parse(storage)
    }
    showTask()
}

function showTask() {
    let newTask = '';

    taskList.forEach((item, index) => {
        newTask = newTask +
            `
            <li class="task ${item.done && "done"}">
            <img src="img/checked.png" alt="tarefa-concluida" onclick = "taskDone(${index})"/>
            <p>${item.task}</p>
            <img src="img/trash.png" alt="descartar-tarefa" onclick = "deleteTask(${index})"/>
            </li>
        `
    })
    completeList.innerHTML = newTask

    localStorage.setItem('list', JSON.stringify(taskList))
}
recarregarTarefar();
button.addEventListener('click', addTask)