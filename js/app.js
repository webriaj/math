function rootCal(){
    let sqrValue = document.getElementById('sqr').value;
    let result = document.getElementById('sqrres');
    let final = Math.sqrt(sqrValue);
    result.innerHTML = (final).toFixed(2);
}
function sqrCal(){
    let value = document.getElementById('rt').value;
    let resultTwo = document.getElementById('rtres');
    let power = document.getElementById('sqvalue').value;
    resultTwo.innerHTML = Math.pow(value,power);
}
function clr(){
    
}