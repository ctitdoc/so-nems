import * as wasm from "so-nems";



const TpTest = document.getElementById("TpTest");

TpTest.addEventListener("click", event => {
    wasm.greet();

    wasm.test_dom();
})


