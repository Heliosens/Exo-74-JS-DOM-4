let catPic = document.getElementById("cat-pic");

let onCatClick = function(e) {
    let stashePic = document.getElementById("mustache-pic");
    let x = e.clientX;
    let y = e.clientY;
    console.log(x);
    console.log(y);
    stashePic.style.top = y - 20 + "px";
    stashePic.style.left = x - 50 + "px";
};

catPic.addEventListener("click", onCatClick);

