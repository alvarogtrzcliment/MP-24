require(["esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

  let mapa = new Map({
    basemap:'gray-vector'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.5,40.4],
    zoom:5
  })

  let renderizadorHospitales = {
    type:'simple',
    symbol:{
      type:'picture-marker',
      url:'https://64.media.tumblr.com/fe8e8a77dbaa5e4e88e0c452ef181410/1cffe31ec01f4b82-fb/s500x750/44a30f195ff12557d0ee27ce4c9b4ca7e216f4aa.gif',
      width:60,
      height:60,
    }
  }

  let hospitalesFL = new FeatureLayer ({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer',
    renderer:renderizadorHospitales
  })

  mapa.add(hospitalesFL)

})