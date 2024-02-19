require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Sketch/SketchViewModel"
], (Map, MapView, Sketch, GraphicsLayer, SketchViewModel) => {
  let mapa = new Map({
    basemap: "dark-gray-vector",
  });

  let vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });

  let capaGrafica = new GraphicsLayer()

  let sketchWidget = new Sketch({
    view: vista,
    layer:capaGrafica,
    viewModel: new SketchViewModel({
      view:vista,
      layer: capaGrafica,
      polygonSymbol:{
        type:'simple-fill',
        color:[255,0,0,0.2]
      },
      pointSymbol:{
        type:'simple-marker',
        color:[0,255,0]
      },
      snappingOptions:{
        enabled:true
      }
    })
  });

  mapa.add(capaGrafica)

  vista.ui.add(sketchWidget, {
    position: "top-right",
  });
});
