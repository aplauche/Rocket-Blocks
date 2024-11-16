
import { 
  BaseControl,
  Button,
  Popover
} from '@wordpress/components';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import {useState} from "@wordpress/element"



export default function Link(props){

  const {attributes, setAttributes, fieldName, field, label} = props

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
