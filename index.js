// const element1 = document.getElementById("message");
// console.log(element1);
// console.log(element1.innerHTML);
// console.log(element1.innerText);


// const element2 = document.getElementsByClassName("impMessage");
// console.log(element2);
// console.log(element2[0].innerHTML);
// console.log(element2[1].innerHTML);
// console.log(element2[1].innerText);


// const element3 = document.getElementsByTagName("span");

// console.log(element3);
// console.log(element3[0].innerHTML);
// console.log(element3[1].innerHTML);
// console.log(element3[1].innerText);

// // function changeText(){
// //     const changeText = document.getElementsByTagName("h1");
// //     console.log(changeText[0].innerText);
// //     changeText[0].innerText="Hello World";
// //     console.log( changeText[0].innerText);
// // }

function changeColor(){
    const changeColor = document.getElementsByClassName("impMessage");
    changeColor[0].style.color ="red";
    const changeColor1 = document.getElementById("message");
    changeColor1.style.color="orange";
    changeColor1.innerHTML = `<div><b>I AM RIBHU</b><div>`
}

console.log("WORKING");

// const elements = document.getElementsByClassName("item-container");
// console.log(elements);

function changeDirection(){
    const elements = document.getElementsByClassName("item-container");
    elements[0].style.flexDirection = "column";
    // const image = document.getElementsByTagName("img");
    // image[0].src="./images.jpg";

    document.getElementsByTagName("img")[0].src= "./images.jpg";

}


// for image use different function

let element5 = document.createElement("div");
element5.className="newDiv";
element5.id = "newDiv";
element5.setAttribute("for","value");
element5.innerText = "Hello I have created";
console.log(element5);
document.querySelector("p.impMessage").appendChild(element5);

let createElement = document.createElement("img");
createElement.className = "image";
createElement.setAttribute("src","./images.jpg");
console.log(createElement);
document.querySelector("p#message").appendChild(createElement);