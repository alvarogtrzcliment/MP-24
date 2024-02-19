
require(["esri/WebMap","esri/views/MapView","esri/widgets/Editor"], (WebMap,MapView,Editor)=>{

  let mapaWeb = new WebMap({
    portalItem:{
      id:'459a495fc16d4d4caa35e92e895694c8'
    }
  })

  let vista = new MapView({
    container:'viewDiv',
    map:mapaWeb,
    center:[-3.5,40.40],
    zoom:5
  })

  let editorWidget = new Editor({
    view:vista
  })

  vista.ui.add(editorWidget,{
    position:'top-right'
  }) 
  

})