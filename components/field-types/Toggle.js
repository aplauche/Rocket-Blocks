
import { 
  ToggleControl
} from '@wordpress/components';

export default function Toggle(props){

  const {attributes, setAttributes, fieldName, label} = props

     return <ToggleControl
        label={label}
        checked={ attributes[fieldName] }
        onChange={ ( newValue ) => setAttributes( { [fieldName]: newValue } ) }
        __nextHasNoMarginBottom
      />
  
}
