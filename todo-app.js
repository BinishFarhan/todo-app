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




var getUl = document.getElementById('ul')

// ===== to add list =====
function add() {

    var inputField = document.getElementById('inp')

    // =======Create li======>
    var li = document.createElement('li')
    li.setAttribute("class", " flex justify-between list-none max-w-3xl text-clip border-b")

    //========Create Div1 =======>
    var div1 = document.createElement('div')
    div1.setAttribute("class", "flex ")

    // =======CheckBox======
    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "me-3 w-5 ")

    //====List text======
    var liText = document.createTextNode(inputField.value)
    var divLiText = document.createElement('div')
    divLiText.setAttribute("class", "text-lg font-serif")
    divLiText.appendChild(liText)


    //========Create Div2 =======>
    var div2 = document.createElement('div')
    div2.setAttribute("class", "flex ")

    // ====== Edit Button =======
    var editBtn = document.createElement('button')
    var editBtnIcn = document.createElement('i')
    editBtnIcn.setAttribute("class", "text-blue-950 ps-3 fa-solid fa-pen outline-none shadow-lg transform active:scale-75 transition-transform")
    editBtn.appendChild(editBtnIcn)

    //===== Delete Button=====

    var delBtn = document.createElement('button')
    var delBtnIcn = document.createElement('i')
    delBtnIcn.setAttribute("class", "text-blue-950 ps-3 fa-solid fa-trash-can text-xl outline-none shadow-lg transform active:scale-75 transition-transform")
    delBtn.appendChild(delBtnIcn)

    // ======= Child ==== >
    div1.appendChild(checkbox)
    div1.appendChild(divLiText)
    div2.appendChild(editBtn)
    div2.appendChild(delBtn)
    li.appendChild(div1)
    li.appendChild(div2)
    getUl.appendChild(li)

    // =====Setting function of del and edit btn =====>
    delBtn.setAttribute("onclick", "delLi(this)")
    editBtn.setAttribute("onclick", "editLi(this)")

    // ====== To empty the field value ======
    inputField.value = ''
}

// ====== Use enter key to add list =====>
function enter() {
    if (event.keyCode === 13) {
        add()
    }
}

// ===== To delete all enteries====
function deleteAll() {
    getUl.innerHTML = ' '
}
// ==== using keyboard key dlet to  del all enteries
window.onkeyup = foo
function foo() {
    if (event.keyCode === 46) {
        deleteAll()
    }

}
 
// =====to delete the list item====
function delLi(e) {
    e.parentNode.parentNode.remove() // remove method is used to delete .
}

// ======to edit list =====
function editLi(e) {
    var a = e.parentNode.parentNode.firstChild.childNodes[1].textContent
    var b = prompt("Enter edit value", a)
    e.parentNode.parentNode.firstChild.childNodes[1].textContent = b
}

