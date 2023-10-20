function add(){
    let first= parseInt(document.getElementById("firstinput").value);
    let second= parseInt(document.getElementById("secondinput").value);

    
    document.getElementById("output").innerText = ( first + second )
}
function sub(){
    let first= parseInt(document.getElementById("firstinput").value);
    let second= parseInt(document.getElementById("secondinput").value);


    
   document.getElementById("output").innerText = ( first - second )
}
function mul(){
    let first= parseInt(document.getElementById("firstinput").value);
    let second= parseInt(document.getElementById("secondinput").value);


    
   document.getElementById("output").innerText = ( first * second )
}
function div(){
    let first= parseInt(document.getElementById("firstinput").value);
    let second= parseInt(document.getElementById("secondinput").value);
    

    
   document.getElementById("output").innerText = ( first / second )
}
