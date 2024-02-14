require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/core/reactiveUtils",
], (Map, MapView, FeatureLayer, reactiveUtils) => {

  const mapa = new Map({
    basemap: "dark-gray",
  });

  const vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });
  

  

  // Equivalente al addEventListener
  // reactiveUtils.on(() => elementoAlQueVigilo,eventoQueEspero,funcionQueVaAEjecutar)

  reactiveUtils.on(() => vista,'click',anadirCapaMapa)

  function anadirCapaMapa(){
    const capa = new FeatureLayer({
      url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ENP_actualizados/FeatureServer'
    })
    mapa.add(capa)
  }


});

