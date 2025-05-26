const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (input.value == "") {
        alert("write sumthing bruh");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.style.transition = "opacity 0.3s";
        e.target.parentElement.style.opacity = "0";
        setTimeout(() => {
            e.target.parentElement.remove();
            saveData();
        }, 300);
    }
}, false);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
