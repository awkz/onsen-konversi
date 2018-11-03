speed1 = "0";
speed2 = "0";
speedkonversi1 = "";
speedkonversi2 = "";

function speedtambahAngka(angka) {
    if ((eval(speed1) == 0) && (speed1.indexOf(".") == -1)) {
        speed1 = angka;
    } else {
        speed1 += angka;
    }
    document.getElementById("speed1").value = speed1;
    speedkonversi();
}

function speedkonversi() {
    speed1 = document.getElementById("speed1").value;
    speedkonversi1 = document.getElementById("speedkonversi1").value;
    speedkonversi2 = document.getElementById("speedkonversi2").value;
    if ((speedkonversi1 == "m/s") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.016666666666667;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 16.6667;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.27777777777778;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 0.30480000000122;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 0.514444444;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 340.3;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/s") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 0.44704;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 60.001;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 1000.002;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 16.6667;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 18.2834;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 30.8667;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 20417.3742;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "m/min") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 26.8167;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 0.06;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.001;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.0167;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 0.0183;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 0.0309;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 20.4173;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/min") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 0.0268;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 3.6;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.06;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 60;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 1.097;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 1.852;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 1225.04;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "km/h") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 1.609;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 3.2817;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.0547;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 54.6946;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.912;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 1.6882;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 1116.7183;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "ft/s") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 1.4667;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 1.9438;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.0324;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 32.3974;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.54;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 0.592;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "kn")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 661.4687;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "kn") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 0.869;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 0.00294;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.000049;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 0.049;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.000816;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 0.000895;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 0.00151;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "mach")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mach") && (speedkonversi2 == "mph")) {
        result = eval(speed1) / 0.00131;
        document.getElementById("speed2").value = result;

    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "m/s")) {
        result = eval(speed1) / 2.2374;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "m/min")) {
        result = eval(speed1) / 0.0373;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "km/min")) {
        result = eval(speed1) / 37.2902;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "km/h")) {
        result = eval(speed1) / 0.622;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "ft/s")) {
        result = eval(speed1) / 0.682;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "kn")) {
        result = eval(speed1) / 1.151;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "mach")) {
        result = eval(speed1) / 761.3673;
        document.getElementById("speed2").value = result;
    } else if ((speedkonversi1 == "mph") && (speedkonversi2 == "mph")) {
        result = eval(speed1) * 1;
        document.getElementById("speed2").value = result;

    }
}

function speedtambahTitik() {
    if (speed1.length == 0) {
        speed1 = "0.";
    } else {
        if (speed1.indexOf(".") == -1) {
            speed1 += ".";
        }
    }
    document.getElementById("speed1").value = speed1;
}

function speedbersihkan() {
    speed1 = "0";
    document.getElementById("speed1").value = speed1;
    document.getElementById("speed2").value = speed1;
}