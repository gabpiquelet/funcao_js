function somar() {
  alert("Você clicou no botão Somar!");

  var entrada1 = parseInt(prompt("Insira um valor"));
  var somar = parseInt(prompt("Insira um valor para somar"));

  var resultado = entrada1 + somar;

  alert("o resultado é " + resultado);
}

function subtrair() {
  alert("Você clicou no botão Subtrair!");

  var entrada1 = prompt("Insira um valor");
  var diminuir = prompt("Valor para subtrair");

  var resultado = entrada1 - diminuir;

  alert("o resultado é " + resultado);
}

function multiplicar() {
  alert("Você clicou no botão Multiplicar!");

  var valor1 = prompt("Insira um valor");
  var multiplicar = prompt("Insira valor para multiplicar");

  var resultado = valor1 * multiplicar;

  alert("o resultado é " + resultado);
}

function dividir() {
  alert("Você clicou no botão Dividir!");

  var valor1 = prompt("Insira um valor");
  var dividir = prompt("Insira valor para dividir");

  var resultado = valor1 * dividir;

  alert("o resultado é " + resultado);
}

function bhaskara() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  var multiplica = 4 * a * c;
  var quad = b * b;
  var x = quad - multiplica;
  var raiz = Math.sqrt(x);

  var y1 = (-b + raiz) / (2 * a);
  var y2 = (-b - raiz) / (2 * a);

  alert(y1 + " e " + y2);
}
