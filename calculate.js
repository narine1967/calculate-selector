
function calc() {

let n1 = parseFloat(document.getElementById("n1").value);
let n2 = parseFloat(document.getElementById("n2").value);
let oper = document.getElementById("operator").value;


if (oper === "+") {
    document.getElementById("resalt").value = n1 + n2;
}
if (oper === "-") {
    document.getElementById("resalt").value = n1 - n2;
}
if (oper === "/") {
    document.getElementById("resalt").value = n1 / n2;
}
if (oper === "*") {
    document.getElementById("resalt").value = n1 * n2;
}
if (oper === "%") {
    document.getElementById("resalt").value = n1 % n2;
}


}