require([
  "esri/Map",
  "esri/views/MapView",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/symbols/SimpleLineSymbol",
  "esri/geometry/Polyline",
  "esri/symbols/SimpleFillSymbol"
], (Map, MapView, SimpleMarkerSymbol, Graphic, GraphicsLayer,SimpleLineSymbol,Polyline,SimpleFillSymbol) => {
  const mapa = new Map({
    basemap: "dark-gray-vector",
  });

  const vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });

  // Geometría de mi punto

  const punto1 = {
    type: "point",
    longitude: -3.5,
    latitude: 40.4,
  };

  // Simbología de mi punto

  const simbologia1 = new SimpleMarkerSymbol({
    angle: 0,
    color: [255, 0, 174, 1],
    outline: {
      cap: "round",
      color: [128, 0, 255, 1],
      join: "round",
      miterLimit: 1,
      style: "short-dash-dot",
      width: 1,
    },
    path: "undefined",
    size: 10,
    style: "diamond",
    xoffset: 0,
    yoffset: 0,
  });

  // Combino la geometría con la simbología

  const puntoGraphic = new Graphic({
    geometry: punto1,
    symbol: simbologia1,
  });

  // Línea con autocasting
    
  const linea1 = {
    type:'polyline',
    paths:[
      [-3.51,40.41],
      [-3.51,40.43],
      [-3.51,40.45],
      [-3.55,40.41]
    ]
  }

  // Línea sin autocasting

  const linea2 = new Polyline({
    paths:[
      [-3.50,40.41],
      [-3.50,40.43],
      [-3.50,40.45],
      [-3.52,40.41]
    ]
  })

  // Simbología de la línea

  const simpleLineSymbol = new SimpleLineSymbol({
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  });

  // Crear el gráfico de tipo línea

  const lineaGrafico = new Graphic({
    geometry:linea1,
    symbol:simpleLineSymbol
  })

  const lineaGrafico2 = new Graphic({
    geometry:linea2,
    symbol:simpleLineSymbol
  })

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
    color: [0,122,194,1],
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

  // Cargo la capa gráfica

  const capaGrafica = new GraphicsLayer()

  // capaGrafica.addMany([puntoGraphic,lineaGrafico,lineaGrafico2])

  capaGrafica.add(puntoGraphic)
  capaGrafica.add(lineaGrafico)
  capaGrafica.add(lineaGrafico2)
  capaGrafica.add(poligonoGrafico)

  // Añadir la capa al mapa

  mapa.add(capaGrafica)

});
