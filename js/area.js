area1 = "0";
area2 = "0";
areakonversi1 = "";
areakonversi2 = "";

function areatambahAngka(angka) {
    if ((eval(area1) == 0) && (area1.indexOf(".") == -1)) {
        area1 = angka;
    } else {
        area1 += angka;
    }
    document.getElementById("area1").value = area1;
    areakonversi();
}

function areakonversi() {
    area1 = document.getElementById("area1").value;
    areakonversi1 = document.getElementById("areakonversi1").value;
    areakonversi2 = document.getElementById("areakonversi2").value;
    if ((areakonversi1 == "mm") && (areakonversi2 == "mm")) { //mm
        result = eval(area1);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "cm")) {
        result = eval(area1) / 100;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "m")) {
        result = eval(area1) / 1000000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "km")) {
        result = eval(area1) / 1000000000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "ft")) {
        result = eval(area1) / 92903.04;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "yd")) {
        result = eval(area1) / 836127.36;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "a")) {
        result = eval(area1) / 100000000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "ha")) {
        result = (eval(area1)/ 10000000000);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "mm") && (areakonversi2 == "acre")) {
        result = (eval(area1) * 2.47105407 * Math.pow(10, -10));
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "mm")) { //cm
        result = eval(area1)*100;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "cm")) {
        result = eval(area1);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "m")) {
        result = eval(area1) / 10000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "km")) {
        result = eval(area1) / 10000000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "ft")) {
        result = eval(area1) / 929.03;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "yd")) {
        result = eval(area1) / 8361.2736;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "a")) {
        result = eval(area1) / 1000000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "ha")) {
        result = (eval(area1)/ 100000000);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "cm") && (areakonversi2 == "acre")) {
        result = (eval(area1) * 2.4711 * Math.pow(10, -8));
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "mm")) { //m
        result = eval(area1)*10000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "cm")) {
        result = eval(area1)*100;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "m")) {
        result = eval(area1);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "km")) {
        result = eval(area1) / 100000;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "ft")) {
        result = eval(area1) / 10.7639;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "yd")) {
        result = eval(area1) / 1.19599;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "a")) {
        result = eval(area1) / 100;
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "ha")) {
        result = (eval(area1)/ 10000);
        document.getElementById("area2").value = result;
    } else if ((areakonversi1 == "m") && (areakonversi2 == "acre")) {
        result = (eval(area1) * 4046,856);
        document.getElementById("area2").value = result;
    } else if((areakonversi1 == "km") && (areakonversi2 == "mm")){ //km
        result = eval(area1)/0.000000000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "cm")){
        result = eval(area1)/0.0000000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "a")){
        result = eval(area1)/0.0001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "m")){
        result = eval(area1)/0.000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "km")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "ft")){
        result = eval(area1)/9.2903039997495;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "ha")){
        result = eval(area1)/0.01;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "km") && (areakonversi2 == "acre")){
        result = eval(area1)/0.0040468626697153;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "km") && (areakonversi2 == "yd")){
        result = eval(area1)/8.3612736021049;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "a") && (areakonversi2 == "mm")){ //a
        result = eval(area1)/0.00000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "cm")){
        result = eval(area1)/0.000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "a")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "m")){
        result = eval(area1)/0.01;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "km")){
        result = eval(area1)/10000;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "ft")){
        result = eval(area1)/0.00092903039997495;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "ha")){
        result = eval(area1)/100;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "a") && (areakonversi2 == "acre")){
        result = eval(area1)/40.468626697153;
        document.getElementById("area2").value = result;
      }else if((areakonversi1 == "a") && (areakonversi2 == "yd")){
        result = eval(area1)/0.0083612736021049;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "mm")){
        result = eval(area1)/0.000010763910417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "cm")){
        result = eval(area1)/0.0010763910417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "a")){
        result = eval(area1)/1076.3910417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "m")){
        result = eval(area1)/10.763910417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "km")){
        result = eval(area1)/10763910.417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "ft")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "ha")){
        result = eval(area1)/107639.10417;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ft") && (areakonversi2 == "acre")){
        result = eval(area1)/43560.067246717;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "ft") && (areakonversi2 == "yd")){
        result = eval(area1)/9.0000000025084;
        document.getElementById("area2").value = result;
      
      } else if((areakonversi1 == "ha") && (areakonversi2 == "mm")){
        result = eval(area1)/0.0000000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "cm")){
        result = eval(area1)/0.00000001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "a")){
        result = eval(area1)/0.01;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "m")){
        result = eval(area1)/0.0001;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "km")){
        result = eval(area1)/100;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "ft")){
        result = eval(area1)/0.0000092903039997495;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "ha")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "ha") && (areakonversi2 == "acre")){
        result = eval(area1)/0.40468626697153;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "ha") && (areakonversi2 == "yd")){
        result = eval(area1)/0.000083612736021049;
        document.getElementById("area2").value = result;
      
      } else if((areakonversi1 == "acre") && (areakonversi2 == "mm")){
        result = eval(area1)/2.47105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "cm")){
        result = eval(area1)/2.47105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "a")){
        result = eval(area1)/0.0247105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "m")){
        result = eval(area1)/0.000247105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "km")){
        result = eval(area1)/247.105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "ft")){
        result = eval(area1)/0.000022956805698581;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "ha")){
        result = eval(area1)/2.47105;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "acre") && (areakonversi2 == "acre")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "acre") && (areakonversi2 == "yd")){
        result = eval(area1)/0.00020661125134481;
        document.getElementById("area2").value = result;
      
      } else if((areakonversi1 == "yd") && (areakonversi2 == "mm")){
        result = eval(area1)/0.000001195990046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "cm")){
        result = eval(area1)/0.0001195990046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "a")){
        result = eval(area1)/119.5990046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "m")){
        result = eval(area1)/1.195990046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "km")){
        result = eval(area1)/1195990.046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "ft")){
        result = eval(area1)/0.11111111108014;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "ha")){
        result = eval(area1)/11959.90046;
        document.getElementById("area2").value = result;
      } else if((areakonversi1 == "yd") && (areakonversi2 == "acre")){
        result = eval(area1)/4840.0074705085;
        document.getElementById("area2").value = result;
      
      }else if((areakonversi1 == "yd") && (areakonversi2 == "yd")){
        result = eval(area1)*1;
        document.getElementById("area2").value = result;
      
      }
}

function areatambahTitik() {
    if (area1.length == 0) {
        area1 = "0.";
    } else {
        if (area1.indexOf(".") == -1) {
            area1 += ".";
        }
    }
    document.getElementById("area1").value = area1;
}

function areabersihkan() {
    area1 = "0";
    document.getElementById("area1").value = area1;
    document.getElementById("area2").value = area1;
}