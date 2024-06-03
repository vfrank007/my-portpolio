let message = document.getElementById("msge");
let text = document.getElementById("input");

function changeText() {
    let Type = text.value
    
    message.innerHTML = Type

    let set = input.value.toLowerCase();
    let body = document.getElementById("body");
    let back = document.getElementById("msge")

    if (set === "winter") {
        body.style.backgroundColor = "RGB(54, 69, 79)";
        msge.style.backgroundImage = "url('src/pic/7878.jpg')";
        msg.style.backgroundSize = "cover";
        msg.style.backgroundRepeat = "no-repeat";
        msg.style.color = "red";
    }

    else if (set === "summer") {
        body.style.backgroundColor = "RGB(35, 110, 150)";
        msge.style.backgroundImage = "url('src/pic/photo-1507525428034-b723cf961d3e.jpg')";
        msge.style.backgroundSize = "cover";
        msge.style.backgroundRepeat = "no-repeat";
        back.style.color = "GREEN";
    }

    else if (set === "autumn") {
        body.style.backgroundColor = "RGB(255, 165, 0)";
        msge.style.backgroundImage = "url('src/pic/HD-wallpaper-autumn-season-fallen-leaves-tree.jpg')";
        msge.style.backgroundSize = "cover";
        msge.style.backgroundRepeat = "no-repeat";
        back.style.color = "BLUE";
    }

    else if (set === "spring") {
        body.style.backgroundColor = "RGB(63, 255, 0)";
        msge.style.backgroundImage = "url('src/pic/cherry_blossoms-1024x576.jpg.optimal.jpg')";
        msge.style.backgroundSize = "cover";
        msge.style.backgroundRepeat = "no-repeat";
        back.style.color = "BLACK";
    }

    else if (set === "default") {
        body.style.backgroundColor = "RGB(255, 255, 255)";
        msge.style.backgroundImage = null
        back.style.color = "SALMON";

    }
}