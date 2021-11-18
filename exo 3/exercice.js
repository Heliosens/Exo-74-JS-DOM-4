let libButton = document.getElementById('lib-button');

let libIt = function() {
    let noun = document.getElementById('noun').value;
    let adj = document.getElementById('adjective').value;
    let pers = document.getElementById('person').value;

    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = noun + " " + adj + " " + pers;

};
libButton.addEventListener('click', libIt);

