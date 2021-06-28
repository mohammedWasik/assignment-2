const quotes = [
    "\"My mother always used to say: The older you get, the better you get, unless you’re a banana.\"",
    "\"Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.\"",
    "\"Clothes make the man. Naked people have little or no influence in society.\"",
    "\"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.\"",
    "\"When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.\"",
    "\"I want my children to have all the things I couldn’t afford. Then I want to move in with them.\"",
    "\"Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.’\"",
    "\"I used to sell furniture for a living. The trouble was, it was my own.\"",
    "\"Common sense is like deodorant. The people who need it most never use it.\"",
    "\"A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted by a bargain.\"",
    "\"I’m not good at the advice. Can I interest you in a sarcastic comment?\"",
    "\"I’m sure wherever my Dad is, he’s looking down on us. He’s not dead, just very condescending.\"",
    '"তুঁই হন্ডে যঁর?"'
]


var randomQuote = Math.floor(Math.random() * (quotes.length));
//console.log(quotes[randomQuote]);

document.getElementById("quotebox").innerHTML = quotes[randomQuote];


/* changing color quotes*/
function id1change() {
    document.getElementById('quote').style.backgroundColor = "#78DEC7";
    document.getElementById('quote').style.border = "3px solid #0A0A15";
    document.getElementById('quotebox').style.fontStyle = "italic";
    document.getElementById('quotebox').style.fontFamily = 'Inconsolata';
}

function id2change() {
    document.getElementById('quote').style.backgroundColor = "#5E454B";
    document.getElementById('quote').style.border = "3px dotted #0A0A15";
    document.getElementById('quotebox').style.fontWeight = "bolder";
    document.getElementById('quotebox').style.fontStyle = "normal";
    document.getElementById('quotebox').style.fontFamily = 'Viaoda Libre';


}

function id3change() {
    document.getElementById('quote').style.backgroundColor = "#F54748";
    document.getElementById('quote').style.border = "3px solid #0c6340";
    document.getElementById('quotebox').style.fontWeight = "bold";
    document.getElementById('quotebox').style.fontStyle = "italic";
    document.getElementById('quotebox').style.fontFamily = 'Inconsolata';

}

function id4change() {
    document.getElementById('quote').style.backgroundColor = "#99154E";
    document.getElementById('quote').style.border = "3px solid #0E4E6A";
    document.getElementById('quotebox').style.fontStyle = "normal";
    document.getElementById('quotebox').style.fontStyle = "normal";
    document.getElementById('quotebox').style.fontFamily = 'Big Shoulders Stencil Display';

}


var form = document.getElementById('form');

function convert() {
    var x = document.getElementById("numberfield").value;
    var choice = document.getElementById("choice").value;

    if (choice == 'kg') {
        console.log("in kg " + choice);
        console.log(x);
        console.log(x / 2.205);
        document.getElementById("answer").innerText = (x / 2.205).toFixed(3) + "Kilograms";
    } else {
        console.log("in lb " + choice);
        console.log(x);
        console.log(x * 2.2046);
        document.getElementById("answer").innerText = (x * 2.2046).toFixed(3) + "Pounds";

    }
    return false;
};


/* math.html*/

function mathConverter(series) {
    const ar = series.split(',');
    const arr = ar.map(function(x) {
        return parseInt(x, 10);
    });
    console.log(arr);
    var sum = arr.reduce(
        function(a, b) {
            return a + b;
        });
    document.getElementById("Max").innerHTML = Math.max(...arr);
    document.getElementById("Min").innerHTML = Math.min(...arr);
    document.getElementById("Sum").innerHTML = sum;
    document.getElementById("Average").innerHTML = sum / arr.length;
    document.getElementById("ReverseOrder").innerHTML = arr.reverse();

};


function resetP() {
    document.getElementById("Max").innerHTML = "";
    document.getElementById("Min").innerHTML = "";
    document.getElementById("Sum").innerHTML = "";
    document.getElementById("Average").innerHTML = "";
    document.getElementById("ReverseOrder").innerHTML = "";
    return false;
}

/*part3333333 */

function clearP() {
    document.getElementById("magictext").value = "";
}




var vaue = 0;

function transformtxt() {

    const arr = document.getElementById("magictext").value;
    // for (const x of arr) {
    //     if (x == x.replace(/[^a-zA-Z]/g, "").toLowerCase()) {
    //         vaue = 0;
    //         console.log(x.replace(/[^a-zA-Z]/g, "").toLowerCase());
    //         // console.log(x + " " + vaue + " lower ase");
    //     } else if (function isLetter(x) {
    //             return x.length == 1 && x.match(/[a - zA - z., & ]/g);
    //         }) {
    //         vaue = 1;
    //         console.log(x + " " + vaue + " upper ase");
    //     }
    // }
    // console.log(vaue);

    if (vaue == 0) {
        document.getElementById("magictext").value = arr.toUpperCase();
        vaue = 1;
        // console.log("this is upperwala");
    } else {
        document.getElementById("magictext").value = arr.toLowerCase();
        vaue = 0;
        // console.log("this is downwalal");
    }
    //console.log(vaue);
}

function dellines() {
    var arr = document.getElementById("magictext").value.split('\n');
    //console.log(arr);
    var temp = [""];
    var x = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim() != "") {
            temp[x] = arr[i].trim();
            x++;
        }
    }
    temp = temp.join('\n');
    document.getElementById("magictext").value = temp;
}

function addnumber() {
    var arr = document.getElementById("magictext").value.split('\n');
    //console.log(arr);
    var temp = [];
    var x = 0;

    for (var i = 0; i < arr.length; i++) {

        temp[x] = (i + 1) + ". " + arr[i];
        x++;

    }
    temp = temp.join('\n');
    document.getElementById("magictext").value = temp;
}

function shuffle() {
    let arr = document.getElementById("magictext").value.split('\n');
    console.log(arr);
    arr.sort(() => Math.random() - 0.5);
    console.log(arr);
    var temp = [];
    var x = 0;

    for (var i = 0; i < arr.length; i++) {

        temp[x] = arr[i];
        x++;

    }
    temp = temp.join('\n');
    document.getElementById("magictext").value = temp;

}

function sortt() {
    let arr = document.getElementById("magictext").value.split('\n');
    //console.log(arr);
    arr.sort();
    //console.log(arr);
    var temp = [];
    var x = 0;

    for (var i = 0; i < arr.length; i++) {

        temp[x] = arr[i];
        x++;

    }
    temp = temp.join('\n');
    document.getElementById("magictext").value = temp;

}

function rsortt() {
    let arr = document.getElementById("magictext").value.split('\n');
    //console.log(arr);
    arr.reverse();
    //console.log(arr);
    var temp = [];
    var x = 0;

    for (var i = 0; i < arr.length; i++) {

        temp[x] = arr[i];
        x++;

    }
    temp = temp.join('\n');
    document.getElementById("magictext").value = temp;

}