miro.onReady(() => {
  const icon24test = '<g id="Layer_3"><path class="st0" d="M8.7,11.6l-3.3,1.1c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0L2.5,4.4c0-0.1,0-0.1,0.1-0.2l5.3-1.7c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0L9,5.4" fill="none" stroke="#000000" stroke-miterlimit="10"/><path class="st0" d="M9.8,11.5l3.2,1.1c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0l2.7-8.1c0-0.1,0-0.1-0.1-0.2c0,0,0,0,0,0l-5.3-1.7c-0.1,0-0.1,0-0.2,0.1L9.4,5.4" fill="none" stroke="#000000" stroke-miterlimit="10"/><path class="st1" d="M9.2,4.9c1.5,1.9,2.8,6.7,0.1,6.7C6.1,11.6,7.5,6.9,9.2,4.9z"fill="none" stroke="#000000" stroke-miterlimit="10" stroke-linecap="round"/></g>'
  const icon24 = '<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>'
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
