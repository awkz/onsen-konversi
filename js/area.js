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