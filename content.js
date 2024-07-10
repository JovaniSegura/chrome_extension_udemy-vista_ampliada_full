function toggleVH() {
    const body = document.body;
    const header = document.querySelector('.app--row--E-WFM.app--header--QuLOL');
    const heightLimiter = document.querySelector('.curriculum-item-view--scaled-height-limiter--lEOjL.curriculum-item-view--no-sidebar--LGmz-');
    
    body.classList.toggle('vh-expanded');
    
    if (body.classList.contains('vh-expanded')) {
      header.style.display = 'none';
      heightLimiter.style.maxHeight = '100vh !important';
    } else {
      header.style.display = '';
      heightLimiter.style.maxHeight = '80vh !important';
    }
  }
  
  function createVHButton() {
    const controlBar = document.querySelector('.shaka-control-bar--control-bar--gXZ1u');
    if (!controlBar) return;
  
    const vhButton = document.createElement('button');
    vhButton.innerHTML = '<svg aria-label="Alternar vista VH" role="img" focusable="false" class="ud-icon ud-icon-medium"><use xlink:href="#icon-expand"></use></svg>';
    vhButton.classList.add('vh-toggle-button');
    vhButton.addEventListener('click', toggleVH);
  
    controlBar.appendChild(vhButton);
  }
  
  // Observador para detectar cambios en el DOM
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector('.shaka-control-bar--control-bar--gXZ1u')) {
      createVHButton();
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Función para aplicar los estilos iniciales
  function applyInitialStyles() {
    const heightLimiter = document.querySelector('.curriculum-item-view--scaled-height-limiter--lEOjL.curriculum-item-view--no-sidebar--LGmz-');
    if (heightLimiter) {
      heightLimiter.style.maxHeight = '80vh !important';
    }
  }
  
  // Llamar a la función cuando se carga la página
  applyInitialStyles();
  
  // También podemos llamarla cuando hay cambios en el DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });