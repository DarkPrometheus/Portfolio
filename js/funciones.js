/* Tabs */
let btnCsharp = document.getElementById('btnCsharp');
let btnJs = document.getElementById('btnJs');

let csharpCode = document.getElementById("csharpCode");
let jsCode = document.getElementById("jsCode");

let csharp = true, js = false;
btnCsharp.addEventListener('click', function () {
    if (js) {
        btnCsharp.className = 'active';
        btnJs.className = '';

        csharpCode.style = '';
        jsCode.style = 'display: none';

        js = false;
        csharp = true;
    }
});
btnJs.addEventListener('click', function () {
    if (csharp) {
        btnCsharp.className = '';
        btnJs.className = 'active';

        csharpCode.style = 'display: none';
        jsCode.style = '';

        js = true;
        csharp = false;
    }
});

/* Ojo */
let codeContainer = document.getElementById('codeContainer');
let closedEye = document.getElementById("closedEye");
let eye = document.getElementById("eye");
let show = false;

closedEye.addEventListener('click', function () {
    codeContainer.className = "example";
    closedEye.style = "display: none";
    eye.style = "";
});
eye.addEventListener('click', function () {
    codeContainer.className = "example hideCode";
    closedEye.style = "";
    eye.style = "display: none";
});

/* Copiar al porta papeles */
let csharpCopy = document.getElementById('csharpCopy');
let jsCopy = document.getElementById('jsCopy');

csharpCopy.addEventListener('click', function () {
    copiarAlPortapapeles(csharpCode.innerText);
});
jsCopy.addEventListener('click', function () {
    copiarAlPortapapeles(jsCode.innerText);
});

function copiarAlPortapapeles(texto) {
    const textArea = document.createElement('textarea');
    textArea.textContent = texto;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('Codigo copiado al portapapeles!');
}
