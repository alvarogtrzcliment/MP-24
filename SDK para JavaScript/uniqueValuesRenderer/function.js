require(["esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

  let mapa = new Map ({
    basemap:'gray-vector'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-75,40],
    zoom:8
  })

  let parcelasFL = new FeatureLayer({
    url:'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NJ_Farmland_Preservation_Areas/FeatureServer/0',

    renderer:{
      type:'unique-value',
      field:'PARCEL_TYP',
      uniqueValueInfos:[{
        value:'PARCEL',
        symbol:{
          type:'simple-fill',
          color:'red'
        }
      },{
        value:'NON-SEVER EXCEPTION',
        symbol:{
          type:'simple-fill',
          color:[117, 224, 131,]
        }
      },{
        value:'SEVERABLE EXCEPTION',
        symbol:{
          type:'simple-fill',
          color:'yellow'
        }
      }]
    }

  })

  mapa.add(parcelasFL)

})