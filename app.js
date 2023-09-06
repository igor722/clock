var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();


    if(h > 12){
        h = h - 12;
    }
/*
    if (h >= 11.5 && h <= 12.5){
        document.getElementById("twelve").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 12.5 && h <= 1.5){
        document.getElementById("one").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 1.5 && h <= 2.5){
        document.getElementById("two").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 2.5 && h <= 3.5){
        document.getElementById("three").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 3.5 && h <= 4.5){
        document.getElementById("four").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 4.5 && h <= 5.5){
        document.getElementById("fiveh").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 5.5 && h <= 6.5){
        document.getElementById("six").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 6.5 && h <= 7.5){
        document.getElementById("seven").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 7.5 && h <= 8.5){
        document.getElementById("eight").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 8.5 && h <= 9.5){
        document.getElementById("nine").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else if (h >= 9.5 && h <= 10.5){
        document.getElementById("tenh").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } else {
        document.getElementById("eleven").style.color = "white";
        document.getElementById("oclock").style.color = "white";
    } 

    if (m >= 2.5 && m <= 7.5){
        document.getElementById("fivem").style.color = "white";
    }
*/

//twelve o'clock

if (h == 11 && m == 58){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 11 && m == 59){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 12 && m == 00){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 12 && m == 01){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 12 && m == 02){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 12 && m == 03){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past twelve

 else if (h == 12 && m == 04){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 05){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 06){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 07){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past twelve

else if (h == 12 && m == 08){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 09){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 10){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 11){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 12){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 13){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past twelve
else if (h == 12 && m == 14){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 15){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 16){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 17){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past twelve
else if (h == 12 && m == 18){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 19){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 20){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 21){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 22){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past twelve
else if (h == 12 && m == 23){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 24){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 25){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 26){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 27){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past twelve
else if (h == 12 && m == 28){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 29){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 30){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 31){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 12 && m == 32){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to one
else if (h == 12 && m == 33){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 34){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 35){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 36){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 37){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to one
else if (h == 12 && m == 38){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 39){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 40){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 41){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 42){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to one
else if (h == 12 && m == 43){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 44){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 45){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 12 && m == 46){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to one

else if (h == 12 && m == 47){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 48){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 49){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 50){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 51){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 52){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to one

else if (h == 12 && m == 53){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 54){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 55){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 56){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 12 && m == 57){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 




//======================================================ONE=================================================

//one o'clock

else if (h == 12 && m == 58){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 12 && m == 59){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 1 && m == 00){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 1 && m == 01){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 1 && m == 02){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 1 && m == 03){
    document.getElementById("one").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past one

 else if (h == 1 && m == 04){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 05){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 06){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 07){
    document.getElementById("one").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past one

else if (h == 1 && m == 08){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 09){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 10){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 11){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 12){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 13){
    document.getElementById("one").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past one
else if (h == 1 && m == 14){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 15){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 16){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 17){
    document.getElementById("one").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past one
else if (h == 1 && m == 18){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 19){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 20){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 21){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 22){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past one
else if (h == 1 && m == 23){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 24){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 25){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 26){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 27){
    document.getElementById("one").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past one
else if (h == 1 && m == 28){
    document.getElementById("one").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 29){
    document.getElementById("one").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 30){
    document.getElementById("one").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 31){
    document.getElementById("one").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} else if (h == 1 && m == 32){
    document.getElementById("one").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to two
else if (h == 1 && m == 33){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 34){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 35){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 36){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 37){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to two
else if (h == 1 && m == 38){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 39){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 40){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 41){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 42){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to two
else if (h == 1 && m == 43){
    document.getElementById("two").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 44){
    document.getElementById("two").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 45){
    document.getElementById("two").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} else if (h == 1 && m == 46){
    document.getElementById("two").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to two

else if (h == 1 && m == 47){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 48){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 49){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 50){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 51){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 52){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to two

else if (h == 1 && m == 53){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 54){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 55){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 56){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} else if (h == 1 && m == 57){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================TWO=================================================

//two o'clock

else if (h == 1 && m == 58){
    document.getElementById("two").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 1 && m == 59){
    document.getElementById("two").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 2 && m >= 00 && m <= 03){
    document.getElementById("two").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past two

 else if (h == 2 && m >= 04 && m <= 07){
    document.getElementById("two").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past two

else if (h == 2 && m >= 08 && m <= 13){
    document.getElementById("two").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past two
else if (h == 2 && m >= 14 && m <= 17){
    document.getElementById("two").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past two
else if (h == 2 && m >= 18 && m <= 22){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past two
else if (h == 2 && m >= 23 && m <= 27){
    document.getElementById("two").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past two
else if (h == 2 && m >= 28 && m <= 32){
    document.getElementById("two").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to three
else if (h == 2 && m >= 33 && m <= 37){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to three
else if (h == 2 && m >= 38 && m <= 42){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to three
else if (h == 2 && m >= 43 && m <= 46){
    document.getElementById("three").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to three

else if (h == 2 && m >= 47 && m <= 52){
    document.getElementById("three").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to three

else if (h == 2 && m >= 53 && m <= 57){
    document.getElementById("three").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================THREE=================================================

//three o'clock

else if (h == 2 && m == 58){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 2 && m == 59){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 3 && m >= 00 && m <= 03){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past three

 else if (h == 3 && m >= 04 && m <= 07){
    document.getElementById("three").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past three

else if (h == 3 && m >= 08 && m <= 13){
    document.getElementById("three").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past three
else if (h == 3 && m >= 14 && m <= 17){
    document.getElementById("three").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past three
else if (h == 3 && m >= 18 && m <= 22){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past three
else if (h == 3 && m >= 23 && m <= 27){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past three
else if (h == 3 && m >= 28 && m <= 32){
    document.getElementById("three").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to four
else if (h == 3 && m >= 33 && m <= 37){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to four
else if (h == 3 && m >= 38 && m <= 42){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to four
else if (h == 3 && m >= 43 && m <= 46){
    document.getElementById("four").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to four

else if (h == 3 && m >= 47 && m <= 52){
    document.getElementById("four").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to four

else if (h == 3 && m >= 53 && m <= 57){
    document.getElementById("four").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================THREE=================================================

//three o'clock

else if (h == 2 && m == 58){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 2 && m == 59){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 3 && m >= 00 && m <= 03){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past three

 else if (h == 3 && m >= 04 && m <= 07){
    document.getElementById("three").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past three

else if (h == 3 && m >= 08 && m <= 13){
    document.getElementById("three").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past three
else if (h == 3 && m >= 14 && m <= 17){
    document.getElementById("three").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past three
else if (h == 3 && m >= 18 && m <= 22){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past three
else if (h == 3 && m >= 23 && m <= 27){
    document.getElementById("three").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past three
else if (h == 3 && m >= 28 && m <= 32){
    document.getElementById("three").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to four
else if (h == 3 && m >= 33 && m <= 37){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to four
else if (h == 3 && m >= 38 && m <= 42){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to four
else if (h == 3 && m >= 43 && m <= 46){
    document.getElementById("four").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to four

else if (h == 3 && m >= 47 && m <= 52){
    document.getElementById("four").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to four

else if (h == 3 && m >= 53 && m <= 57){
    document.getElementById("four").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================FOUR=================================================

//four o'clock

else if (h == 3 && m == 58){
    document.getElementById("four").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 3 && m == 59){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 4 && m >= 00 && m <= 03){
    document.getElementById("three").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past four

 else if (h == 4 && m >= 04 && m <= 07){
    document.getElementById("four").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past four

else if (h == 4 && m >= 08 && m <= 13){
    document.getElementById("four").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past four
else if (h == 4 && m >= 14 && m <= 17){
    document.getElementById("four").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past four
else if (h == 4 && m >= 18 && m <= 22){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past four
else if (h == 4 && m >= 23 && m <= 27){
    document.getElementById("four").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past four
else if (h == 4 && m >= 28 && m <= 32){
    document.getElementById("four").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.querySelector("#Capa_1").style.fill = "brown"
} 
// twenty five to five
else if (h == 4 && m >= 33 && m <= 37){
    document.getElementById("five").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to five
else if (h == 4 && m >= 38 && m <= 42){
    document.getElementById("five").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to five
else if (h == 4 && m >= 43 && m <= 46){
    document.getElementById("five").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to five

else if (h == 4 && m >= 47 && m <= 52){
    document.getElementById("five").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to five

else if (h == 4 && m >= 53 && m <= 57){
    document.getElementById("five").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================FIVE=================================================

//five o'clock

else if (h == 4 && m == 58){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 4 && m == 59){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 5 && m >= 00 && m <= 03){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past five

 else if (h == 5 && m >= 04 && m <= 07){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past five

else if (h == 5 && m >= 08 && m <= 13){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past five
else if (h == 5 && m >= 14 && m <= 17){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past five
else if (h == 5 && m >= 18 && m <= 22){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five past five
else if (h == 5 && m >= 23 && m <= 27){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past five
else if (h == 5 && m >= 28 && m <= 32){
    document.getElementById("fiveh").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to six
else if (h == 5 && m >= 33 && m <= 37){
    document.getElementById("six").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to six
else if (h == 5 && m >= 38 && m <= 42){
    document.getElementById("six").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to six
else if (h == 5 && m >= 43 && m <= 46){
    document.getElementById("six").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to six

else if (h == 5 && m >= 47 && m <= 52){
    document.getElementById("six").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to six

else if (h == 5 && m >= 53 && m <= 57){
    document.getElementById("six").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================SIX=================================================

//six o'clock

else if (h == 5 && m == 58){
    document.getElementById("six").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 5 && m == 59){
    document.getElementById("six").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 6 && m >= 00 && m <= 03){
    document.getElementById("six").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past six

 else if (h == 6 && m >= 04 && m <= 07){
    document.getElementById("six").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past six

else if (h == 6 && m >= 08 && m <= 13){
    document.getElementById("six").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past six
else if (h == 6 && m >= 14 && m <= 17){
    document.getElementById("six").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past six
else if (h == 6 && m >= 18 && m <= 22){
    document.getElementById("six").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty six past five
else if (h == 6 && m >= 23 && m <= 27){
    document.getElementById("six").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past six
else if (h == 6 && m >= 28 && m <= 32){
    document.getElementById("six").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to six
else if (h == 6 && m >= 33 && m <= 37){
    document.getElementById("seven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to six
else if (h == 6 && m >= 38 && m <= 42){
    document.getElementById("seven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to six
else if (h == 6 && m >= 43 && m <= 46){
    document.getElementById("seven").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to six

else if (h == 6 && m >= 47 && m <= 52){
    document.getElementById("seven").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to six

else if (h == 6 && m >= 53 && m <= 57){
    document.getElementById("seven").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================SEVEN=================================================

//seven o'clock

else if (h == 6 && m == 58){
    document.getElementById("seven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 6 && m == 59){
    document.getElementById("seven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 7 && m >= 00 && m <= 03){
    document.getElementById("seven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past seven

 else if (h == 7 && m >= 04 && m <= 07){
    document.getElementById("seven").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past seven

else if (h == 7 && m >= 08 && m <= 13){
    document.getElementById("seven").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past seven
else if (h == 7 && m >= 14 && m <= 17){
    document.getElementById("seven").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past seven
else if (h == 7 && m >= 18 && m <= 21){
    document.getElementById("seven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//722
else if (h == 7 && m == 22){
    document.getElementById("722").style.color = "white";
    document.querySelector(".svg-inline--fa > path:nth-child(1)").style.fill = "red";
} 
// twenty six past five
else if (h == 7 && m >= 23 && m <= 27){
    document.getElementById("seven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past seven
else if (h == 7 && m >= 28 && m <= 32){
    document.getElementById("seven").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to eight
else if (h == 7 && m >= 33 && m <= 37){
    document.getElementById("eight").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to eight
else if (h == 7 && m >= 38 && m <= 42){
    document.getElementById("eight").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to eight
else if (h == 7 && m >= 43 && m <= 46){
    document.getElementById("eight").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to eight

else if (h == 7 && m >= 47 && m <= 52){
    document.getElementById("eight").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to eight

else if (h == 7 && m >= 53 && m <= 57){
    document.getElementById("eight").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================EIGHT=================================================

//eight o'clock

else if (h == 7 && m == 58){
    document.getElementById("eight").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 7 && m == 59){
    document.getElementById("eight").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 8 && m >= 00 && m <= 03){
    document.getElementById("eight").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past eight

 else if (h == 8 && m >= 04 && m <= 07){
    document.getElementById("eight").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past eight

else if (h == 8 && m >= 08 && m <= 13){
    document.getElementById("eight").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past eight
else if (h == 8 && m >= 14 && m <= 17){
    document.getElementById("eight").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past eight
else if (h == 8 && m >= 18 && m <= 22){
    document.getElementById("eight").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty six past five
else if (h == 8 && m >= 23 && m <= 27){
    document.getElementById("eight").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past eight
else if (h == 8 && m >= 28 && m <= 32){
    document.getElementById("eight").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to nine
else if (h == 8 && m >= 33 && m <= 37){
    document.getElementById("nine").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to nine
else if (h == 8 && m >= 38 && m <= 42){
    document.getElementById("nine").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to nine
else if (h == 8 && m >= 43 && m <= 46){
    document.getElementById("nine").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to nine

else if (h == 8 && m >= 47 && m <= 52){
    document.getElementById("nine").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to nine

else if (h == 8 && m >= 53 && m <= 57){
    document.getElementById("nine").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================NINE=================================================

//nine o'clock

else if (h == 8 && m == 58){
    document.getElementById("nine").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 8 && m == 59){
    document.getElementById("nine").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 9 && m >= 00 && m <= 03){
    document.getElementById("nine").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past nine

 else if (h == 9 && m >= 04 && m <= 07){
    document.getElementById("nine").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past nine

else if (h == 9 && m >= 08 && m <= 13){
    document.getElementById("nine").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past nine
else if (h == 9 && m >= 14 && m <= 17){
    document.getElementById("nine").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past nine
else if (h == 9 && m >= 18 && m <= 22){
    document.getElementById("nine").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty six past five
else if (h == 9 && m >= 23 && m <= 27){
    document.getElementById("nine").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past nine
else if (h == 9 && m >= 28 && m <= 32){
    document.getElementById("nine").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to tenh
else if (h == 9 && m >= 33 && m <= 37){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to tenh
else if (h == 9 && m >= 38 && m <= 42){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to tenh
else if (h == 9 && m >= 43 && m <= 46){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to tenh

else if (h == 9 && m >= 47 && m <= 52){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to tenh

else if (h == 9 && m >= 53 && m <= 57){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================TEN=================================================

//tenh o'clock

else if (h == 9 && m == 58){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 9 && m == 59){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 10 && m >= 00 && m <= 03){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past tenh

 else if (h == 10 && m >= 04 && m <= 07){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past tenh

else if (h == 10 && m >= 08 && m <= 13){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past tenh
else if (h == 10 && m >= 14 && m <= 17){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past tenh
else if (h == 10 && m >= 18 && m <= 22){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty six past five
else if (h == 10 && m >= 23 && m <= 27){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past tenh
else if (h == 10 && m >= 28 && m <= 32){
    document.getElementById("tenh").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to eleven
else if (h == 10 && m >= 33 && m <= 37){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to eleven
else if (h == 10 && m >= 38 && m <= 42){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to eleven
else if (h == 10 && m >= 43 && m <= 46){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to eleven

else if (h == 10 && m >= 47 && m <= 52){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to eleven

else if (h == 10 && m >= 53 && m <= 57){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 

//======================================================ELEVEN=================================================

//eleven o'clock

else if (h == 10 && m == 58){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 10 && m == 59){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} else if (h == 11 && m >= 00 && m <= 03){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("oclock").style.color = "white";
} 

// five past eleven

 else if (h == 11 && m >= 04 && m <= 07){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

// ten past eleven

else if (h == 11 && m >= 08 && m <= 13){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//a quarter past eleven
else if (h == 11 && m >= 14 && m <= 17){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("past").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// twenty past eleven
else if (h == 11 && m >= 18 && m <= 22){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty six past five
else if (h == 11 && m >= 23 && m <= 27){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("past").style.color = "white";
} 

//half past eleven
else if (h == 11 && m >= 28 && m <= 32){
    document.getElementById("eleven").style.color = "white";
    document.getElementById("half").style.color = "white";
    document.getElementById("past").style.color = "white";
} 
// twenty five to twelve
else if (h == 11 && m >= 33 && m <= 37){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// twenty to twelve
else if (h == 11 && m >= 38 && m <= 42){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("twenty").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
//a quarter to twelve
else if (h == 11 && m >= 43 && m <= 46){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("quarter").style.color = "white";
    document.getElementById("to").style.color = "white";
    document.getElementById("a").style.color = "white";
} 
// ten to twelve

else if (h == 11 && m >= 47 && m <= 52){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("tenm").style.color = "white";
    document.getElementById("to").style.color = "white";
} 
// five to twelve

else if (h == 11 && m >= 53 && m <= 57){
    document.getElementById("twelve").style.color = "white";
    document.getElementById("fivem").style.color = "white";
    document.getElementById("to").style.color = "white";
} 


else {
    document.getElementById("half").style.color = "white";
}