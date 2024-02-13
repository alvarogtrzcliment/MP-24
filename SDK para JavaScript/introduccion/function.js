
// Paso 1, importo todos los módulos necesarios en el require

require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

  // Instancio un mapa con un mapa base de satelite

  const mapa = new Map({
    basemap:'satellite'
  })

  // Instancio una vista (ventana) para ver mi mapa

  const vista = new MapView({
    container:'viewDiv',
    map:mapa,
    zoom:3,
    center:[-9.2058,38.6940]
  })

  // Instancio la capa que quiero introducir en mi mapa

  const capaTerremotos = new FeatureLayer({
    url:'https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Strong_Earthquakes_2012_2014/FeatureServer/0'
  })

  // Añado la capa al mapa

  mapa.add(capaTerremotos)

})