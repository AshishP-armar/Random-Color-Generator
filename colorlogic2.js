function colorchange(){
    let number = Math.random() * 10000000;
    number = Math.floor(number);

    let hexacode = "#" + number.toString(16);
    // console.log(number)
    // console.log(hexacode)
    return hexacode;
    // document.querySelector(".main1").style.backgroundColor = hexacode
    // let code = document.querySelector(".colorcode1")
    // code.innerText = hexacode
}


let btn1 = document.querySelector(".first");
btn1.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main1").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode1")
    code.innerText = colorCode
})

let btn2 = document.querySelector(".second");
btn2.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main2").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode2")
    code.innerText = colorCode
    
})

let btn3 = document.querySelector(".third");
btn3.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main3").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode3")
    code.innerText = colorCode
    
})

let btn4 = document.querySelector(".fourth");
btn4.addEventListener( "click", ()=>{
    let colorCode = colorchange()
    document.querySelector(".main4").style.backgroundColor = colorCode
    let code = document.querySelector(".colorcode4")
    code.innerText = colorCode
    
})
