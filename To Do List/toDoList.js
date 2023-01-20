
const btnEl = document.getElementById("plus");
const modal_container = document.querySelector('.modal-container');
const addEl = document.getElementById('add');
const modal = document.getElementById(".modal");
const list = document.querySelector('.list');
const clearList = document.getElementById("clear");
let notes = [];
let count = 0;

btnEl.addEventListener('click', () => { 
    modal_container.classList.add('show');
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
});

clearList.addEventListener('click', () =>{
    let newList = document.querySelector(".list");
    newList.innerHTML = "";
})
addEl.addEventListener('click', () => {
    createNewNote();
    modal_container.classList.remove('show');
});

function createNewNote(){
if (document.getElementById("title").value){
    if(document.getElementById("title").value && !document.getElementById("description").value){
    let toDoTitle = document.getElementById("title").value;
    let newList = document.querySelector(".list");
    let para = `<form><fieldset><legend>${toDoTitle}</legend>
        <div><input type="checkbox" onclick="erase()" id="done"name="done" value="done"><label for="done">Done</label></div></form></fieldset>`; 
    newList.innerHTML += para;
    ++count;
    }
    else if (document.getElementById("title").value && document.getElementById("description").value){
        let toDoTitle = document.getElementById("title").value;
        let toDoText = document.getElementById("description").value;
        let newList = document.querySelector(".list");
        let para = `<form><fieldset><legend>${toDoTitle}: ${toDoText}</legend>
        <div><input type="checkbox"  onclick="erase()"id="done" name="done" value="done"><label for="done">Done</label></div></form></fieldset>`;  
        newList.innerHTML += para;

    }
    }
}
function erase(){
    event.target.parentElement.parentElement.remove();
}
