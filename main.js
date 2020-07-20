miro.onReady(() => {
  const icon24 = <g id="Layer_3" data-name="Layer 3"><path d="M9.63,13.69,4.85,15.27a.19.19,0,0,1-.24-.12L.76,3.5a.19.19,0,0,1,.12-.24L8.45.76a.19.19,0,0,1,.24.12l1.32,4"/><path d="M11.21,13.64l4.54,1.63a.19.19,0,0,0,.24-.12L19.85,3.5a.2.2,0,0,0-.13-.24L12.15.76a.19.19,0,0,0-.24.12l-1.33,4"/><path d="M10.29,4.12c2.15,2.74,4.05,9.65.09,9.65C5.93,13.77,7.91,7,10.29,4.12Z"/></g>
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
