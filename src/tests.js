var sentToCode = encode(1, "abc")


function verifyCode(sentToCode, answer) {
    if (sentToCode === answer) {
      console.log("Passou no parâmetro " + sentToCode);
      return true;
    }else {
      console.log("Deu Erro! " + sentToCode + " não é igual a " + answer);
      return false;
    }
  }

verifyCode(sentToCode, "bcd");
sentToCode = encode(35, "Testes Laboratoria");
verifyCode(sentToCode, "Cnbcnb Ujkxajcxarj");
sentToCode = encode(-1, "bcd");
verifyCode(sentToCode, "abc");
sentToCode = decode(1, "ghi");
verifyCode(sentToCode, "fgh");
sentToCode = decode(35, "Cnbcnb Ujkxajcxarj");
verifyCode(sentToCode,"Testes Laboratoria");
sentToCode = decode(-2, "efg");
verifyCode(sentToCode, "ghi");