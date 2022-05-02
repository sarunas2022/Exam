/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// getting data from sever
const ENDPOINT = 'cars.json';
const output = document.getElementById('output');
const main = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        displayData(data);
    } catch (err) {
        console.log(err);
    }
};
// data from server representation
function displayData(value) {
    value.forEach((item) => {
        console.log(item);
        // creating elements and adding value
        const card = document.createElement('div');
        card.classList.add('card');
        const brandOutput = document.createElement('h1');
        const modelsOutput = document.createElement('ul');
        brandOutput.textContent = item.brand;
        // creating unordered list for each model of the brand
        const models = item.models;
        models.forEach((model) => {
            const modelsEl = document.createElement('li');
            modelsEl.textContent = model;
            modelsOutput.append(modelsEl);
        });
        // appending elements to html
        card.append(brandOutput, modelsOutput);
        output.append(card);
        // some style
        brandOutput.style.paddingBottom = '2rem';
        card.style.padding = '2rem';
        card.style.width = '14rem';
        output.style.display = 'flex';
        output.style.flexWrap = 'wrap';
        output.style.gap = '2rem';
        output.style.padding = '2rem';
    });
}
main();
