// todo app are those in which we make list of whole day tasks..
// getAttribute ===> to enhance html tags in html file. (for ex: class = "abc"). 
// getAttribute will return attribute inside an called html tag.

//hasAttribute ===> check whether this tag of html have required attribute or not.
//setAttribute ===> it will set the attribute in required html tag.

// requirement===> when click on button show console. 
// on button tag we put onclick event. and call function 

// function foo(){
//     var input = document.getElementById('inp')

//     // to check getAttribute // returns the value of attribute if the html tag has it. 
//     //and if the tag doesnt have the required attribute it gives back null.
//     // var inputName = input.getAttribute('class')

//     // to check hasAttribute // it returns true or false.
//     // var inputName = input.hasAttribute('name')


//     // to check setAttribute // it returns true or false.
//     var inputName = input.setAttribute('class', 'abc')

//     console.log(inputName)

// }


// in whatsapp of any other chat app we use send button and then msg send in form of paragraph , heading, list. 
// these elements are made by javascript .. not directly in html 
//REASONS: it is hard coded in html
// and it appears as soon as page load. but we want it on click the button.

// WE CAN ALSO CREATE ELEMENTS/TAGS OF HTML THORUGH JAVASCRIPT.

// =====TODO APP ======> (Create, Read, Upadate, Delete)
// 1ST STEP:
// HTML:
// in html create input field, add button, delete all button and an empty ul.


// get ul globally...
var getUl = document.getElementById('ul') 

function add(){
    var inputField = document.getElementById('inp')
    var li = document.createElement('li')
    var liText = document.createTextNode(inputField.value)
    var delBtn = document.createElement('button')
    var delBtnText = document.createTextNode('X')
    delBtn.setAttribute("onclick" , "delLi(this)")
    delBtn.setAttribute('class' , 'button')
    delBtn.appendChild(delBtnText)
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.setAttribute("onclick" , "editLi(this)")
    editBtn.setAttribute('class' , 'button1')
    editBtn.appendChild(editBtnText)
    li.appendChild(liText)
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    getUl.appendChild(li)
    inputField.value = ''
}

function delLi(e){
    e.parentNode.remove() // remove method is used to delete .
}

function editLi(e){
    console.log(e.parentNode.firstChild)
    var a = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
    // e.parentNode.childNode.remove() // remove method is used to delete .
    // console.log(e.parentNode.childNode)
    //  document.getElementById("inp").value = e.parentNode.innerText.li
}



// function abc() {
//     var id = document.getElementById('inp')
//     // console.log("🚀 ~ file: todo.js:39 ~ abc ~ id:", id.value)// it will get the value of input field in console.
//     // we cant use document.write here because it will reload the page and html tag will disappear.
    

//     var li = document.createElement('li') // it will create li of html
//     // console.log("🚀 ~ file: todo.js:48 ~ abc ~ li:", li) // it makes li.

//     var liText = document.createTextNode(id.value) // it will put input values in li.
//     // console.log("🚀 ~ file: todo.js:51 ~ abc ~ liText:", liText)
//     //a "node" refers to an individual object in the document tree. 
//     // The DOM represents the structure of a document as a tree of objects, and each element, attribute, 
//     // and piece of text in an HTML or XML document is a node.
//     // These nodes can be accessed, manipulated, and modified using JavaScript. For example:
//     // li and litext will created in document .. and spread over it . they are not in any special element. 
//     // to fix them as a child in a special element ..

//     li.appendChild(liText)  //append means together. this method will make the child of li.
//     // console.log(li) // it shows data in li now.

//     getUl.appendChild(li)
//     console.log(getUl)

//     id.value = ' '
    
//     var del = document.createElement('button')

// } 

// to delete all data of ul.

function deleteAll(){
    getUl.innerHTML = ' '
}




// var days = dateToday.getDate()
// var month = dateToday.getMonth() + 1
// var year = dateToday.getFullYear()
// var fullDate = `${days}/${month}/${year}`
// console.log("🚀 ~ file: todo.js:124 ~ fullDate:", fullDate)
// divDate.innerText = `Today ${fullDate}`

// date.innerText = new Date()