/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.getElementById('btn__element').addEventListener('click', clickCounter);
let clicks = 0;
function clickCounter() {
    clicks += 1;
    const displayClicks = document.getElementById('btn__state');
    displayClicks.textContent = clicks;
}
