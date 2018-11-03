    memory = "0";
    current = "0";
    operasi = 0;
    
    function kaltambahAngka(angka){
      if((eval(current) == 0) && (current.indexOf(".") == -1)){
        current = angka;
      } else {
        current += angka;
      }
      document.getElementById("Display").value = current;
    }
    function kaloperate(op){
      if(op.indexOf("+") > -1){ operasi = 1; }
      if(op.indexOf("-") > -1){ operasi = 2; }
      if(op.indexOf("*") > -1){ operasi = 3; }
      if(op.indexOf("/") > -1){ operasi = 4; }
      memory = current;
      current="";
      document.getElementById("Display").value = current;
    }
    function kalhasil(){
      if(operasi == 1) { current = eval(memory) + eval(current); }
      if(operasi == 2) { current = eval(memory) - eval(current); }
      if(operasi == 3) { current = eval(memory) * eval(current); }
      if(operasi == 4) { current = eval(memory) / eval(current); }
      memory = "0";
      operasi = 0;
      document.getElementById("Display").value = current;
    }
    function kaltambahTitik(){
      if(current.length == 0){
        current = "0.";
      } else {
        if(current.indexOf(".") == -1){
          current+= ".";
        }
      }
      document.getElementById("Display").value = current;
    }
    function kalplusMinus(){
      if(current.indexOf("-") == 0){
        current = current.substring(1);
      } else {
        current = "-"+current;
      }
      document.getElementById("Display").value = current;
    }
    function kalbersihkan(){
      current = "0";
      document.getElementById("Display").value = current;
    }