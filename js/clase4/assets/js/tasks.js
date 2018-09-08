'use strict';

$(document).ready(function () {
    /* 
        Elements
    */
    var $tasksList = $('#tasks-list');


    /* Events */
    $('#add-task').on('click', function () {

        var id = generarIds().next().value;

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
    return function () {

    }
}


function editTask(id) {
    return function () {

    }
}

function* generarIds() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
