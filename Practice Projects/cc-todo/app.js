// vars
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
//store tasks , title, due date and descriptions
const taskData = [];
// track state while editing and discarding tasks
let currentTask = {};
//add input values to taskData
const addOrUpdateTask = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    // editing
    taskData[dataArrIndex] = taskObj;
  }
  updateTaskContainer();
  reset();
};
//add tasks to DOM
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
<div class="task" id="${id}">
<p><strong>Title: </strong>${title}</p>
<p><strong>Date: </strong>${date}</p>
<p><strong>Description: </strong>${description}</p>
<button type="button" class="btn" onclick="editTask(this)" >Edit</button>
<button type="button" class="btn" onclick="deleteTask(this)" >Delete</button>
</div>
        `;
  });
};
// delete task function
const deleteTask = (buttonEl) => {
  // getting index of task to del
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  // remove from dom, and from task data array
  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
};
// edit a task
const editTask = (buttonEl) => {
  // get index of task to edit
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  const currentTask = taskData[dataArrIndex];
  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;
  addOrUpdateTaskBtn.innerText = "Update Task";
  taskForm.classList.toggle("hidden");
};
// clear the add task form after adding
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};
// toggle the form model div open and closed
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  // display cancel and discard only if some text is present
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;

  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});
// const myTaskArr = [
//   { task: "Walk the Dog", date: "22-04-2022" },
//   { task: "Read some books", date: "02-11-2023" },
//   { task: "Watch football", date: "10-08-2021" },
// ];
// localStorage.setItem("data", JSON.stringify(myTaskArr));
// const getTaskArr = localStorage.getItem("data");
// const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
// console.log(getTaskArr);
// console.log(getTaskArrObj);
// localStorage.removeItem("data");
// localStorage.clear();
