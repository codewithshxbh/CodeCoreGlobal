function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();
  removeBtn.style.marginLeft = "10px";

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
