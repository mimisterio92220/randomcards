miro.onReady(() => {
  const icon24 = '<g id="Layer_3" data-name="Layer 3"><path class="cls-1" d="M26.82,38,13.74,42.28a.53.53,0,0,1-.67-.34L2.53,10.05a.53.53,0,0,1,.33-.67L23.6,2.53a.52.52,0,0,1,.66.33l3.6,10.89" fill="none" fill-opacity="0" stroke-miterlimit="10" stroke="#000000" stroke-width="5"/><path class="cls-1" d="M31.16,37.81l12.43,4.47a.53.53,0,0,0,.67-.34L54.81,10.05a.53.53,0,0,0-.34-.67L33.74,2.53a.53.53,0,0,0-.67.33l-3.64,11"/><path class="cls-2" d="M28.63,11.74c5.9,7.49,11.09,26.42.24,26.42C16.68,38.16,22.11,19.56,28.63,11.74Z" fill="none" stroke-miterlimit="10" stroke-width="5" stroke-linecap="round"/></g>'
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
