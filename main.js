miro.onReady(() => {
  const icon24test = '<g id="Layer_3"><path class="st0" d="M8.7,11.6l-3.3,1.1c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0L2.5,4.4c0-0.1,0-0.1,0.1-0.2l5.3-1.7c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0L9,5.4" fill="none" stroke="#000000" stroke-miterlimit="10"/><path class="st0" d="M9.8,11.5l3.2,1.1c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0l2.7-8.1c0-0.1,0-0.1-0.1-0.2c0,0,0,0,0,0l-5.3-1.7c-0.1,0-0.1,0-0.2,0.1L9.4,5.4" fill="none" stroke="#000000" stroke-miterlimit="10"/><path class="st1" d="M9.2,4.9c1.5,1.9,2.8,6.7,0.1,6.7C6.1,11.6,7.5,6.9,9.2,4.9z"fill="none" stroke="#000000" stroke-miterlimit="10" stroke-linecap="round"/></g>'
  const icon24 = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>'
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
