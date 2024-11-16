
import TextInput from './field-types/TextInput';
import Select from './field-types/Select';
import Image from './field-types/Image';
import Toggle from './field-types/Toggle';
import Link from './field-types/Link';
import NumberInput from './field-types/NumberInput';


export default function LaunchPad({attributes, setAttributes, fieldName, field}){

  // Disable the generator if set to false
  if(!field.hasOwnProperty("rktblk") || field?.rktblk == false){
    return;
  }

  // Get the label for the field - default to the fieldname
  let label = fieldName

  if(field.rktblk.hasOwnProperty("label") && typeof field.rktblk.label == 'string'){
    label = field.rktblk.label
  }

  // Create props object to pass to fields
  const props = {
    attributes: attributes,
    setAttributes: setAttributes,
    fieldName: fieldName,
    field: field,
    label: label,
  }

  /**
   * MAIN SWITCH FIELD LOGIC BEGINS
   */

  /**
  * Boolean Field Types
  */
  if(field.type === "boolean" || field.rktblk?.type === "boolean"){
    return <Toggle {...props} />
  }

  /**
   * Simple String Field Types with Text UI
   */
  if(field.type === "string" && field.rktblk?.type === "input"){
    return <TextInput {...props} />
  }

  /**
   * Simple Number Field Types
   */
  if(field.type === "number"){
    return <NumberInput {...props} />
  }

  /**
   * Enum and Select Field Types
   */
  if(field.rktblk?.type === "select" || typeof field?.enum == "object"){
    return <Select {...props} />
  }

  /**
   * Image UI Element Fields
   */
  if(field.type === "object" && field.rktblk?.type === "image"){
    return <Image {...props} />
  }

  /**
  * Link Fields (URL and Target ONLY)
  */
  if(field.type === "object" && field.rktblk.type === "link"){
    return <Link {...props} />
    
  }

  /**
   * Integer Field Types with Range UI
   */
  // TODO:

  /**
   * Focus Selector Fields
   */
  // TODO:


}