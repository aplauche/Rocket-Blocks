
import { 
  SelectControl
} from '@wordpress/components';


export default function Select(props){

  const {attributes, setAttributes, fieldName, field, label} = props

  let choices = []

  if(field.hasOwnProperty("enum") && typeof field.enum == 'object'){
    choices = field.enum.map((val) => {
      return {label: val, value: val}
    })
  }

  if(field.rktblk?.hasOwnProperty("options") && typeof field.rktblk?.options == 'object'){
    choices = field.rktblk.options
  }

  return (
    <SelectControl
      label={label}
      options={ choices }
      value={ attributes[fieldName] }
      onChange={ ( choice ) => setAttributes( { [fieldName]: choice  } ) }
      __nextHasNoMarginBottom
    />
  )
}
