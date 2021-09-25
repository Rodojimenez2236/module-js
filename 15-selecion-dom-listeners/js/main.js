// Por tagname

let listItem = document.getElementsByTagName("li")
console.log(listItem)
// Por class

let byClass = document.getElementsByClassName("koder-item")
console.log(byClass)
// getElementById(id)

let ulById = document.getElementsById("koders-list")
console.log(ulById)

//

//

let li = document.querySelectorAll("ul#koders-list li.koder-item")
console.log(lis)

lis.forEach(element => {
    console.log(element)
})