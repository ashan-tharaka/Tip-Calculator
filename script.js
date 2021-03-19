const bill = document.getElementById("bill1");
const tip = document.getElementById("bill2");
const btn = document.getElementById("btn");
const tipa = document.getElementById("bill3");
const tot = document.getElementById("bill4");

btn.addEventListener("click", cal);

function cal() {
    if (bill.value != "" && tip.value != "") {
        var total = Number(
            Number(bill.value) + Number((bill.value * tip.value) / 100)
        );

        var tipamount = (bill.value * tip.value) / 100;

        tipa.value = tipamount;
        tot.value = total;
    } else {
        alert("please fill required fields");
    }
}