require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/Color",
  "esri/rest/support/Query",
  "esri/layers/GraphicsLayer",
  "esri/widgets/LayerList",
  "esri/widgets/Sketch"

], (Map, MapView, FeatureLayer, Color, Query,GraphicsLayer,Legend, Sketch) => {
  const mapa = new Map({
    basemap: "gray-vector",
  });

  const vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });

  let renderizadorRedNatura = {
    type: "unique-value",
    field: "Tipo",
    uniqueValueInfos: [
      {
        value: "LIC",
        symbol: {
          type: "simple-fill",
          color: new Color("#cbf3f0"),
        },
      },
      {
        value: "ZEPA",
        symbol: {
          type: "simple-fill",
          color: new Color("#ffbf69"),
        },
      },
    ],
  };

  let redNaturaFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Red_Natura_2000/FeatureServer",
    renderer: renderizadorRedNatura,
    opacity: 0.8,
  });

  let plantillaPopup = {
    title: "{Nombre}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Descripci",
            label: "Descripción de la playa",
          },
          {
            fieldName: "Longitud",
            label: "Longitud de la playa",
          },
          {
            fieldName: "Anchura",
            label: "Anchura de la playa",
          },
          {
            fieldName: "Condicione",
            label: "Condiciones de la playa",
          },
        ],
      },
    ],
  };

  let playasFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer",
    popupTemplate: plantillaPopup,
    effect: "bloom(2,0.5px,0.0)",
  });

  let playasQuery = new Query({
    where:"Submarinis = 'Sí'",
    returnGeometry:true,
    outFields: ['Nombre']
  })

  let capaGraficaPlayas = new GraphicsLayer({
    title:'Playas Submarinismo'
  })

  let capaGraficaSketch = new GraphicsLayer({
    title:'Polígono Búsqueda'
  })
  let capaGraficaResultados = new GraphicsLayer({
    title:'Zonas Seleccionadas'
  })

  playasFL.queryFeatures(playasQuery)
    .then((resultados)=>{

      let features = resultados.features.map((elemento)=>{
        elemento.symbol = {
          type:'picture-marker',
          url:'https://cdn-icons-png.flaticon.com/512/3145/3145021.png',
          width:20,
          height:20
        }
        return elemento
      })

      capaGraficaPlayas.addMany(features)
    })

  let leyendaWidget = new Legend({
    view:vista
  })

  let sketchWidget = new Sketch({
    view:vista,
    layer: capaGraficaSketch
  })

  sketchWidget.on('create',(evento)=>{

    if (evento.state === 'complete' && evento.tool === 'polygon'){
      
      

      let sketchQuery = new Query({
        geometry:evento.graphic.geometry,
        returnGeometry:true,
        outFields: ['Tipo']
      })

      redNaturaFL.queryFeatures(sketchQuery)
        .then((resultados) => {

          capaGraficaResultados.removeAll()

          let entidadesConSimbologia = resultados.features.map((entidad)=>{
            entidad.symbol = {
              type:'simple-fill',
              color:[255,0,0]
            }
            return entidad
          })
      
          capaGraficaResultados.addMany(entidadesConSimbologia)

          capaGraficaSketch.removeAll()
        })

    }else{
      capaGraficaSketch.removeAll()
    }
  })

  mapa.addMany([redNaturaFL, playasFL,capaGraficaPlayas,capaGraficaSketch,capaGraficaResultados]);

  vista.ui.add(leyendaWidget,{
    position:'bottom-left'
  })
  vista.ui.add(sketchWidget,{
    position:'top-right'
  })

});
