require(["esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer",
"esri/widgets/Legend"

],(Map,MapView,FeatureLayer,Legend)=>{

  let mapa = new Map({
    basemap:'dark-gray-vector'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.5,40.4],
    zoom:5
  })

  let estacionesFL = new FeatureLayer({
    url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/weather_stations_010417/FeatureServer/0",
    effect:"bloom(2, 1px, 20%)",
    renderer:{
      type:'simple',
      symbol:{
        type:'simple-marker',
        path:"M14.5,29 23.5,0 14.5,9 5.5,0z",
        color:"#ffff00",
        outline:{
          width:0.5
        },
        angle:180
      },
      visualVariables:[{
        type:"rotation",
        field:"WIND_DIRECT"
      },{
        type:"size",
        field:'WIND_SPEED',
        minDataValue:0,
        maxDataValue:81,
        minSize:5,
        maxSize:60

        // valueUnit:'kilometers',
        // valueRepresentation:'diameter'

        // stops:[{
        //   value:0,
        //   size:0
        // },{
        //   value:81,
        //   size:40
        // }]
      },{
        type:'color',
        field:'WIND_CHILL',
        stops:[{
            value:-47,
            color:'blue'
          },{
            value:20,
            color:'white'
          },{
            value:67,
            color:'red'
          }]
      }]
    },
  })

  let leyenda = new Legend({
    view:vista
  })

  vista.ui.add(leyenda,'bottom-right')

  mapa.add(estacionesFL)

})