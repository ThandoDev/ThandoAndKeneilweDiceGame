document.getElementById("playBtn").addEventListener("click", function() {
    var a = Math.floor(Math.random() * 6) + 1;
    var b = Math.floor(Math.random() * 6) + 1;

    function imgGenerate(x) {
        var img = "images/dice" + x + ".png";
        return img;
    }

    document.querySelector("#img1").setAttribute("src", imgGenerate(a));
    document.querySelector("#img2").setAttribute("src", imgGenerate(b));

    document.querySelector("#img1").classList.add("roller");
    document.querySelector("#img2").classList.add("roller"); // Changed from #img1 to #img2 for the second dice

    setTimeout(function() {
        var txt = "It is a Draw!";
        if (a > b) {
            txt = "The winner is Player 1!";
        } else if (b > a) { // Changed from 'if (b > arguments)' to 'else if (b > a)'
            txt = "The winner is Player 2!";
        }

        document.querySelector(".winDec").textContent = txt;

        document.querySelector("#img1").classList.remove("roller");
        document.querySelector("#img2").classList.remove("roller"); // Changed from #img1 to #img2 for the second dice
    }, 1000);
});

