'use strict';

$(document).ready(function () {
    /* 
        Elements
    */
    var $tasksList = $('#tasks-list');
    var generadorDeIds = generarIds();


    /* Events */
    $('#add-task').on('click', function () {

        var id = generadorDeIds.next().value;

        var text = prompt('Introduce un nombre a la tarea');

        var $newTask = $('<li id="' + id + '">' + text + ' </li>');

        var $editBtn = $('<button>Editar</button>');
        var $deleteBtn = $('<button>Eliminar</button>');

        $editBtn.on('click', editTask(id));
        $deleteBtn.on('click', deleteTask(id));

        $newTask.append($editBtn);
        $newTask.append($deleteBtn);

        $tasksList.append($newTask);

    })
});


function deleteTask(id) {
    var deletedId = id;
    return function () {
        $('#'+deletedId).remove();
    }
}


function editTask(id) {
    var editedId = id;

    return function () {
        var $task = $('#'+editedId);
        var nuevaTarea = prompt('Introduce el nombre de la nueva tarea');

        var $children = $task.children();
        $task.text(nuevaTarea);
        $task.append($children);
    }
}

function* generarIds() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
