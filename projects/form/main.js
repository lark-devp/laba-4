function hello(){
    let nameInput= document.getElementById("name");
    let surnameInput = document.getElementById("surname");
    let nameValue = nameInput.value;
    let surnameValue = surnameInput.value;

    if (nameValue != "" && surnameValue != 0) {
        var resultElement = document.getElementById("result");
        resultElement.textContent = "Здравствуйте, " + nameValue + " " + surnameValue + "!";
    } else {
        alert("Вы не заполнили поля!");
    } 
}