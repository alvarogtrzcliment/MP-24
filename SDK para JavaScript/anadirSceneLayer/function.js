
require(["esri/Map","esri/views/SceneView","esri/layers/SceneLayer"],(Map,SceneView,SceneLayer)=>{

  const mapa = new Map({
    basemap:'dark-gray'
  })

  const vista = new SceneView({
    container:'viewDiv',
    map:mapa,

    camera:{
      heading:90,
      tilt:45,
      position:[-3.70,40.40,500]
    }


  })

  const capaEdificios = new SceneLayer({
    url:'https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer'
  })

  mapa.add(capaEdificios)

})