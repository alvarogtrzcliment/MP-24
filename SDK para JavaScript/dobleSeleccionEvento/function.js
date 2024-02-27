require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/rest/support/Query",
  "esri/layers/GraphicsLayer"
],(Map,MapView,FeatureLayer,Query,GraphicsLayer)=>{

  let mapa = new Map({
    basemap:"topo-vector"
  })

  let vista = new MapView({
    container:"viewDiv",
    map:mapa,
    center:[-3.5,40.40],
    zoom:5
  })

  let provinciasFL = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Prov/FeatureServer"
  })

  let ferrocarrilesFL = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RedFerrocarrilesIGN/FeatureServer/6"
  })

  let capaGraficaResultados = new GraphicsLayer()

  vista.on('click',(evento)=>{
    
    let parametrosQueryProvincia = new Query({
      geometry:evento.mapPoint,
      spatialRelationship:'intersects',
      returnGeometry:true,
      outFields:[]
    })

    provinciasFL.queryFeatures(parametrosQueryProvincia)
      .then((resultadosProvincias)=>{

        resultadosProvincias.features.map((provincia)=>{

          let parametrosQueryFerrocarriles = new Query({
            geometry:provincia.geometry,
            spatialRelationship:'intersects',
            returnGeometry:true,
            outFields:[]
          })

          ferrocarrilesFL.queryFeatures(parametrosQueryFerrocarriles)
            .then((resultadosFerrocarriles)=>{

              let lineasConSimbologia = resultadosFerrocarriles.features.map((lineas) => {
                lineas.symbol = {
                  type:'simple-line',
                  color:'blue'
                }
                return lineas
              })

              capaGraficaResultados.addMany(lineasConSimbologia)
              
              mapa.add(capaGraficaResultados)
            })
        })
      })
  })
})