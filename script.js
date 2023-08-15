var todolist = [];

const ajouter = document.getElementsByClassName("ajouter")[0];
const tache = document.getElementById("tache");

function displayTask (task , index) {


    todolist.push(task);
    localStorage.liste = JSON.stringify(todolist);


    let ligne = document.createElement("li");
        ligne.innerHTML = task;
        tache.appendChild(ligne);


    let suprimer = document.createElement("button");
        suprimer.innerHTML = "suprimer";
        tache.appendChild(suprimer);

        suprimer.addEventListener("click", function() {
            todolist.splice(index,1);
            window.location.reload()
            localStorage.liste = JSON.stringify(todolist);
    });


    let modifier = document.createElement("button");
        modifier.innerHTML = "modifier";
        tache.appendChild(modifier);

        modifier.addEventListener("click",function() {
            let modif = prompt("Modifier")
            todolist[index] = modif;
            window.location.reload()
            localStorage.liste = JSON.stringify(todolist);
        });
};


ajouter.addEventListener('click', function () {

    var text = document.getElementById("text").value;
    displayTask(text,todolist.length);

});



var recup = JSON.parse(localStorage.liste);

for (let i = 0; i < recup.length; i++) {
    
    let text = recup[i];
    displayTask(recup[i],i);

    console.log(recup[i]);
};

console.log(recup);
