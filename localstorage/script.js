// Eléments HTML de la page que nous allons utiliser par la suite dans notre code
const btnSave = document.querySelector("#btnSave");
const newTask = document.querySelector("#newTask");
const ul = document.querySelector(".list-group");

// Fonction permettant d'afficher une tâche HTML
function displayTask(task, index) {

    // Création d'un élément "li"
    let li = document.createElement("li");

    // Ajout d'une classe de Bootstrap
    li.classList.add("list-group-item");

    // Ajout du texte de la nouvelle tâche
    li.innerText = task;

    // On ajoute le li à son parent
    ul.appendChild(li);

    // Ajout d'un bouton de suppression
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-end");
    deleteButton.innerText = "Supprimer";
    li.appendChild(deleteButton);

    // Ajout de l'eventListener sur notre bouton de suppression
    deleteButton.addEventListener("click", function() {
        toDoList.splice(index, 1);
        localStorage.persistList = JSON.stringify(toDoList);
        window.location.reload();
    });

    let editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning", "btn-sm", "float-end");
    editButton.innerText = "Modifier";
    li.appendChild(editButton);

    editButton.addEventListener("click", function() {
        let newText = prompt("Entrez le nouveau texte de votre tâche");
        toDoList[index] = newText;
        localStorage.persistList = JSON.stringify(toDoList);
        window.location.reload();
    });
}

// Tableau (array) de tâches
var toDoList = [];

// Si une liste existe déjà dans le localStorage...
if(typeof(localStorage.persistList) != "undefined") {
    // ... alors on met la liste existante dans toDoList
    toDoList = JSON.parse(localStorage.persistList);
}

// Parcourons le tableau de tâches pour toutes les afficher
for (let index = 0; index < toDoList.length; index++) {
    displayTask(toDoList[index], index);
}

btnSave.addEventListener("click", function() {
    let newTaskText = newTask.value;

    // Appel de la fonction displayTask pour afficher le HTML
    displayTask(newTaskText, toDoList.length);

    // Ajout de la nouvelle tâche au tableau JavaScript
    toDoList.push(newTaskText);

    // Enregistrer de manière persistante la toDoList dans le localStorage
    localStorage.persistList = JSON.stringify(toDoList); 
});