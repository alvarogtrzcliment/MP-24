import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>Simple Widget</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p>
    </div>
  )
}

export default Widget
