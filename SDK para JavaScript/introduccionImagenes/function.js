require(["esri/WebMap",
"esri/views/MapView",
"esri/layers/ImageryTileLayer"],(WebMap,MapView,ImageryTileLayer)=>{

  let mapa = new WebMap({
    portalItem:{
      id:"c7e9ff9174804224b8a44054b32d7db4"
    }
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-16.44,28.38],
    zoom:10
  })

  let incendioITL = new ImageryTileLayer({
    url:"https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/ArcGIS/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
    effect:"brightness(400%) saturate(150%)",
    bandIds:[3,2,1]
  })

  mapa.add(incendioITL)

  document.getElementById('geologia').addEventListener('click',()=>{

    console.log(incendioITL.bandIds)

    if(incendioITL.bandIds[0] === 3){
      incendioITL.bandIds = [11,10,1]
    }else{
      incendioITL.bandIds = [3,2,1]
    }
  
  })





})