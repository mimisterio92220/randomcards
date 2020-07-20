miro.onReady(() => {
  const icon24 = '<g id="Layer_3"><path d=""M9.63,13.69,4.85,15.27a.19.19,0,0,1-.24-.12L.76,3.5a.19.19,0,0,1,.12-.24L8.45.76a.19.19,0,0,1,.24.12l1.32,4" fill="none" stroke="#000000" stroke-miterlimit="10px" stroke-width="1.5px"/></g>'
  const icon24test = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>'
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
