// let mentorsArray = [
//     {
//         name: "Angel Resendiz",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 10
//             },
//             {
//                 signature:  "JS",
//                 score: 9
//             },
//         ]
//     },
//     {
//         name: "Elda Corona",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 9
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Alfred Altamirando",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 9
//             },
//             {
//                 signature:  "CSS",
//                 score: 10
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Tux Tuxtla",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 8
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Fernanda Palacios",
//         scores: [
//             {
//                 signature:  "CSS",
//                 score: 9
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//         ]
//     }
// ]


// const getAverageAsignatures = arrayMentors => {
//     let htmlAccum = 0
//     let cssAccum = 0
//     let jsAccum = 0
//     let mentorsQty = arrayMentors.length
//     arrayMentors.forEach((mentorObject, index) => {
//         // console.log(mentorObject)
//         mentorObject.scores.forEach((scoreMentor)=> {
//             // console.log(scoreMentor)
//             let signature = scoreMentor.signature
//             let score = scoreMentor.score

//             switch(signature) {
//                 case "HTML": 
//                     htmlAccum += score
//                     break;
//                 case "CSS":
//                     cssAccum += score
//                     break;
//                 case "JS":
//                     jsAccum += score
//                     break;
//                 default:
//                     console.log("Asignatura no encontrada")
//             }

//         })
//     })

//     let avgHtml = htmlAccum / mentorsQty
//     let avgCss = cssAccum / mentorsQty
//     let avgJs = jsAccum / mentorsQty

//     let objectAvg = { avgHtml, avgCss, avgJs}
//     return objectAvg
// }

// //invocar
// let avgSignatures = getAverageAsignatures(mentorsArray)
// console.log(avgSignatures)

// /*
// - Obtener el promedio indivual de cada mentor
// */

// const getAvgForMentor = scoresArray => {
//     let accumMentor = 0
//     let scoresQty = scoresArray.length
//     scoresArray.forEach((scoreMentor)=> {
//         let valueScore = scoreMentor.score
//         accumMentor += valueScore
//     })
//     let avgMentor = accumMentor / scoresQty
//     return avgMentor
// }

// /*
// arrayAverage = [
//     { 
//         name: "",
//         average: 9.0
//     }
// ]

// */


// const getAvgMentors = arrayMentors => {
//     let arrayAverageMentors = []
//     arrayMentors.forEach((mentor)=> {
//         let avg = getAvgForMentor(mentor.scores)
//         let objectMentor = { 
//             name: mentor.name, 
//             average: avg
//         }
//         arrayAverageMentors.push(objectMentor)
//     })
//     return arrayAverageMentors
// }

// let avgMentors = getAvgMentors(mentorsArray)

// console.log(avgMentors)

// /*
// - Crear un array de string con la siguiente forma:
//   "Mi nombre es {name} y mi promedio es {promedio}"
// */


// /*
// arrayAverage = [
//     { 
//         name: "",
//         average: 9.0
//     }
// ]

// */
// let arrayStringsMentors = []

// avgMentors.forEach((mentor)=> {
//     // destructuring
//     let { name } = mentor
//     arrayStringsMentors.push(name)
// })
// console.log(arrayStringsMentors)

// // let arrayStringsMentors = []

// // avgMentors.forEach((mentor)=> {
// //     // destructuring
// //     let { name, average,  } = mentor
// //     arrayStringsMentors.push(`Mi nombre es ${name} y mi promedio es ${average}`)
// // })
// // console.log(arrayStringsMentors)


// // let arrayLabelsMentors = avgMentors.map((mentor) => {
// //     const { name, average,  } = mentor
// //     const label = `Mi nombre es ${name} y mi promedio es ${average}`
// //     return label
// // })

// //
// const arrayLabelsMentors = avgMentors.map((mentor) => `Mi nombre es ${mentor.name} y mi promedio es ${mentor.average}`)


// console.log("Con Map:")
// console.log(arrayLabelsMentors)


// // - Obtener la lista de mentores cuyo promedio sea mayor a 9.5

// let mentorsTop = []

// avgMentors.forEach((mentor)=> {
//     mentor.average >= 9.5 ? mentorsTop.push(mentor) : null
// })
// console.log(mentorsTop)

// let newArraySuperMentors = avgMentors.filter((mentor) => {
//     if(mentor.average >= 9.5) {
//         return mentor
//     }
// })

// console.log("Filter")
// console.log(newArraySuperMentors)


// let ul = document.createElement("ul");


// namesArray.forEach(arrayStringsMentors => {
//     let li = document.childElementCount("li");
//     let txt = document.createTextNode(arrayStringsMentors);

//     li.appendChild(txt);
//     ul.uppendChild(li)
// })


// thead.appendChild(headerRow)
// table.appendChild(thead)
// document.body.appendChild(table)

// tbody = document.createElement(`tbody`)

console.log(`----------------homework----------------`)

let mentorsArray = [
    {
        name: "Fernanda",
        mail: "fernanda@kodemia.mx",
        phone: "9671686557",
        avg: 9
    },
    {
        name: "Alfred",
        mail: "alfred@kodemia.mx",
        phone: "5523452345", 
        avg: 10
    },
    {
        name: "Angel",
        mail: "angle@kodemia.mx",
        phone: "5541686557", 
        avg: 10
    }
]

const getAgvGeneral = (arrayMentors) => {
    return arrayMentors.reduce((accum,mentor)=> accum + mentor.avg, 0) / arrayMentors.length
}

const printTable = () => {
    let headersTable = ["Nombre", "E-mail", "Phone"]
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let headerRow = document.createElement("tr")

    headersTable.forEach(title => {
        let headTd = document.createElement("td")
        let textHead = document.createTextNode(title)
        headTd.appendChild(textHead)
        headerRow.appendChild(headTd)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)
    

    let tbody = document.createElement("tbody")


    mentorsArray.forEach(mentor => {
        // let trMentor = document.createElement("tr")
        // let nameTd = document.createElement("td")
        // let mailTd = document.createElement("td")
        // let phoneTd = document.createElement("td")

        // let nameText = document.createTextNode(mentor.name)
        // let mailText = document.createTextNode(mentor.mail)
        // let phoneText = document.createTextNode(mentor.phone)

        // nameTd.appendChild(nameText)
        // mailTd.appendChild(mailText)
        // phoneTd.appendChild(phoneText)

        // trMentor.appendChild(nameTd)
        // trMentor.appendChild(mailTd)
        // trMentor.appendChild(phoneTd)

        // tbody.appendChild(trMentor)
        tbody.innerHTML += `
            <tr>
                <td>${mentor.name}</td>
                <td>${mentor.mail}</td>
                <td>${mentor.phone}</td>
            </tr>
        `
    })
    table.appendChild(tbody)
    // console.log(table.innerHTML)
    // let saludo = "Hola Koders!!"
    // table.innerHTML = `<p>${saludo}</p>`
    // table.textContent = "<p>Hola Koders</p>"
    document.body.appendChild(table)

    let phrase = document.createElement("p")
    let textAvg = document.createTextNode(`El promedio general es: ${getAgvGeneral(mentorsArray).toFixed(1)}`)

    phrase.appendChild(textAvg)

    document.body.appendChild(phrase)
}