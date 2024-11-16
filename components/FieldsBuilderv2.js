
import { 
  SelectControl, 
  ToggleControl,
  BaseControl,
  Button,
  Popover
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import {useState} from "@wordpress/element"



export default function FieldsBuilder(props){

  const {attributes, setAttributes, fieldName, field} = props

  // Disable the generator if set to false
  if(field.hasOwnProperty("rktblk") && field["rktblk"] == false){
    return;
  }

  let label = fieldName

  if(field.hasOwnProperty("rktblk") && field.rktblk.hasOwnProperty("label") && typeof field.rktblk.label == 'string'){
    label = field.rktblk.label
  }

  /**
   * Simple String Field Types with Text UI
   */
  if(field.type === "string" && field.rktblk.type === "input"){

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


  /**
   * Enum and Select Field Types TODO: break these up to avoid errors
   */
  if(field.hasOwnProperty("enum") || field?.rktblk?.type === "select"){

    let choices = []

    if(field.hasOwnProperty("enum") && typeof field.enum == 'object'){
      choices = field.enum.map((val) => {
        return {label: val, value: val}
      })
    }

    if(field?.rktblk?.hasOwnProperty("options") && typeof field?.rktblk?.options == 'object'){
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

  /**
   * Boolean Field Types
   */
  if(field.type === "boolean"){

    return (
      <ToggleControl
        label={label}
        checked={ attributes[fieldName] }
        onChange={ ( newValue ) => setAttributes( { [fieldName]: newValue } ) }
        __nextHasNoMarginBottom
      />
    )
  }

  /**
   * Simple Number Field Types
   */
  if(field.type === "number"){

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

  /**
   * Integer Field Types with Range UI
   */


  /**
   * Link Fields (URL and Target ONLY)
   */
  if(field.type === "object" && field.rktblk.type === "link"){

    const [ isVisible, setIsVisible ] = useState( false );
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
    };

    const handleLinkChange = (newVal) => {
      let copy = {...attributes[fieldName]}

      copy.url = newVal.url
      copy.title = ''
      copy.target = newVal.opensInNewTab ? '_blank' : ''

      setAttributes({[fieldName]: {...copy}})
    }

    return (
      <>
        <BaseControl
          label={label}
          __nextHasNoMarginBottom
        >
        <div>
          <p>{attributes[fieldName]["url"]}</p>
          <Button style={{marginTop: "8px"}} variant='secondary' onClick={toggleVisible}>
            {isVisible ? 'Close' : 'Edit Url'}
          </Button>
          {isVisible && (
            <Popover>
              <LinkControl key={`link--${attributes[fieldName]}`} value={{
                url: attributes[fieldName]["url"], 
                title: attributes[fieldName]["title"],
                opensInNewTab: attributes[fieldName]["target"] === "_blank", 
              }} onChange={handleLinkChange} />
            </Popover>
          )}
        </div>
        </BaseControl>
      </>
    )
  }



  /**
   * Image UI Element Fields
   */
  if(field.type === "object" && field.rktblk.type === "image"){

    if(!attributes[fieldName].hasOwnProperty('id') || !attributes[fieldName].hasOwnProperty('url')){
      console.error("Your block has a field of type image that is missing either the id or url attribute.")
    }

    const imageId = attributes[fieldName].id
    const imageUrl = attributes[fieldName].url

    const removeMedia = () => {
      const copy = {...attributes[fieldName]}
      copy.id = 0
      copy.url = ''
      setAttributes({
        [fieldName]: copy
      });
    }
   
     const onSelectMedia = (media) => {
      const copy = {...attributes[fieldName]}
      copy.id = media.id
      copy.url = media.url
      setAttributes({
        [fieldName]: copy
      });
    }

    return (
      <>
        <BaseControl
          label={label}
          __nextHasNoMarginBottom
        >
          <MediaUploadCheck>
            <MediaUpload
              value={imageId}
              allowedTypes={ ['image'] }
              onSelect={onSelectMedia}
              render={({open}) => (
                <Button 
                  className={imageId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                  onClick={open}
                >
                  {imageId == 0 && 'Choose an image'}
                    {(imageId != 0 && imageUrl != '') && 
                      <img src={imageUrl} />
                    }
                </Button>
              )}
            />
          </MediaUploadCheck>
          {imageId != 0 && 
            <MediaUploadCheck>
              <Button style={{marginTop: "8px"}} variant='secondary' onClick={removeMedia} isDestructive>Remove image</Button>
            </MediaUploadCheck>
          }
        </BaseControl>
      </>
    )
  }


  /**
   * Focus Selector Fields
   */


}