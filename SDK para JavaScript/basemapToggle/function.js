require(["esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle"], (
  Map,
  MapView,
  BasemapToggle
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

  const basemapToggleWidget = new BasemapToggle({
    view:vista,
    nextBasemap:'topo-vector'
  })

  vista.ui.add(basemapToggleWidget,{
    position:'top-right'
  })

});
