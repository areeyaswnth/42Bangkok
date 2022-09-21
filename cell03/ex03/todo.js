let todoList = document.getElementById("ft_list");
let x = document.cookie;

if (x.length !== 0) {
    x = x.split(";");
    x.forEach((TodoL) => {
        TodoL = TodoL.split("=");
        CreatNewList(TodoL[0], TodoL[1]);
    });
}

function newButton() {
    let doList = prompt("Enter to do list : ");
    if (doList.trim() != '') {
        let id = new Date().getTime();
        document.cookie = id + "=" + doList + ";";
        CreatNewList(id, doList);
    }

}

function CreatNewList(id, TodoL) {
    let todo = document.createElement("button");
    todo.type = "button";
    todo.innerHTML = TodoL;
    todo.onclick = () => {
        if (confirm("Click OK to delete") == true) {
            todo.remove();
            document.cookie = id + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }
    };

    todoList.prepend(todo);
}