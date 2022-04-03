/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn');
const divEl = document.getElementById('output');

showUsersBtn.addEventListener('click', fetchData);

async function fetchData() {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    generateCards(data, divEl);
  } catch (error) {
    console.log(`Something went wrong. ERROR MESSAGE: ${error.message}`);
  }
}

function generateCards(dataObj, dest) {
  dest.innerHTML = '';
  dataObj.forEach((user) => {
    const string = `
        <div class="card">
            <h2 class="login">${user.login}</h2>
            <img src="${user.avatar_url}" alt="Picture of ${user.login}" />
        </div>
        `;
    dest.insertAdjacentHTML('beforeend', string);
  });
}
