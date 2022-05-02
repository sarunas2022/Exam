/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById('output');
const message = document.getElementById('message');
// click event
document.getElementById('btn').addEventListener('click', () => {
    // not showing massage "Press "Show Users" button to see users" after button is pressed
    message.style.display = 'none';
    // async function
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
            // creating elements
            const card = document.createElement('div');
            card.classList.add('card');
            const login = document.createElement('h1');
            login.classList.add('login');
            const avatar = document.createElement('img');
            // Adding values to the elements
            login.textContent = item.login;
            avatar.src = item.avatar_url;
            // appending elements to html
            card.append(login, avatar);
            output.append(card);
            // some style
            login.style.color = 'black';
            login.style.padding = '1.5rem 0';
            avatar.style.width = '28rem';
            output.style.display = 'flex';
            output.style.justifyContent = 'space-between';
            output.style.flexWrap = 'wrap';
            output.style.gap = '2rem';
        });
    }
    main();
});
