//Votre code ci dessous
let cat = document.getElementById('cat-pic');

function test () {
    document.getElementById('cat-chat').innerHTML = 'Ron ron';
}

cat.addEventListener('click', function (){
    test();
});

