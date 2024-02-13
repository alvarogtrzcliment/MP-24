
require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

  const mapa = new Map({
    basemap:'topo-vector'
  })

  const viewMap = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.68,40.45],
    zoom:3
  })

  const riosFL = new FeatureLayer({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RiosPrincipales/FeatureServer'
  })

  mapa.add(riosFL)

})