// === to get date =====
function date() {
    var d = new Date()
    return d;
}
// ====setting dates and month dynamically on app ======
document.getElementById('date').innerText = date().getDate()
document.getElementById('year').innerText = date().getFullYear()
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById('month').innerText = month[date().getMonth()]
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('day').innerText = dayNames[date().getDay()]

// ====== Setting to do List using template literals.=======>
var getUl = document.getElementById('ul')
var addBtn = document.getElementById("add")

function enabledbtn(event){
    var key = event.key;
    var alphanumeric = /^[0-9a-zA-Z]+$/;
    if(key.match(alphanumeric) && key !== "Enter"){
        addBtn.disabled = false
        addBtn.innerHTML = `<button id="addBtn" class=" h-5 w-18 outline-none shadow-lg transform active:scale-75 transition-transform  " onclick="add()"><i
        class="fa-solid fa-square-plus text-4xl text-blue-950 mt-2"></i></button>`
        addBtn.disabled = true
    }
}

function add() {
    var inputField = document.getElementById('inp')
    var inputFieldTrim = inputField.value.trim()
    if (inputFieldTrim !== "") {
        getUl.innerHTML += `<div class = "flex justify-between max-w-3xl text-clip border-b mb-5">
                            <div class = "flex">
                                <input type = "checkbox" class= "me-3 w-5 "> 
                                <li class = "text-2xl font-serif list-none ">${inputField.value}</li>
                            </div>
                            <div class = "flex">
                                <button onclick = "editLi2(this)" class = "focus: outline-none">
                                    <i class = "text-blue-950 ps-3 fa-solid fa-pen outline-none shadow-lg transform active:scale-75 transition-transform " ></i>
                                </button>
                                <button onclick = "delLi2(this)">
                                    <i class = "text-blue-950 ps-3 fa-solid fa-trash-can text-xl outline-none shadow-lg transform active:scale-75 transition-transform"></i>
                                </button>
                            </div>
                        </div>`
        inputField.value = " "
        addBtn.innerHTML = `<button id="addBtn" class=" h-5 w-18 outline-none shadow-lg "><i
         class="fa-solid fa-square-plus text-4xl text-gray-200 mt-2"></i></button>`
    }
    
}
// ======= using sweetalert2 input to edit todo========
async function editLi2(e) {
    var a = e.parentNode.parentNode.childNodes[1].childNodes[3].textContent
    const { value: text } = await Swal.fire({
        title: "Enter edit list",
        input: "text",        
        inputPlaceholder: `${a}`
      });
      if (text){
        var b = text
        e.parentNode.parentNode.childNodes[1].childNodes[3].textContent = b
      }
}

// ========== to delete specific list =========
function delLi2(e) {
    e.parentNode.parentNode.remove()
}

//======using enter key to add list below ======
function enter() {
    if (event.keyCode === 13) {
        add()
    }
}
// ======= to delete whole list (using sweet alert for confirmation of delete)======
function deleteAll() {
    Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        getUl.innerHTML = " "
    }
});

}

// =======using delete key to del all enteries.==========
window.onkeyup = foo
function foo() {
if (event.keyCode === 46) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            getUl.innerHTML = " "
        }
    });
}

}




// ======= adding list in UL using basic append child method. ========>

// ===== to add list =====
// function add() {

//     var inputField = document.getElementById('inp')

//     // =======Create li======>
//     var li = document.createElement('li')
//     li.setAttribute("class", " flex justify-between list-none max-w-3xl text-clip border-b")

//     //========Create Div1 =======>
//     var div1 = document.createElement('div')
//     div1.setAttribute("class", "flex ")

//     // =======CheckBox======
//     var checkbox = document.createElement("input")
//     checkbox.setAttribute("type", "checkbox")
//     checkbox.setAttribute("class", "me-3 w-5 ")

//     //====List text======
//     var liText = document.createTextNode(inputField.value)  // li.textContent =
//     var divLiText = document.createElement('div')
//     divLiText.setAttribute("class", "text-lg font-serif")
//     divLiText.appendChild(liText)


//     //========Create Div2 =======>
//     var div2 = document.createElement('div')
//     div2.setAttribute("class", "flex ")

//     // ====== Edit Button =======
//     var editBtn = document.createElement('button')
//     var editBtnIcn = document.createElement('i')
//     editBtnIcn.setAttribute("class", "text-blue-950 ps-3 fa-solid fa-pen outline-none shadow-lg transform active:scale-75 transition-transform")
//     editBtn.appendChild(editBtnIcn)

//     //===== Delete Button=====

//     var delBtn = document.createElement('button')
//     var delBtnIcn = document.createElement('i')
//     delBtnIcn.setAttribute("class", "text-blue-950 ps-3 fa-solid fa-trash-can text-xl outline-none shadow-lg transform active:scale-75 transition-transform")
//     delBtn.appendChild(delBtnIcn)

//     // ======= Child ==== >
//     div1.appendChild(checkbox)
//     div1.appendChild(divLiText)
//     div2.appendChild(editBtn)
//     div2.appendChild(delBtn)
//     li.appendChild(div1)
//     li.appendChild(div2)
//     getUl.appendChild(li)

//     // =====Setting function of del and edit btn =====>
//     delBtn.setAttribute("onclick", "delLi(this)")
//     editBtn.setAttribute("onclick", "editLi(this)")

//     // ====== To empty the field value ======
//     inputField.value = ''
// }

// // ====== Use enter key to add list =====>
// function enter() {
//     if (event.keyCode === 13) {
//         add()
        
//     }
// }

// // ===== To delete all enteries====
// function deleteAll() {
//         Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//             });
//             getUl.innerHTML = " "
//         }
//     });

// }


// ==== using keyboard key dlet to  del all enteries

// window.onkeyup = foo
// function foo() {
//     if (event.keyCode === 46) {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "Your file has been deleted.",
//                     icon: "success"
//                 });
//                 getUl.innerHTML = " "
//             }
//         });
//     }

// }

// =====to delete the list item====
// function delLi(e) {
//     e.parentNode.parentNode.remove() // remove method is used to delete .
// }

// // ======to edit list =====
// function editLi(e) {
//     var a = e.parentNode.parentNode.firstChild.childNodes[1].textContent
//     var b = prompt("Enter edit value", a)
//     e.parentNode.parentNode.firstChild.childNodes[1].textContent = b
// }