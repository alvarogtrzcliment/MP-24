
require(["esri/views/MapView","esri/WebMap"],(MapView,WebMap)=>{

  const mapaWeb = new WebMap({
    portalItem:{
      id:'e1798d03ed8a44a697cf5f2b930e4eb8'
    }
  })

  const vista = new MapView({
    container:'viewDiv',
    map:mapaWeb
  })

})