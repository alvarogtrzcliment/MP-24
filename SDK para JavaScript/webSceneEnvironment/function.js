require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/views/3d/environment/SnowyWeather",
], (WebScene, SceneView, SnowyWeather) => {
  const escena = new WebScene({
    portalItem: {
      id: "6db1a1902df944f2b434dd538fa70b24",
    },
  });

  const vista = new SceneView({
    container: "viewDiv",
    map: escena,
    camera: {
      heading: 90,
      tilt: 45,
      position: [8.54, 47.37, 2000],
    },
  });
  
  document.querySelector("button").addEventListener("click", buttonHandler);

  function buttonHandler() {
    if (vista.environment.weather.type === "sunny") {
      vista.environment.weather = {
        type: "snowy",
      };
    } else {
      vista.environment.weather = {
        type: "sunny",
      };
    }
  }
});
