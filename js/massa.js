massa1 = "0";
massa2 = "0";
massakonversi1 = "";
massakonversi2 = "";

function massatambahAngka(angka) {
    if ((eval(massa1) == 0) && (massa1.indexOf(".") == -1)) {
        massa1 = angka;
    } else {
        massa1 += angka;
    }
    document.getElementById("massa1").value = massa1;
    massakonversi();
}

function massakonversi() {
    massa1 = document.getElementById("massa1").value;
    massakonversi1 = document.getElementById("massakonversi1").value;
    massakonversi2 = document.getElementById("massakonversi2").value;
    if ((massakonversi1 == "mg") && (massakonversi2 == "mg")) { //mg
        result = eval(massa1) * 1;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "g")) {
        result = eval(massa1) / 1000;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "u")) {
        result = eval(massa1) * 602228244504667100000;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "kg")) {
        result = eval(massa1) / 1000000;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "t")) {
        result = eval(massa1) / 1000000000;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "oz")) {
        result = eval(massa1) / 0.283495231;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "lb")) {
        result = eval(massa1) / 0.45359237;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "gr")) {
        result = eval(massa1) / 64.79891;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "ct")) {
        result = eval(massa1) / 200;
        document.getElementById("massa2").value = result;
    } else if ((massakonversi1 == "mg") && (massakonversi2 == "ton")) {
        result = eval(massa1) / 1000000000;
        document.getElementById("massa2").value = result;
    } else if((massakonversi1 == "g") && (massakonversi2 == "mg")){ //g
        result = eval(massa1)*1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "g")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "u")){
        result = eval(massa1)/0.16605;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "kg")){
        result = eval(massa1)/1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "t")){
        result = eval(massa1)/1000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "oz")){
        result = eval(massa1)/28.3495231;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "lb")){
        result = eval(massa1)/453.59237;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.06479891;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.2;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "g") && (massakonversi2 == "ton")){
        result = eval(massa1)/1000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "mg")){ //kg
        result = eval(massa1)*1000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "g")){
        result = eval(massa1)*1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "u")){
        result = eval(massa1)*0.60222824450466724;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "kg")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "t")){
        result = eval(massa1)/1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "oz")){
        result = eval(massa1)/0.0283495231;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "lb")){
        result = eval(massa1)/0.45359237;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.00006479891;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.0002;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "kg") && (massakonversi2 == "ton")){
        result = eval(massa1)/1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "mg")){ //oz
        result = eval(massa1)/0.0000352739619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "g")){
        result = eval(massa1)/0.0352739619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "u")){
        result = eval(massa1)/0.58571;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "kg")){
        result = eval(massa1)/35.2739619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "t")){
        result = eval(massa1)/35273.3686;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "oz")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "lb")){
        result = eval(massa1)/16;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.00228571429;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.00705479239;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "oz") && (massakonversi2 == "ton")){
        result = eval(massa1)/352739619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "mg")){ //lb
        result = eval(massa1)/0.00000220462262;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "g")){
        result = eval(massa1)/0.00220462262;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "u")){
        result = eval(massa1)*2.73165913881361;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "kg")){
        result = eval(massa1)/2.20462262;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "t")){
        result = eval(massa1)/2204.6244;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "oz")){
        result = eval(massa1)/0.0625;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "lb")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.000142857143;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.000440924524;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "lb") && (massakonversi2 == "ton")){
        result = eval(massa1)/2204.62262;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "mg")){
        result = eval(massa1)/0.0154323584;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "g")){
        result = eval(massa1)/15.4323584;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "u")){
        result = eval(massa1)/0.25625;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "kg")){
        result = eval(massa1)/154323584;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "t")){
        result = eval(massa1)/15432098.7654;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "oz")){
        result = eval(massa1)/437.5;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "lb")){
        result = eval(massa1)/7000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "gr")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "ct")){
        result = eval(massa1)/3.08647167;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "gr") && (massakonversi2 == "ton")){
        result = eval(massa1)/154323584;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "mg")){
        result = eval(massa1)/0.005;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "g")){
        result = eval(massa1)/5;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "u")){
        result = eval(massa1)/0.83025;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "kg")){
        result = eval(massa1)/5000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "t")){
        result = eval(massa1)/5000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "oz")){
        result = eval(massa1)/141.747616;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "lb")){
        result = eval(massa1)/2267.96185;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.32399455;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "ct")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ct") && (massakonversi2 == "ton")){
        result = eval(massa1)/5000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "mg")){
        result = eval(massa1)*1000000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "g")){
        result = eval(massa1)*1000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "u")){
        result = eval(massa1)*6.660644384221619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "kg")){
        result = eval(massa1)*1000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "t")){
        result = eval(massa1)/0.904;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "oz")){
        result = eval(massa1)/0.0000283495231;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "lb")){
        result = eval(massa1)/0.00045359237;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.00000006479891;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.0000002;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "ton") && (massakonversi2 == "ton")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "mg")){
        result = eval(massa1)/602228244504667100000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "g")){
        result = eval(massa1)/0.6022282445046672;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "u")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "kg")){
        result = eval(massa1)/0.60222824450466724;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "t")){
        result = eval(massa1)/0.6022282445046671;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "oz")){
        result = eval(massa1)/0.17073170731707315;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "lb")){
        result = eval(massa1)/0.273165913881361;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.3902439024390243;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "ct")){
        result = eval(massa1)/0.12044564890093344;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "u") && (massakonversi2 == "ton")){
        result = eval(massa1)/6.660644384221619;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "mg")){
        result = eval(massa1)/1000000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "g")){
        result = eval(massa1)/0.000001;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "u")){
        result = eval(massa1)*6.022282445046671;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "kg")){
        result = eval(massa1)/0.001;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "t")){
        result = eval(massa1)*1;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "oz")){
        result = eval(massa1)*35273.3686;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "lb")){
        result = eval(massa1)*2204.6244;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "gr")){
        result = eval(massa1)/0.0000000648;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "ct")){
        result = eval(massa1)/5000000;
        document.getElementById("massa2").value = result;
      } else if((massakonversi1 == "t") && (massakonversi2 == "ton")){
        result = eval(massa1)/1.106;
        document.getElementById("massa2").value = result;
      }
}

function massatambahTitik() {
    if (massa1.length == 0) {
        massa1 = "0.";
    } else {
        if (massa1.indexOf(".") == -1) {
            massa1 += ".";
        }
    }
    document.getElementById("massa1").value = massa1;
}

function massabersihkan() {
    massa1 = "0";
    document.getElementById("massa1").value = massa1;
    document.getElementById("massa2").value = massa1;
}