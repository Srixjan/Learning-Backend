// console.log("Hello!");
// DOCUMENT OBJECT MODEL DOM
// document.querySelector, document.getElementsById, document.querySelectorAll, document.getElementsByClassName
// let h1 = document.getElementById("h1");
// console.dir(h1);

// let classh1 = document.getElementsByClassName("abcd");
// console.log(classh1);

// let abcd = (document.querySelector("h1"))
// console.log(abcd);

// text manipulation 
 
// let h1 = document.querySelector("h1");
// console.log(h1);

// 3 ways in changing

// h1.innerText = "Hello DOM!" <- changes text
// h1.textContent = "Hello DOM!" <- changes text
// h1.innerHTML = "<i>Hello DOM!</>" //<- changes HTML
// h1.hidden = true;

// setAttribute(tag, "link or anything u want to add")

// let a = document.querySelector("a");
// console.log(a);
// // a.href = "https://www.google.com";
// a.setAttribute("href", "https://store.steampowered.com/");


// let img = document.querySelector("img");
// console.log(img);
// img.setAttribute("src", /*"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"*/);

//TO GET A ATTRIBUTE

    // let ab = document.querySelector("a");
    // console.log(ab.getAttribute("href"));

// TO REMOVE A ATTRIBUTE

// a.removeAttribute("href");

let h1 = document.createElement("h1"); // -> Created an element
h1.textContent = "Hello Srijan!"; // putting text in h1
console.log(h1); // printing h1 in console

// document.body.prepend(h1);  -> h1 is placed before script.js
// document.body.append(h1);  -> h1 is placed after script.js

document.body.prepend(h1);

// let h1Color = document.querySelector("h1");
// h1Color.style.color = "green";
// console.dir(h1Color);

let h1Font = document.querySelector("h1");
h1Font.classList.add("style");

// h1Font.classList.remove("style");

//h1Font.classList.toggle("style"); <- even better turns on if off and vice versa


// EVENTS AND EVENTS HANDLING

