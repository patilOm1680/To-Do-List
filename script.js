let todo = document.getElementById("todo");
let inProcess = document.getElementById("inProcess");
let done = document.getElementById("completed");


let lists = document.getElementsByClassName("list");


// setInterval(() => {
//     for (list of lists) {
//         list.addEventListener("dragstart", function (event) {
//             let currentItem = event.target;

//             inProcess.addEventListener("dragover", function (event) {
//                 event.preventDefault();
//             });
//             inProcess.addEventListener("drop", function (event) {
//                 inProcess.appendChild(currentItem);
//                 currentItem = null;
//             });


//             todo.addEventListener("dragover", function (event) {
//                 event.preventDefault();
//             });
//             todo.addEventListener("drop", function (event) {
//                 todo.appendChild(currentItem);
//                 currentItem = null;
//             });


//             done.addEventListener("dragover", function (event) {
//                 event.preventDefault();
//             });
//             done.addEventListener("drop", function (event) {
//                 done.appendChild(currentItem);
//                 currentItem = null;
//             });


//         });
//     }
// }, 100);


for (list of lists) {
        list.addEventListener("dragstart", function (event) {
            let currentItem = event.target;

            inProcess.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            inProcess.addEventListener("drop", function (event) {
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="";
                inProcess.appendChild(currentItem);
                currentItem = null;
            });


            todo.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            todo.addEventListener("drop", function (event) {
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="";
                todo.appendChild(currentItem);
                currentItem = null;
            });


            done.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            done.addEventListener("drop", function (event) {
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="doneContent";
                done.appendChild(currentItem);
                currentItem = null;
            });


        });
    }


// const checkboxs=document.getElementsByTagName("input");
// for (const checkbox of checkboxs) {
//     console.log(checkbox.checked);
// }

document.addEventListener("change", function (event) {
    if (event.target.classList.contains("taskCheckbox")) {
        const task = event.target.closest(".list");

        setTimeout(() => {
            if (task.parentElement.id === "todo") {
                inProcess.appendChild(task);
                event.target.checked = false;
            } else if (task.parentElement.id === "inProcess") {
                done.appendChild(task);
                event.target.checked = false;

            } else if (task.parentElement.id === "completed") {
                task.remove();
            }
        }, 700);

    }
});

document.addEventListener("click", function (event) {
    if (event.target.closest(".deleteBtn")) {
        const task = event.target.closest(".list") || event.target.closest(".doneContent");
        task.remove();
    }
});









//adding the input 
// document.getElementById("add").addEventListener("click",addTask);

// function addTask(){
//     let input=prompt("Enter the name of Task");
//     // let task=`<div class="list" draggable="true">
//     //       <div class="listDes">
//     //         <p>${input}</p>
//     //         <input type="checkbox" class="taskCheckbox">
//     //         <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
//     //       </div>
//     //     </div>`;
//     // todo.append(task);


//     let div = document.createElement("div");
//             div.innerHTML = input + '<div class='listDes'>
//             <p>JSON</p>
//             <input type='checkbox' class='taskCheckbox'>
//             <button class='deleteBtn'><i class='fa-solid fa-trash'></i></button>
//           </div>";
// }

const addBtns = document.querySelectorAll(".addBtn");
const inputs = document.querySelectorAll(".taskInput");

addBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const value = inputs[index].value;
        if (value === "") return;

        const newList = document.createElement("div");
        newList.className = "list";
        newList.setAttribute("draggable", "true");
        newList.innerHTML = `
      <div class="listDes">
        <p>${value}</p>
        <input type="checkbox" class="taskCheckbox">
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
        inputs[index].value = "";

        // console.log(btn.parentElement);
        // console.log(btn.parentElement.parentElement);
        
        if(index==2){
            let title=newList.children[0].children[0];
                // console.log(title);
            title.className="doneContent";
            btn.parentElement.parentElement.appendChild(newList);
        }
        btn.parentElement.parentElement.appendChild(newList);



        //drag and drop
        newList.addEventListener("dragstart", function (event) {
            let currentItem = event.target;
            // console.log(currentItem);

            inProcess.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            inProcess.addEventListener("drop", function (event) {
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="";
                inProcess.appendChild(currentItem);
                currentItem = null;
            });


            todo.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            todo.addEventListener("drop", function (event) {
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="";
                todo.appendChild(currentItem);
                currentItem = null;
            });


            done.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            done.addEventListener("drop", function (event) {
                // console.log(currentItem.children);
                let title=currentItem.children[0].children[0];
                // console.log(title);
                title.className="doneContent";
                // currentItem.children.className="doneContent";
                done.appendChild(currentItem);
                
                currentItem = null;
            });


        });

    });
});





