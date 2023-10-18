function botao_resposta() {
    var respostausuario1 = document.querySelector('input[name="resposta1"]:checked');
    var respostausuario2 = document.querySelector('input[name="resposta2"]:checked');
    var respostausuario3 = document.querySelector('input[name="resposta3"]:checked');
    var respostausuario4 = document.querySelector('input[name="resposta4"]:checked');
    var respostausuario5 = document.querySelector('input[name="resposta5"]:checked');
    var respostausuario6 = document.querySelector('input[name="resposta6"]:checked');
    var respostausuario7 = document.querySelector('input[name="resposta7"]:checked');
    var respostausuario8 = document.querySelector('input[name="resposta8"]:checked');
    var respostausuario9 = document.querySelector('input[name="resposta9"]:checked');
    var respostausuario10 = document.querySelector('input[name="resposta10"]:checked');


    if(respostausuario1 && respostausuario2 && respostausuario3 && respostausuario4 && respostausuario5 && respostausuario6 && respostausuario7 && respostausuario8 && respostausuario9 && respostausuario10){
        
        if(respostausuario1.value === "correta"){
            document.getElementById("resultado_1").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_1").innerHTML = "errou";
        }
        if(respostausuario2.value === "correta"){
            document.getElementById("resultado_2").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_2").innerHTML = "errou";
        }
        if(respostausuario3.value === "correta"){
            document.getElementById("resultado_3").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_3").innerHTML = "errou";
        }
        if(respostausuario4.value === "correta"){
            document.getElementById("resultado_4").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_4").innerHTML = "errou";
        }
        if(respostausuario5.value === "correta"){
            document.getElementById("resultado_5").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_5").innerHTML = "errou";
        }
        if(respostausuario6.value === "correta"){
            document.getElementById("resultado_6").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_6").innerHTML = "errou";
        }
        if(respostausuario7.value === "correta"){
            document.getElementById("resultado_7").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_7").innerHTML = "errou";
        }
        if(respostausuario8.value === "correta"){
            document.getElementById("resultado_8").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_8").innerHTML = "errou";
        }
        if(respostausuario9.value === "correta"){
            document.getElementById("resultado_9").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_9").innerHTML = "errou";
        }
        if(respostausuario10.value === "correta"){
            document.getElementById("resultado_10").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_10").innerHTML = "errou";
        }
    }
    else{
        alert("Não deixar questões em berto!");
    }
    
}
