require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer",
], (Map, MapView, Search, FeatureLayer) => {
  let mapa = new Map({
    basemap: "topo-vector",
  });

  let vista = new MapView({
    container: "viewDiv",
    map: mapa,
    zoom: 5,
  });

  let capaHospitales = new FeatureLayer({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer'
  })

  console.log(capaHospitales)

  let widgetSearch = new Search({
    view: vista,
    maxSuggestions: 3,

    // Añadir una capa para utilizar como localizador

    sources:[{
      layer:capaHospitales,
      searchFields:["NOMBRE","PROVINCIAS"],
      suggestionTemplate:"{NOMBRE} - {PROVINCIAS}",
      exactMatch:false,
      outFields:['*'],
      placeholder:'Ejemplo: Hospital de Leza',
      name:'Hospitales',
      resultSymbol:{
        type:'simple-marker',
        color:[119,158,203,0.9],
        style:'circle',
        outline:{
          color:'white',
          width:1
        }
      }
    }]

  });

  vista.ui.add(widgetSearch, {
    position: "top-right",
  });
});
