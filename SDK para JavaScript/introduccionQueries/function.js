require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/rest/support/Query",
  "esri/layers/GraphicsLayer"
], (Map, MapView, FeatureLayer,Query,GraphicsLayer) => {
  let mapa = new Map({
    basemap: "topo-vector",
  });

  let vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [3.5, 40],
    zoom: 5,
  });

  let municipiosFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/muni/FeatureServer",
  });

  mapa.add(municipiosFL);

  // Parámetros de mi pregunta

  let parametrosQuery = new Query({
    where:"CODNUT1 = 'ES3'",
    returnGeometry:true,
    outFields:['*']
  })

  let capaGrafica = new GraphicsLayer()

  municipiosFL.queryFeatures(parametrosQuery)
    .then((resultados)=>{

      // Este método nos devuelve un Feature Set

      let features = resultados.features.map((entidad)=>{
        entidad.symbol = {
          type:'simple-fill',
          color:'red'
        }

        return entidad
      })

      capaGrafica.addMany(features)

      mapa.add(capaGrafica)

    })
    .catch()

});
