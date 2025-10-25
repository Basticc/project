// Selecciona todas las pestañas
const tabs = document.querySelectorAll('#menu-tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault(); // evita recarga de página

    // Remueve la clase activa de todas
    tabs.forEach(t => {
      t.classList.remove('bg-primary-700', 'text-white');
      t.classList.add('text-gray-700');
    });

    // Agrega la clase activa solo a la seleccionada
    tab.classList.add('bg-primary-700', 'text-white');
    tab.classList.remove('text-gray-700');
  });
});

// async function loadComponent(path, containerSelector) {
//   const container = document.querySelector(containerSelector);
//   if (!container) return;

//   try {
//     const response = await fetch(path);
//     if (!response.ok) throw new Error('No se pudo cargar el componente');
//     const html = await response.text();
//     container.innerHTML = html; // reemplaza el contenido del contenedor
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Cargar header
// loadComponent('./components/header.html', '#header-container');
