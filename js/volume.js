volume1 = "0";
volume2 = "0";
volumekonversi1 = "";
volumekonversi2 = "";

function volumetambahAngka(angka) {
    if ((eval(volume1) == 0) && (volume1.indexOf(".") == -1)) {
        volume1 = angka;
    } else {
        volume1 += angka;
    }
    document.getElementById("volume1").value = volume1;
    volumekonversi();
}

function volumekonversi() {
    volume1 = document.getElementById("volume1").value;
    volumekonversi1 = document.getElementById("volumekonversi1").value;
    volumekonversi2 = document.getElementById("volumekonversi2").value;
    if((volumekonversi1 == "ft") && (volumekonversi2 == "ft")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "m")){
        result = eval(volume1)/35.3146667;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.000578703704;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "cm")){
        result = eval(volume1)/0.0000353146667;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "yd")){
        result = eval(volume1)/27;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "galon")){
        result = eval(volume1)/0.16054365323373;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.000035314666721;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ft") && (volumekonversi2 == "L")){
        result = eval(volume1)/0.035314666721;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "ft") && (volumekonversi2 == "oz")){
        result = eval(volume1)/0.0010033978327104;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "ft")){
        result = eval(volume1)/0.028316846592392;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "m")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.000016387064;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "cm")){
        result = eval(volume1)/0.000001;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "yd")){
        result = eval(volume1)/0.76455485816778;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "galon")){
        result = eval(volume1)/0.0045460900000018;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.000001;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "m") && (volumekonversi2 == "L")){
        result = eval(volume1)/0.001;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "m") && (volumekonversi2 == "oz")){
        result = eval(volume1)/0.0000284130625;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "ft")){
        result = eval(volume1)/1728.0000000239;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "m")){
        result = eval(volume1)/610237.44094732;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "in")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "cm")){
        result = eval(volume1)/61.023744094732;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "yd")){
        result = eval(volume1)/46656.000011214;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "galon")){
        result = eval(volume1)/277.41943279173;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "ml")){
        result = eval(volume1)/61.023744094732;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "in") && (volumekonversi2 == "L")){
        result = eval(volume1)/61.023744094732;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "in") && (volumekonversi2 == "oz")){
        result = eval(volume1)/1.7338714549476;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "ft")){
        result = eval(volume1)/28316.846592392;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "m")){
        result = eval(volume1)/1000000;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "in")){
        result = eval(volume1)/16.387064;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "cm")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "yd")){
        result = eval(volume1)/764554.85816778;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "galon")){
        result = eval(volume1)/4546.0900000018;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "ml")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "cm") && (volumekonversi2 == "L")){
        result = eval(volume1)/1000;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "cm") && (volumekonversi2 == "oz")){
        result = eval(volume1)/28.4130625;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "ft")){
        result = eval(volume1)/0.037037037028647;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "m")){
        result = eval(volume1)/1.307950619;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.000021433470502393;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "cm")){
        result = eval(volume1)/0.000001307950619;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "yd")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "galon")){
        result = eval(volume1)/0.0059460612295321;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.000001307950619;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "yd") && (volumekonversi2 == "L")){
        result = eval(volume1)/0.001307950619;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "yd") && (volumekonversi2 == "oz")){
        result = eval(volume1)/0.000037162882684561;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "ft")){
        result = eval(volume1)/6.2288354591265;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "m")){
        result = eval(volume1)/219.969248299;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.0036046501499076;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "cm")){
        result = eval(volume1)/0.000219969248299;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "yd")){
        result = eval(volume1)/168.17855743451;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "galon")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.000219969248299;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "galon") && (volumekonversi2 == "L")){
        result = eval(volume1)/0.219969248299;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "galon") && (volumekonversi2 == "oz")){
        result = eval(volume1)/0.0062499999999975;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "ft")){
        result = eval(volume1)/28316.846592392;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "m")){
        result = eval(volume1)/1000000;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "in")){
        result = eval(volume1)/16.387064;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "cm")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "yd")){
        result = eval(volume1)/76455.485816778;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "galon")){
        result = eval(volume1)/4546.0900000018;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "ml")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "ml") && (volumekonversi2 == "L")){
        result = eval(volume1)/1000;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "ml") && (volumekonversi2 == "oz")){
        result = eval(volume1)/28.4130625;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "ft")){
        result = eval(volume1)/28.316846592392;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "m")){
        result = eval(volume1)/1000;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.016387064;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "cm")){
        result = eval(volume1)/0.001;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "yd")){
        result = eval(volume1)/764.55485816778;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "galon")){
        result = eval(volume1)/4.5460900000018;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.001;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "L") && (volumekonversi2 == "L")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "L") && (volumekonversi2 == "oz")){
        result = eval(volume1)/0.0284130625;
        document.getElementById("volume2").value = result;
      
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "ft")){
        result = eval(volume1)/996.61367346064;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "m")){
        result = eval(volume1)/35195.079727854;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "in")){
        result = eval(volume1)/0.57674402398545;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "cm")){
        result = eval(volume1)/35.195079727854;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "yd")){
        result = eval(volume1)/26908.569189533;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "galon")){
        result = eval(volume1)/160.00000000006;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "ml")){
        result = eval(volume1)/0.035195079727854;
        document.getElementById("volume2").value = result;
      } else if((volumekonversi1 == "oz") && (volumekonversi2 == "L")){
        result = eval(volume1)/35.195079727854;
        document.getElementById("volume2").value = result;
      }else if((volumekonversi1 == "oz") && (volumekonversi2 == "oz")){
        result = eval(volume1)*1;
        document.getElementById("volume2").value = result;
      
      }
}

function volumetambahTitik() {
    if (volume1.length == 0) {
        volume1 = "0.";
    } else {
        if (volume1.indexOf(".") == -1) {
            volume1 += ".";
        }
    }
    document.getElementById("volume1").value = volume1;
}

function volumebersihkan() {
    volume1 = "0";
    document.getElementById("volume1").value = volume1;
    document.getElementById("volume2").value = volume1;
}