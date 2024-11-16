
import { 
  BaseControl
} from '@wordpress/components';

export default function NumberInput(props){

  const {attributes, setAttributes, fieldName, label} = props

  return (
    <BaseControl
      label={label}
      __nextHasNoMarginBottom
      id={`wp-components-base-control-${fieldName}`}

    >
      <input
        id={`wp-components-base-control-${fieldName}`}
        type='number'
        style={{display: 'block'}}
        value={ attributes[fieldName] }
        onChange={ ( e ) => {
          setAttributes( { [fieldName]: Number(e.target.value) } ) 
        }}
      />
    </BaseControl>
  )
  
}
