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
  
  // Actualizar lista
  updateList();
});

// Función para actualizar la lista
function updateList() {
  // Vaciar la lista
  list.innerHTML = '';
  
  // Iterar sobre el arreglo y agregar cada elemento a la lista
  items.forEach(function(item, index) {
    const li = document.createElement('li');
    const text = document.createTextNode(`${item.value1} - ${item.value2}`);
    
    // Agregar botones de editar y borrar
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Editar';
    editButton.addEventListener('click', function() {
      editItem(index);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Borrar';
    deleteButton.addEventListener('click', function() {
      deleteItem(index);
    });
    
    li.appendChild(text);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

// Función para editar un elemento
function editItem(index) {
  // Obtener elemento del arreglo
  const item = items[index];
  
  // Actualizar valores de los inputs
  input1.value = item.value1;
  input2.value = item.value2;
  
  // Remover elemento del arreglo
  items.splice(index, 1);
  
  // Actualizar lista
  updateList();
}

