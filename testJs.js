function testJs() {
    let tel = document.getElementById("my-form").elements;
    for (i = 0; i < tel.length; i++) {
        if (tel[i].nodeName.toLocaleUpperCase() === "INPUT") {
            alert("le formulaire est composé de : " + tel[i].value)
        }
    }
}