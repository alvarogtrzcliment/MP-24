import './AplicacionArcGIS.css'
import EjemploCard from './EjemploCard/EjemploCard'
import { useState } from 'react'

function AplicacionArcGIS({ linkImagen, titulo, descripcion, linkProducto }){

  let ejemplo

  let [boton,setBoton] = useState(false)

  function buttonHandler(){

    if(boton === false){
      setBoton(true)
    }else{
      setBoton(false)
    }

    console.log(boton)

  }

  if (titulo==='Experience Builder' && boton === true){
    ejemplo = <div className="EjemplosCard">
      <EjemploCard 
        imagen={'https://www.arcgis.com/sharing/rest/content/items/837b6e7124ce42acb15173edf6bc941a/resources/images/widget_21/1662968199811.jpg'}
        titulo={'Gemelo Digital de Vigo'}
        descripcion={'Gemelo digital de la ciudad de Vigo donde puedes encontrar servicios de todo tipo relacionado con el urbanismo de Vigo'}
        enlace={'https://experience.arcgis.com/experience/52437cd5d9b1451787d490c0ff721c85'}
      />
      <EjemploCard
        imagenmagen={'https://esridevbeijing.maps.arcgis.com/sharing/rest/content/items/7696613b0bcb4bd7b70f72b33c89c148/data'}
        titulo={'Evaluación de impactos y riesgos derivados del cambio climático en la costa de Galicia'}
        descripcion={'Resultados de los analisis e información relativa al cambio climático en Galicia.'}
        enlace={'https://mapas.xunta.gal/visores/costa/'}
      />
      <EjemploCard 
        imagen={'https://www.arcgis.com/sharing/rest/content/items/dde155a7b903429a90c7fe39e281f9be/resources/images/templates/1594602667245.jpeg?token=xRPF5mflLGO6E8FrXeJE9VkJEvCznrxguMj-ss2Iq1fITzMJXlqEIC9GQxmvF0ao5EvOTCh5pgH1QbzX0vuM8FR0WiHJoywpI-9AOneaj4q3k-w5C9gFUQQG-emlc3qviml_j22klw9EDvGv7ir2YNcIZ6WG7ttNKg8FzOnLSPZF2BxBBox5d6fQfpmgHxRsKG_DK4zJzmohablHYFs4znR0UFaFYSrdjVbasbI2y_A.'}
        titulo={'Explorador del campo de Fútbol americano de Pitsburg'}
        descripcion={'Conjunto de aplicaciones con datos sobre el estadio'}
        enlace={'https://experience.arcgis.com/experience/dde155a7b903429a90c7fe39e281f9be/page/Home/'}
      />
    </div>
  }

  if(titulo === 'ArcGIS StoryMaps' && boton === true){
    ejemplo = <div className="EjemplosCard">
      <EjemploCard 
        imagen={'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        titulo={'Incendio Forestal Sierra de la Culebra'}
        descripcion={'Story Maps con ejemplos de uso de tecnología para Monitorizar Incendios Forestales'}
        enlace={'https://storymaps.arcgis.com/stories/c6158b4f6f084ec58fb51010ab0f2813'}
      />
      <EjemploCard
        imagen={'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        titulo={'T-Minus 6000'}
        descripcion={'Historia espacial delsde 1957-2020'}
        enlace={'https://storymaps.arcgis.com/collections/8797652dbe244610a6b1b2e0e2f07434?item=5'}
      />
      <EjemploCard
        imagen={'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        titulo={'Cementerio de Cargueros'}
        descripcion={'Descubriendo la incómoda realidad de la industria marítima'}
        enlace={'https://storymaps.arcgis.com/collections/68ba1955f063424884fc7c77dea8480e?item=6'}
      />
    </div>
  }

  if(titulo === 'ArcGIS Dashboards' && boton === true){
    ejemplo = <div className="EjemplosCard">
      <EjemploCard
        imagen={'https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y292aWR8ZW58MHx8MHx8fDA%3D'}
        titulo={'COVID-19'}
        descripcion={'Dashboard con información relativa a la pandemia'}
        enlace={'https://www.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6'}
      />
      <EjemploCard
        imagen={'https://images.unsplash.com/photo-1606050309588-741702cceb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFtfGVufDB8fDB8fHww'}
        titulo={'Boletín Hidrológico Peninsular'}
        descripcion={'Dashboard con información acerca de las reservas hidrológicas en cada vertiente y demarcación'}
        enlace={'https://www.arcgis.com/apps/dashboards/912dfee767264e3884f7aea8eb1e0673'}
      />
      <EjemploCard
      imagen={'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZpcmUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D'}
      titulo={'Fuegos Activos'}
      descripcion={'Panel de control que visualiza los puntos calientes captados por sensórica satelital'}
      enlace={'https://www.arcgis.com/apps/dashboards/2130a960628445938fd70ae1b108c29a'}
      />
    </div>
  }

  return(
    <div className='Aplicacion'>
      <img src={linkImagen} alt="" />
      <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href={linkProducto}>Enlace al producto</a>
        <button onClick={buttonHandler}>Ejemplos de Uso</button>
      </div>
      <div className='Lista-Ejemplos'>
        {ejemplo}
      </div>
    </div>
  )
}

export default AplicacionArcGIS