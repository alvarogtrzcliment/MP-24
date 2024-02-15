require(["esri/Map", "esri/views/MapView", "esri/widgets/BasemapGallery"], (
  Map,
  MapView,
  BasemapGallery
) => {
  const mapa = new Map({
    basemap: "dark-gray-vector",
  });

  const vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });

  const widgetBasemapGallery = new BasemapGallery({
    view:vista,
    container:'basemapWidget'
  })

  // vista.ui.add(widgetBasemapGallery,{
  //   position:'top-right'
  // })

});
