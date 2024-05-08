// Function to generate random hexa color.
function colorchange(){
    let number = Math.random() * 16777215;
    number = Math.floor(number);

    let hexacode = "#" + number.toString(16);
    return hexacode;
    
}

// Selecting First Button Using Class Name .first.
let btn1 = document.querySelector(".first");

// EventListener To Change BackgroundColor Of 1st Div. 
btn1.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main1").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode1")
    code.innerText = colorCode
})

// Selecting First Button Using Class Name .second.
let btn2 = document.querySelector(".second");

// EventListener To Change BackgroundColor Of 2nd Div.
btn2.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main2").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode2")
    code.innerText = colorCode
    
})

// Selecting First Button Using Class Name .third.
let btn3 = document.querySelector(".third");

// EventListener To Change BackgroundColor Of 3rd Div.
btn3.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main3").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode3")
    code.innerText = colorCode
    
})

// Selecting First Button Using Class Name .fourth.
let btn4 = document.querySelector(".fourth");

// EventListener To Change BackgroundColor Of 4th Div.
btn4.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main4").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode4")
    code.innerText = colorCode
    
})
