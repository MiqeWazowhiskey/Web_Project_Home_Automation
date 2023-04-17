
//sliders
const sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
  slider.addEventListener('input', function() {
    const lightValue = document.querySelector(`#light-value-${slider.dataset.id}`);
    lightValue.textContent = slider.value;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.querySelector('.header');
  const headerTemplate = `
    <header class="header">
      <h1 class="logo">Logo</h1>

      <button class="pp">
        <p>P</p>
      </button> 
      ${fetch('header.html')
        .then(response => response.text() )
        .then(data => data)
      }
    </header>
  `;

  headerContainer.innerHTML = headerTemplate;
});
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.querySelector('.room');
  const headerTemplate = `
      <div class="rooms">
          <button class="roomElement"><a href="./producer_index.html"><p >Room 1</p> </a></button>
          <button class="roomElement"><a href="./producer_room2.html"><p >Room 2</p> </a></button>
          <button class="roomElement"><a href="./producer_room3.html"><p >Room 3</p> </a></button>
          <button class="roomElement"><a href="./producer_room4.html"><p >Room 4</p> </a></button>
      </div>
      ${fetch('header.html')
        .then(response => response.text() )
        .then(data => data)
      }
  `;

  headerContainer.innerHTML = headerTemplate;
});
