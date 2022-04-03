/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const divEl = document.getElementById('output');

async function fetchData() {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    generateCards(data);
  } catch (error) {
    console.log(`Some errors have occured please check your spelling, error message: ${error.message}`);
  }
}

function generateCards(arr) {
  arr.forEach((car) => {
    const string = `
            <div class="card">
                  <h2 class="cardTitle">${car.brand}</h2>
                  <p class="cardModels">Models:</p>
                  <p class="cardText">
                    ${car.models}
                  </p>
                </div>
            `;
    divEl.insertAdjacentHTML('beforeend', string);
  });
}
fetchData();
