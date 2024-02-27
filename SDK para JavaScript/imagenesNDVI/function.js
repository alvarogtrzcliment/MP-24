require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/ImageryTileLayer",
  "esri/layers/support/RasterFunction",
  "esri/layers/support/rasterFunctionConstants",

], (Map, MapView, ImageryTileLayer, RasterFunction,rasterFunctionConstants) => {

  let mapa = new Map({
    basemap: "topo-vector",
  });

  let vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-16.44, 28.38],
    zoom: 10,
  });

  let ndvi = new RasterFunction({
    functionName:'NDVI',
    functionArguments:{
      visibleBandID:3,
      infraredBandID:7
    }
  })

  let colormap = new RasterFunction({
    functionName:'Colormap',
    functionArguments:{
      colormapName:rasterFunctionConstants.colormapName.NDVI3,
      raster:ndvi
    }
  })

  let incendioITL = new ImageryTileLayer({
    url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/ArcGIS/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
    effect: "saturate(150%)",
  });

  let boton = document.getElementById('geologia')
  boton.addEventListener('click',()=>{
    incendioITL.rasterFunction = colormap
  })

  mapa.add(incendioITL);
});
