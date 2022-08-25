const div = document.querySelector("#days");
// console.log(div)

// const week = ["monday","tuesday","wednesday","thurday","friday","saturday","sunday"];
// let p = document.createElement("p")
// p.innerText = week.join("||")
// div.appendChild(p)

// const weekend = week.splice(5,2,);

// let ourWeekend = document.createElement("h3")
// ourWeekend.innerText = `our weekend days are ${weekend.join(" and ")} and our working days are ${week.join("||")}`;
// div.appendChild(ourWeekend)

function printName() {
const p = document.createElement("p");
p.innerText = "some test;
const div = document.getElementById("days")
div.appendChild(p)
    printName();
    }

document.getElementById("print").addEventListener("click", printName)
