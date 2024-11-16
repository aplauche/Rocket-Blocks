
import { 
  BaseControl,
  Button,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function Image(props){

  const {attributes, setAttributes, fieldName, label} = props

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
