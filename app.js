// Crear arreglo vacío
let items = [];

// Obtener elementos del DOM
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addButton = document.getElementById('add-button');
const list = document.getElementById('list');

// Agregar evento de clic al botón
addButton.addEventListener('click', function() {
  // Obtener valores de los inputs
  const value1 = input1.value;
  const value2 = input2.value;
  
  // Crear objeto con los valores
  const item = {
    value1: value1,
    value2: value2
  };
  
  // Agregar objeto al arreglo
  items.push(item);
  
  // Limpiar inputs
  input1.value = '';
  input2.value = '';
  
  