import './App.css'
import  AplicacionArcGIS  from './components/AplicacionArcGIS/AplicacionArcGIS'
import  Header  from './components/Header/Header'


function App() {

  return (
    <>
      <Header></Header>

      <section>
        <h2>Descripción de las aplicaciones</h2>

        <AplicacionArcGIS 
          linkImagen={"https://www.esri.es/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png"}
          linkProducto={"https://www.esri.es/es-es/arcgis/productos/arcgis-experience-builder/overview"}
          titulo={'Experience Builder'}
          descripcion={'ArcGis Experience Builder es una solución altamente configurable para crear aplicaciones web atractivas sin escribir código'}></AplicacionArcGIS>


        <AplicacionArcGIS
          linkImagen={"https://www.esri.es/content/dam/distributor-share/esri-cis-ru/home/common/icons/product-logos/arcgis-dashboards.png"}
          linkProducto={'"https://www.esri.es/es-es/arcgis/productos/operations-dashboard-for-arcgis/introduccion"'}
          titulo={'ArcGIS Dashboards'}
          descripcion={'Proporciona visualización de datos geolocalizados y análisis para una visión operacional en tiempo real de personas, servicios, activos y eventos'}></AplicacionArcGIS>

        <AplicacionArcGIS
          linkImagen={"https://www.esri.es/content/dam/esrisites/en-us/common/icons/product-logos/StoryMaps.png"}
          linkProducto={"https://www.esri.es/es-es/arcgis/productos/arcgis-storymaps/introduccion"}
          titulo={'ArcGIS StoryMaps'}
          descripcion={'Cuenta historias memorables a través de tus datos, transformando tus relatos digitales con mapas personalizados'}></AplicacionArcGIS>

      </section>
    </>
  )
}

export default App
