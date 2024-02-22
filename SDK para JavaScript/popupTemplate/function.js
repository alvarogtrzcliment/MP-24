require([  "esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer",],(Map,MapView,FeatureLayer)=>{

  let mapa = new Map({
    basemap:'dark-gray-vector'
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.5,40.40],
    zoom:5,
    popup:{
      dockEnabled:true,
      dockOptions:{
        breakpoint:false,
        position:'bottom-right'
      }
    }
  })

  let plantilla = {
    title:'{NOMBRE}',
    content:[
      {
        type:'fields',
        fieldInfos:[
          {
            fieldName:'MUNICIPIOS',
            label:'Municipios'
          },
          {
            fieldName:'PROVINCIAS',
            label:'Provincias'
          },
          {
            fieldName:'NCAMAS',
            label:'Número de k+'
          }
        ]
      }
    ]
  }

  let hospitalesFL = new FeatureLayer({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer',
    popupTemplate:plantilla
  })

  mapa.add(hospitalesFL)

})