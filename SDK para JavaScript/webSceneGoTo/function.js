require(["esri/WebScene", "esri/views/SceneView", "esri/Camera"], (
  WebScene,
  SceneView,
  Camera
) => {
  const escena = new WebScene({
    portalItem: {
      id: "6db1a1902df944f2b434dd538fa70b24",
    },
  });

  let camaraInicial = new Camera({
    heading: 90,
    tilt: 45,
    position: [8.54, 47.37, 2000],
  });

  let camara1 = new Camera({
    heading: 180,
    tilt: 30,
    position: [8.54, 47.5, 2000],
  });

  let camara2 = new Camera({
    heading: 60,
    tilt: 30,
    position: [8.43, 47.45, 2000],
  });

  let camara3 = new Camera({
    heading: 30,
    tilt: 40,
    position: [8.58, 47.54, 2000],
  });

  let camara4 = new Camera({
    heading: 270,
    tilt: 50,
    position: [8.5, 47.34, 2000],
  });

  const vista = new SceneView({
    container: "viewDiv",
    map: escena,
    camera: camaraInicial,
  });

  document.querySelector("#cam1").addEventListener("click", buttonHandlerCam1);

  function buttonHandlerCam1() {
    vista.goTo(camara1);
    cambiarBorde("#cam1");
  }

  document.querySelector("#cam2").addEventListener("click", buttonHandlerCam2);

  function buttonHandlerCam2() {
    vista.goTo(camara2);
    cambiarBorde("#cam2");
  }

  document.querySelector("#cam3").addEventListener("click", buttonHandlerCam3);

  function buttonHandlerCam3() {
    vista.goTo(camara3);
    cambiarBorde("#cam3");
  }

  document.querySelector("#cam4").addEventListener("click", buttonHandlerCam4);

  function buttonHandlerCam4() {
    vista.goTo(camara4);
    cambiarBorde("#cam4");
  }

  function cambiarBorde(selectorCamara) {
    document.querySelectorAll("button").forEach((button) => {
      button.style.borderColor = "rgba(100, 215, 194, 0.256)";
    });
    document.querySelector(selectorCamara).style.borderColor =
      "rgba(179, 0, 255, 1)";
  }
});
