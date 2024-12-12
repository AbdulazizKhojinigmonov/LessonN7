function tel(){
    const code = document.getElementById("code").value;
    const UZ = "+998";
    const KZ = "+7";
    const US = "+1";

    let tel
    if( code == ""){
        tel =  "Вы не выбрали код"
    }else if( code == "Uz"){
        tel = UZ;
    }else if( code == "Kz"){
        tel = KZ;
    }else if( code == "Us"){
        tel = US;
    }else {
        tel = "Надо же было умудриться вызвать эту команду"
    }
    
    const codeNumber = document.getElementById("codeNumber");
    codeNumber.value = tel;

}


function Send(){
    const name = document.getElementById("name").value;
    const code = document.getElementById("code").value;
    const codeNumber = document.getElementById("codeNumber").value;
    const agree = document.getElementById("agree").checked;
    const buttonSend = document.getElementById("buttonSend");

    if(name.length != 0 && code.length != 0 && codeNumber.length != 0 && agree == true){
        buttonSend.disabled = false;
    } else{
        buttonSend.disabled = true;
    }
}