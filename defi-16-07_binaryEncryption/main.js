const convert = document.getElementById("convert") ;
const result = document.getElementById('crypted');

convert.addEventListener("click", function() {
    let msgToCode = document.getElementById('msgToCode').value;
    result.innerHTML='';
    let string = msgToCode.toString(6);
    console.log(string);
    for (i=0; i < msgToCode.length; i++){
        result.innerHTML +=msgToCode[i].charCodeAt(0).toString(2) + " ";
    }
});