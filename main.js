miro.onReady(() => {
  const icon24real = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.6 16.03"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1.5px;}.cls-2{stroke-linecap:round;}</style></defs><g id="Calque_2" data-name="Calque 2"><g id="Layer_3" data-name="Layer 3"><path class="cls-1" d="M9.63,13.69,4.85,15.27a.19.19,0,0,1-.24-.12L.76,3.5a.19.19,0,0,1,.12-.24L8.45.76a.19.19,0,0,1,.24.12l1.32,4"/><path class="cls-1" d="M11.21,13.64l4.54,1.63a.19.19,0,0,0,.24-.12L19.85,3.5a.2.2,0,0,0-.13-.24L12.15.76a.19.19,0,0,0-.24.12l-1.33,4"/><path class="cls-2" d="M10.29,4.12c2.15,2.74,4.05,9.65.09,9.65C5.93,13.77,7.91,7,10.29,4.12Z"/></g></g></svg>'
  const icon24 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.33 79.33"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:6px;}</style></defs><g id="Calque_2" data-name="Calque 2"><g id="Layer_3" data-name="Layer 3"><path class="cls-1" d="M58,77.63C53.41,71,48.72,64.09,47.35,56.16s1.55-17.23,8.82-20.69C61.46,33,68,33.87,73,30.92c6-3.51,7.94-12.15,4.8-18.37S67.44,2.76,60.47,3,46.94,6.88,42.09,11.9,34,23.25,31.42,29.74c-1.74,4.46-3.18,9.08-5.7,13.14s-6.37,7.61-11.07,8.46S4.48,49.59,3.25,45a8.35,8.35,0,0,1,2.44-8.11A9,9,0,0,1,14,34.92"/></g></g></svg>'
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Random Cards',
        svgIcon: icon24,
        positionPriority: 1,
        onClick: async () => {
          
          //Open Sidebar
          miro.board.ui.openLeftSidebar('https://mimisterio92220.github.io/randomcards/sidebar.html')

          // Show success message
          miro.showNotification('Voici les cartes Inspiration & Contexte')
        }
      }
    }
  })
})
