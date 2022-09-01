function onClickHandler(){
let tipPer = document.getElementById('tip-percentage').value;
console.log(tipPer);
let tipAmt = document.getElementById('tip-amount').value;
console.log(tipAmt);
let billamout = document.getElementById('bill-amount').value;
let result = parseFloat(tipAmt) + parseFloat(billamout);
console.log(result);
document.getElementById('total-bill').value = result;
if(tipPer == 0 || tipPer==null || tipAmt== 0 || tipAmt == null){
    document.getElementById('alldata').innerHTML = "enter all the values correctly";
}else{
    document.getElementById('alldata').innerHTML = "Here's Your BILL";
}
}
function onInputHandler(){
   let tipPer = parseFloat(document.getElementById('tip-percentage').value);
   let billamout = parseFloat(document.getElementById('bill-amount').value);
   let tipAmt = document.getElementById('tip-amount');
tipAmt.value = (tipPer*billamout)/100;
}
function onInputforbill(){
    // let tipPer = parseInt(document.getElementById('tip-percentage').value);
    // let tipAmt = parseInt(document.getElementById('tip-amount').value);
    // if(tipPer == 0 || tipAmt== 0){
    //     document.getElementById('alldata').innerHTML = "enter all the values correctly";
    //     document.getElementById('btn').style.border = "4px solid white";
    //     document.getElementById('btn').disabled = true;
    // }else{
    //     document.getElementById('alldata').innerHTML = "value entered";
        
    //     document.getElementById('btn').disabled = false;
    // }
}