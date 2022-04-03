/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

{
}

const outputEl = document.getElementById('output');
const inputEl = document.getElementById('search');
const btnEl = document.getElementById('submit-btn');

btnEl.addEventListener('click', (e) => {
  e.preventDefault();
  return calculate(outputEl, inputEl);
});

function calculate(dest, input) {
  dest.innerHTML = '';
  const lb = input.value * 2.2046;
  const g = input.value / 0.001;
  const oz = input.value * 35.274;
  const string = `
    <div class="lb">
        <h2>${input.value} kg = ${lb} svarai(lb)</h2>
    </div>
    <div class="g">
        <h2>${input.value} kg = ${g} gramai(g)</h2>
    </div>
    <div class="oz">
        <h2>${input.value} kg = ${oz} uncijos(oz)</h2>
    </div>
  `;
  dest.insertAdjacentHTML('beforeend', string);
  input.value = '';
}
