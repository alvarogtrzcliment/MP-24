require(["esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer","esri/renderers/ClassBreaksRenderer"],(Map,MapView,FeatureLayer,ClassBreaksRenderer)=>{

  let mapa = new Map ({
    basemap:'gray-vector'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-87,40],
    zoom:3
  })

  let censoFL = new FeatureLayer ({
    url:'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/CongressionalDistricts/FeatureServer/0'
  })

  mapa.add(censoFL)

  rendererCenso = new ClassBreaksRenderer({
    field:'POP2010'
  })

  rendererCenso.addClassBreakInfo({
    minValue:0,
    maxValue:500000,
    symbol:{
      type:'simple-fill',
      color:'red'
    }
  })
  
  rendererCenso.addClassBreakInfo({
    minValue:500001,
    maxValue:600000,
    symbol:{
      type:'simple-fill',
      color:'blue'
    }
  })
  
  rendererCenso.addClassBreakInfo({
    minValue:600001,
    maxValue:800000,
    symbol:{
      type:'simple-fill',
      color:'green'
    }
  })
  
  rendererCenso.addClassBreakInfo({
    minValue:800000,
    maxValue:2000000,
    symbol:{
      type:'simple-fill',
      color:'yellow'
    }
  })

  censoFL.renderer = rendererCenso

})