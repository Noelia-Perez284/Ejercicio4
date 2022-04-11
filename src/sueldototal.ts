let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inpuntSueldo = <HTMLInputElement>document.getElementById("Sueldo");
var total = <HTMLElement>document.getElementById("total");

btnEnviar.addEventListener("click", () => {
  let sueldo: number = Number(inpuntSueldo.value);

  if (sueldo > 0 && sueldo <= 15000) {
    let porcentaje1: number = sueldo * 0.2;
    let aumento1 = sueldo + porcentaje1;
    total.innerHTML = "Monto de sueldo actualizado es " + aumento1;
  } else if (sueldo >= 15001 && sueldo <= 20000) {
    let porcentaje2: number = sueldo * 0.15;
    let aumento2 = sueldo + porcentaje2;
    total.innerHTML = "Monto de sueldo actualizado es " + aumento2;
  } else if (sueldo >= 20001 && sueldo <= 25000) {
    let porcentaje3: number = sueldo * 0.05;
    let aumento3 = sueldo + porcentaje3;
    total.innerHTML = "Monto de sueldo actualizado es " + aumento3;
  } else {
    total.innerHTML = "Monto de sueldo actualizado es " + sueldo;
  }
});
