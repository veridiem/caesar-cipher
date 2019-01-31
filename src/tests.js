var testCode = encode(1, "abc");

if (testCode === "bcd"){
    console.log("O parâmetro 'abc' na função encode passou! =D");
}
else{
    console.log("O parâmetro 'abc' na função encode foi reprovado =(");
}

var testeDecode = decode(1, "bcd");

if (testeDecode === "abc"){
    console.log("O parâmetro 'bcd na função decode passou! =D")
}
else{
    console.log("O parâmetro 'bcd' na função decode foi reprovado =,(")
}

var testCode2 = encode(35, "Testes Laboratoria");

if (testCode2 === "Cnbcnb Ujkxajcxarj"){
    console.log("O parâmetro 'Testes Laboratoria' na função encode passou!! Aeeee!");
}
else{
    console.log("O parâmetro 'Testes Laboratoria' na função encode foi reprovado =(");
}

var testeDecode2 = decode(35, "Cnbcnb Ujkxajcxarj");

if(testeDecode2 === "Testes Laboratoria"){
    console.log("O parâmetro 'Testes Laboratoria' na função decode passou!! Aeeee!");
}
else{
    console.log("O parâmetro 'Testes Laboratoria' na função decode foi reprovado =(");
}

var testCode3 = encode(-1, "bcd");

if(testCode3 == "abc"){
    console.log("O parâmetro 'bcd' na função encode passou! Aeeee!");
}
else{
    console.log("O parâmetro 'bcd' na função encode foi reprovado =(");
}