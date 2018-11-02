angka1 = "0";
angka2 = "0";
convert1 = "";
convert2 = "";

function tambahAngka(angka) {
    if ((eval(angka1) == 0) && (angka1.indexOf(".") == -1)) {
        angka1 = angka;
    } else {
        angka1 += angka;
    }
    document.getElementById("angka1").value = angka1;
    konversi();
}

function konversi() {
    angka1 = document.getElementById("angka1").value;
    convert1 = document.getElementById("convert1").value;
    convert2 = document.getElementById("convert2").value;
    if ((convert1 == "mm") && (convert2 == "mm")) { //mm
        result = eval(angka1);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "cm")) {
        result = eval(angka1) / 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "dm")) {
        result = eval(angka1) / 100;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "m")) {
        result = eval(angka1) / 1000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "km")) {
        result = eval(angka1) / 1000000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "ft")) {
        result = eval(angka1) / 304.8;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "in")) {
        result = eval(angka1) / 25.4;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.057000834025 * Math.pow(10, -19));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "mi")) {
        result = (eval(angka1) * 6.2137 * Math.pow(10, -7));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "nmi")) {
        result = (eval(angka1) * 5.399568 * Math.pow(10, -7));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mm") && (convert2 == "yd")) {
        result = eval(angka1) / 914.4;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "mm")) { //cm
        result = eval(angka1) * 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "cm")) {
        result = eval(angka1) / 1;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "dm")) {
        result = eval(angka1) / 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "m")) {
        result = eval(angka1) / 100;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "km")) {
        result = eval(angka1) / 100000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "ft")) {
        result = eval(angka1) / 30.48;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "in")) {
        result = eval(angka1) / 2.54;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.057000834025 * Math.pow(10, -18));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "mi")) {
        result = (eval(angka1) * 6.2137 * Math.pow(10, -6));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "nmi")) {
        result = (eval(angka1) * 5.399568 * Math.pow(10, -6));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "cm") && (convert2 == "yd")) {
        result = eval(angka1) / 91.44;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "mm")) { //dm
        result = eval(angka1) * 100;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "cm")) {
        result = eval(angka1) * 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "dm")) {
        result = eval(angka1) / 1;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "m")) {
        result = eval(angka1) / 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "km")) {
        result = eval(angka1) / 10000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "ft")) {
        result = eval(angka1) / 3.048;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "in")) {
        result = eval(angka1) / 0.254;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.057000834025 * Math.pow(10, -17));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "mi")) {
        result = (eval(angka1) * 6.2137 * Math.pow(10, -5));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "nmi")) {
        result = (eval(angka1) * 5.399568 * Math.pow(10, -5));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "dm") && (convert2 == "yd")) {
        result = eval(angka1) / 9.144;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "mm")) { //m
        result = eval(angka1) * 1000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "cm")) {
        result = eval(angka1) * 100;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "dm")) {
        result = eval(angka1) * 10;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "m")) {
        result = eval(angka1) * 1;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "km")) {
        result = eval(angka1) / 1000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "ft")) {
        result = eval(angka1) / 0.3048;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "in")) {
        result = eval(angka1) / 0.0254;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.057000834025 * Math.pow(10, -16));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "mi")) {
        result = (eval(angka1) * 6.2137 * Math.pow(10, -4));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "nmi")) {
        result = (eval(angka1) * 5.399568 * Math.pow(10, -4));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "m") && (convert2 == "yd")) {
        result = eval(angka1) / 0.9144;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "mm")) { //km
        result = eval(angka1) * 1000000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "cm")) {
        result = eval(angka1) * 100000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "dm")) {
        result = eval(angka1) * 10000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "m")) {
        result = eval(angka1) * 1000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "km")) {
        result = eval(angka1) / 1;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "ft")) {
        result = eval(angka1) * 3048.84;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "in")) {
        result = eval(angka1) * 39370.079;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.057000834025 * Math.pow(10, -13));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "mi")) {
        result = (eval(angka1) * 6.2137 * Math.pow(10, -1));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "nmi")) {
        result = (eval(angka1) * 5.399568 * Math.pow(10, -1));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "km") && (convert2 == "yd")) {
        result = eval(angka1) * 1093.613;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "mm")) { //ft
        result = eval(angka1) * 304.8;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "cm")) {
        result = eval(angka1) * 30.48;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "dm")) {
        result = eval(angka1) * 3.048;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "m")) {
        result = eval(angka1) / 3.281;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "km")) {
        result = eval(angka1) / 3280.84;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "ft")) {
        result = eval(angka1);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "in")) {
        result = eval(angka1) * 12;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "ly")) {
        result = (eval(angka1) * 3.221738542107 * Math.pow(10, -17));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "mi")) {
        result = (eval(angka1) / 5280);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "nmi")) {
        result = eval(angka1) / 6076.115;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ft") && (convert2 == "yd")) {
        result = eval(angka1) / 3;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "mm")) { // in
        result = eval(angka1) * 25.4;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "cm")) {
        result = eval(angka1) * 2.54;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "dm")) {
        result = eval(angka1) * 3.937;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "m")) {
        result = eval(angka1) / 39.37;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "km")) {
        result = eval(angka1) / 39370.079;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "ft")) {
        result = eval(angka1) / 12;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "in")) {
        result = eval(angka1);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "ly")) {
        result = (eval(angka1) * 2.6848 * Math.pow(10, -18));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "mi")) {
        result = (eval(angka1) / 63360);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "nmi")) {
        result = eval(angka1) / 72913.386;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "in") && (convert2 == "yd")) {
        result = eval(angka1) / 36;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "mm")) { // ly
        result = eval(angka1) * 9.461 * Math.pow(10, 18);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "cm")) {
        result = eval(angka1) * 9.461 * Math.pow(10, 17);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "dm")) {
        result = eval(angka1) * 9.461 * Math.pow(10, 16);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "m")) {
        result = eval(angka1) * 9.461 * Math.pow(10, 15);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "km")) {
        result = eval(angka1) * 9.461 * Math.pow(10, 12);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "ft")) {
        result = eval(angka1) * 3.104 * Math.pow(10, 16);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "in")) {
        result = eval(angka1) * 3.725 * Math.pow(10, 17);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "ly")) {
        result = (eval(angka1));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "mi")) {
        result = (eval(angka1) * 5.879 * Math.pow(10, 12));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "nmi")) {
        result = eval(angka1) * 5.108 * Math.pow(10, 12);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "ly") && (convert2 == "yd")) {
        result = eval(angka1) * 1.035 * Math.pow(10, 16);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "mm")) { // mi
        result = eval(angka1) * 1609344;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "cm")) {
        result = eval(angka1) * 160934.4;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "dm")) {
        result = eval(angka1) * 16093.44;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "m")) {
        result = eval(angka1) * 1609.344;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "km")) {
        result = eval(angka1) * 1.609344;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "ft")) {
        result = eval(angka1) * 5280;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "in")) {
        result = eval(angka1) * 63360;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.7011 * Math.pow(10, -13));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "mi")) {
        result = (eval(angka1));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "nmi")) {
        result = eval(angka1) / 1.151;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "mi") && (convert2 == "yd")) {
        result = eval(angka1) * 1760;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "mm")) { // nmi
        result = eval(angka1) * 1852000;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "cm")) {
        result = eval(angka1) * 185200;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "dm")) {
        result = eval(angka1) * 18520;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "m")) {
        result = eval(angka1) * 1852;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "km")) {
        result = eval(angka1) * 1.852;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "ft")) {
        result = eval(angka1) * 6076.115485564;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "in")) {
        result = eval(angka1) * 72913.38582677;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "ly")) {
        result = (eval(angka1) * 1.9576 * Math.pow(10, -13));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "mi")) {
        result = (eval(angka1) * 1.15078);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "nmi")) {
        result = eval(angka1);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "nmi") && (convert2 == "yd")) {
        result = eval(angka1) * 2025.372;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "mm")) { // yd
        result = eval(angka1) * 914.44;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "cm")) {
        result = eval(angka1) * 91.44;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "dm")) {
        result = eval(angka1) * 9.144;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "m")) {
        result = eval(angka1) * 0.9144;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "km")) {
        result = eval(angka1) * 0.0009144;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "ft")) {
        result = eval(angka1) * 3;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "in")) {
        result = eval(angka1) * 36;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "ly")) {
        result = (eval(angka1) * 9.6652 * Math.pow(10, -17));
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "mi")) {
        result = (eval(angka1) / 1760);
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "nmi")) {
        result = eval(angka1) / 2025.372;
        document.getElementById("angka2").value = result;
    } else if ((convert1 == "yd") && (convert2 == "yd")) {
        result = eval(angka1);
        document.getElementById("angka2").value = result;
    }
}

function tambahTitik() {
    if (angka1.length == 0) {
        angka1 = "0.";
    } else {
        if (angka1.indexOf(".") == -1) {
            angka1 += ".";
        }
    }
    document.getElementById("angka1").value = angka1;
}

function bersihkan() {
    angka1 = "0";
    document.getElementById("angka1").value = angka1;
    document.getElementById("angka2").value = angka1;
}