miro.onReady(() => {
  const icon24 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.6 16.03"><g><path d="M10.29,4.12c2.15,2.74,4.05,9.65.09,9.65C5.93,13.77,7.91,7,10.29,4.12Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5px" stroke-linecap="round"/></g></svg>'
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
