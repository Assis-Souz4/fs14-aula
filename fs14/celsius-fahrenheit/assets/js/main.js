const frm = document.querySelector("form");
const resp = document.querySelector("p");
const valorTemp = document.querySelector("#inTemperatura").value;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const radioC = frm.celsius.checked;
  const radioF = frm.fahrenheit.checked;
  const vlrTemp = Number(frm.inTemperatura.value);
  // const vlrTempCToF = Number(frm.inTemperatura.value);

  if (radioC) {
    const calc_C = (vlrTemp - 32) * (5 / 9);
    resp.innerText = `${calc_C.toFixed(2)}ºC`
  } 
  else if (radioF) {
    calc_F = vlrTemp * (9 / 5) + 32;
    resp.innerText = `${calc_F.toFixed(2)}ºF`
  }
  

});

  //###########################
  const limpar = () => {
    clearResp.innerHTML = '';
  }