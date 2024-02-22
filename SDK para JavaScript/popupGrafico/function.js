require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer","esri/Color"], (
  Map,
  MapView,
  FeatureLayer,
  Color
) => {
  let mapa = new Map({
    basemap: "gray-vector",
  });

  let vista = new MapView({
    container: "viewDiv",
    map: mapa,
    center: [-3.5, 40.4],
    zoom: 5,
  });

  let despoblacionFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/La_Espa%C3%B1a_despoblada/FeatureServer",
    opacity:0.3,
    popupTemplate: {
      title: "{Nombre}",
      content: [
        {
          type:'fields',
          fieldInfos:[{
            fieldName:'Porcentaje',
            label:'Variación de población entre 2012-2018',
            format: {
              digitSeparator: true,
              places: 3
            }
          },
          {
            fieldName:'HabHa',
            label:'Nº Habitantes por Hectárea',
            format: {
              digitSeparator: true,
              places: 2
            }
          }
        ]
        },
        {
          title: "Variación de población",
          type: "media",
          mediaInfos: [
            {
              type: "column-chart",
              value: {
                fields: ["Pob12", "Pob13", "Pob14", "Pob15", "Pob16", "Pob17"],
                colors:[new Color('#d9ed92'),new Color('#b5e48c'),new Color('#76c893'),new Color('#34a0a4'),new Color('#1a759f'),new Color('#184e77')]
              },
            },{
              type: "pie-chart",
              value: {
                fields: ["Res_saldo_int", "Res_saldo_ext"],
                colors:[new Color('#6a040f'),new Color('#ffba08')]
              },
            }
          ],
        },
      ],
    },
  });

  mapa.add(despoblacionFL);
});
