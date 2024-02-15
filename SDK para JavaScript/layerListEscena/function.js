require(["esri/WebScene", "esri/views/SceneView", "esri/widgets/LayerList"], (
  WebScene,
  SceneView,
  LayerList
) => {
  const escenaWeb = new WebScene({
    portalItem: {
      id: "6604dffad1c343c99338700729b48378",
    },
  });

  const vista = new SceneView({
    container: "viewDiv",
    map: escenaWeb,
  });

  const layerListWidget = new LayerList({
    view:vista
  })

  vista.ui.add(layerListWidget,{
    position:'bottom-right'
  })

});
