/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('search').value;
    displayData(input);
});

const displayData = (value) => {
    // creating elements and adding value
    const outputEl = document.getElementById('output');
    outputEl.textContent = '';
    const toPoundEl = document.createElement('div');
    toPoundEl.className = 'outputDiv';
    toPoundEl.textContent = value * 2.246 + ' pounds';
    const toGramsEl = document.createElement('div');
    toGramsEl.className = 'outputDiv';
    toGramsEl.textContent = value / 0.001 + ' grams';
    const toOuncesEl = document.createElement('div');
    toOuncesEl.className = 'outputDiv';
    toOuncesEl.textContent = value * 35.274 + ' ounces';
    // appending elements html
    outputEl.append(toPoundEl, toGramsEl, toOuncesEl);
};
