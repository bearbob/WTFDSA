var conv = [ 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var base = 62;


    function decodeNum( num ){
        var result = 0;
        var temp1, temp2;
        while(num.length > 0){
            temp1 = num.substring(0,1);
            temp2 = conv.indexOf(temp1);
            result = result + (temp2 * Math.pow(base, (num.length-1)));
            num = num.substring(1);
        }
        return result;
    }

    function encodeNum( num ){
        var result = "";
        var temp;
        while(num > base){
            temp = (num%base);
            //console.log("temp: "+temp+" and in array "+conv[temp]);
            result = conv[temp] + result;
            //console.log("num/base="+(num/base));
            num = Math.floor(num/base);
        }
        //last digit
        //console.log("last num: "+num+" and in array "+conv[num]);
        result = conv[num] + result;
        return result;
    }