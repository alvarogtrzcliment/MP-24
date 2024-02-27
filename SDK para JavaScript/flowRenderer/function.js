require(["esri/Map",
"esri/views/MapView",
"esri/layers/ImageryTileLayer"],(Map,MapView,ImageryTileLayer)=>{

  let mapa = new Map({
    basemap:"dark-gray-vector"
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    zoom:4,
    center:[-100,40.5]
  })

  let vientoITL = new ImageryTileLayer({
    url:'https://tiledimageservices.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/NLDAS_Hourly_8_30_2021/ImageServer',
    renderer:{
      type:"flow",
      density:1,
      flowSpeed:20,
      maxPathLength:100,
      trailWidth:"2px",

      visualVariables:[{
        type:"color",
        field:"Magnitude",
        stops:[{
          color:[40,146,199],
          value:0
        },{
          color:[160,194,155],
          value:5
        },{
          color:[255,64,0],
          value:10
        }],
        legendOptions:{
          showLegend:true,
          title:'Flow Renderer'
        }
      }]
    },
    effect:"bloom(2,0.5px,0.0)"
  })

  mapa.add(vientoITL)

})