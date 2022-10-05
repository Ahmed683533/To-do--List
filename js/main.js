let inputTasks = document.querySelectorAll('#inputTasks');
let addBtnTasks = document.querySelector('#addTasks');
let tasks = document.querySelector('#tasks');
let noTasks = document.querySelector('#noTasks');
let validMessage = document.querySelector('#validMessage');
let changeMode = document.querySelector('#changeMode');
let cardChange = document.querySelectorAll('#cardChange');
let labelChange = document.querySelectorAll('label');
let titleChange =document.querySelector('#titleChange')
let body = document.querySelector('body');

changeMode.onclick = function () {
    if (changeMode.classList.contains('lightBtn')) {
        changeMode.innerText = 'Dark Mode';
        changeMode.classList = 'darkBtn';
        cardChange[0].classList.add('cardLight');
        cardChange[1].classList.add('cardLight');
        labelChange[0].classList.add('cardLabelLight');
        labelChange[1].classList.add('cardLabelLight');
        labelChange[2].classList.add('cardLabelLight');
        titleChange.classList.add('titleChangeh');
        body.classList.add('lightBody');
    } else {
        changeMode.innerText = 'Light Mode';
        changeMode.classList = 'lightBtn';
        cardChange[0].classList.remove('cardLight');
        cardChange[1].classList.remove('cardLight');
        labelChange[0].classList.remove('cardLabelLight');
        labelChange[1].classList.remove('cardLabelLight');
        labelChange[2].classList.remove('cardLabelLight');
        titleChange.classList.remove('titleChangeh');
        body.classList.remove('lightBody');
    }
}


let noTasksAdd = () => {
    if (tasks.childElementCount == 0) {
        noTasks.classList.remove('none');
        tasks.classList.add('none');
    }
}

let addTask = (name, image, date) => {
    if (name.trim() == "" || image.trim() == "" || date.trim() == "") {
        validMessage.classList.remove('none')
        if (name.trim() == "") {
            validMessage.innerHTML = `You Must Enter Name <br>`;
        } else if (image.trim() == "") {
            validMessage.innerHTML = `You Must Enter Image <br>`;
        } else if (date.trim() == "") {
            validMessage.innerHTML = `You Must Enter Date <br>`;
        }
    } else {
        noTasks.classList.add('none');
        tasks.classList.remove('none')
        tasks.innerHTML += `<div class= " allTasks alert alert-info">
        ${name}
        <img width='60' height='60' onclick="window.open(this.src, '_blank');" src="${image}" >
        <button  class=" margin delete float-right btn btn-info">Delete</button>
        <p class="float-right">${date}</p>
        </div>`

        inputTasks[0].value = "";
        inputTasks[1].value = "";
        inputTasks[2].value = "";
    }


}

let renderTask = () => {
    let allTasks = {
        name: inputTasks[0].value,
        image: inputTasks[1].value,
        date: inputTasks[2].value
    }
    addTask(allTasks.name, allTasks.image, allTasks.date);
}

addBtnTasks.addEventListener('click', renderTask);


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        noTasksAdd();
    }
})

