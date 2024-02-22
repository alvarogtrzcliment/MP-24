require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/rest/support/Query",
  "esri/layers/GraphicsLayer",
  "esri/core/reactiveUtils"
], (Map, MapView, FeatureLayer,Query,GraphicsLayer,reactiveUtils) => {
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

  let capaGrafica = new GraphicsLayer()

  // vista.on("click",function(evento){
    
  //   console.log(evento)

  //   // Configuro mi pregunta

  //   let parametrosQuery = new Query({
  //     geometry: evento.mapPoint,
  //     spatialRelationship: "intersects",
  //     returnGeometry: true,
  //     outFields:['*']
  //   })

  //   municipiosFL.queryFeatures(parametrosQuery)
  //     .then((resultados) => {

  //       capaGrafica.removeAll()

  //       let features = resultados.features.map((elemento)=>{
  //         elemento.symbol = {
  //           type:'simple-fill',
  //           color:[255,0,0]
  //         }

  //         return elemento
  //       })

  //       capaGrafica.addMany(features)
        
  //     })
    
  // })

  reactiveUtils.on(()=>vista,'click',function(evento){

    let parametrosQuery = new Query({
      geometry:evento.mapPoint,
      spatialReference: 'intersects',
      returnGeometry: true,
      outFields:[]
    })

    municipiosFL.queryFeatures(parametrosQuery)
      .then((resultados)=>{
        console.log(resultados)
        capaGrafica.removeAll()
        
        let features = resultados.features.map((elemento)=>{
          elemento.symbol = {
            type:'simple-fill',
            color:[255,0,0]
          }

          return elemento
        })

        capaGrafica.addMany(features)
      })

  })

  mapa.add(capaGrafica)

});
