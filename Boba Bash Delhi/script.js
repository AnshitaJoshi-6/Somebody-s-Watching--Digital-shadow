function showScreen(number) {
    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.add("hidden");
    });
    document.getElementById("screen" + number)
        .classList.remove("hidden");
}


function showScreen2() {
    showScreen(2);
}

function showScreen3() {
    showScreen(3);
}

function showScreen4() {
    showScreen(4);
}

function showScreen5() {
    showScreen(5);
}

function showScreen6() {
    showScreen(6);
}

function showScreen7() {
    showScreen(7);
}

function showScreen8() {
    showScreen(8);
}


function showInfo(text) {
    document.getElementById("infoText").textContent = text;
    document.getElementById("infoBox")
        .classList.remove("hidden");
}


function exitWebsite() {
    document.getElementById("exitMessage").textContent =
        "Nice try.";
}