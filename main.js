miro.onReady(() => {
  const icon24 = https://mimisterio92220.github.io/randomcards/Logo.svg
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
