document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('nome-form').addEventListener('submit', function () {
    const nome = document.getElementById('nome').value;
    alert(`Bem vindo ${nome}!`);
  });
});
