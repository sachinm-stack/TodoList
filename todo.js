
    let submit = document.getElementById('submit');
    let addTask = document.getElementById('todo');
    let todoList = document.getElementById('todoList');
    let doneList = document.getElementById('doneList');

    let list = [];

    submit.addEventListener('click', function () {

        if (addTask.value.trim() !== '') {

            let id = list.length;
            list.push(addTask.value);

            todoList.innerHTML += 
            '<li id="'+id+'">' +
            addTask.value +
            ' <button onclick="complete('+id+')">Complete</button></li>';

            addTask.value = '';
        }
    });

    function complete(id) {
        doneList.innerHTML += '<li>' + list[id] + '</li>';
        document.getElementById(id).style.display = "none";
    }
