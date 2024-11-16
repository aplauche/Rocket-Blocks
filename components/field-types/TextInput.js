
import { 
  BaseControl
} from '@wordpress/components';

export default function TextInput(props){

  const {attributes, setAttributes, fieldName, label} = props

  return (
    <BaseControl
      label={label}
      __nextHasNoMarginBottom
      id={`wp-components-base-control-${fieldName}`}

    >
      <input
        id={`wp-components-base-control-${fieldName}`}
        type='text'
        style={{display: 'block'}}
        value={ attributes[fieldName] }
        onChange={ ( e ) => {
          setAttributes( { [fieldName]: e.target.value } ) 
        }}
      />
    </BaseControl>
  )
  
}
