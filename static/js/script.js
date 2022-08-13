console.log("Hello world");

function ageInDays() {
    let birth_year = prompt("Enter brith year bro");
    const d = new Date();
    let current_year = d.getFullYear();
    let date = (current_year - birth_year)*365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode("You are "+date+" days old");
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h3);

    var note = document.createElement('p');
    var note_text = document.createTextNode("This is not accurate though, since we are not asking for day and month... I hope you understand");
    note.setAttribute("id", "some_note");
    note.appendChild(note_text);
    document.getElementById('flex-box-result').appendChild(note);
}

function reset() {
    document.getElementById("ageInDays").remove();
    document.getElementById("some_note").remove();
}

function generate_cat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex_cat_gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}