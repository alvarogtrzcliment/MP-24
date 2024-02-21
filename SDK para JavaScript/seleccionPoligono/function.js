require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/rest/support/Query",
  "esri/layers/GraphicsLayer",
  "esri/symbols/SimpleFillSymbol",
  "esri/Graphic",
    

], (Map, MapView, FeatureLayer, Query, GraphicsLayer,SimpleFillSymbol, Graphic) => {

  let mapa = new Map({
    basemap:'satellite'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.6,40.40],
    zoom:12
  })

  let municipiosFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/muni/FeatureServer",
    opacity:0.5
  });

  let capaGraficaPoligono = new GraphicsLayer()
  let capaGraficaResultados = new GraphicsLayer()

  // Creo el polígono

  const poligono = {
    type:'polygon',
    rings:[
      [-3.53,40.412],
      [-3.53,40.43],
      [-3.53,40.44],
      [-3.57,40.45]
    ]
  }

    // Creo simbología a través de la api

    const simbologiaPoligono = new SimpleFillSymbol({
      color: [0,122,194,0.5],
      outline: {
        cap: "round",
        color: [0,122,194,1],
        join: "round",
        miterLimit: 1,
        style: "solid",
        width: 1
      },
      style: "solid"
    })
  
    // Creo el gráfico del polígono
  
    const poligonoGrafico = new Graphic({
      geometry:poligono,
      symbol:simbologiaPoligono
    })

    capaGraficaPoligono.add(poligonoGrafico)

    mapa.addMany([municipiosFL,capaGraficaPoligono])

    // Creo la Query

  let parametrosQuery = new Query({
    geometry:poligono,
    spatialReference: 'intersects',
    returnGeometry: true,
    outFields:['*']
  })

  municipiosFL.queryFeatures(parametrosQuery) // Nos devuelve una promesa
  .then((resultados)=>{
    
    let entidadesConSimbologia = resultados.features.map((entidad)=>{
      entidad.symbol = {
        type:'simple-fill',
        color:[255,0,0,0.1]
      }
      return entidad
    })

    capaGraficaResultados.addMany(entidadesConSimbologia)
  })

  mapa.add(capaGraficaResultados)


});
