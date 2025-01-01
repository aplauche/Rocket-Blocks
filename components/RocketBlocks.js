import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import LaunchPad from './LaunchPad';

export default function RocketBlocks({metadata, attributes, setAttributes}){

  return (
    <InspectorControls>
      <Panel>
        <PanelBody>
          {Object.entries(metadata.attributes).map(([fieldName, fieldObject]) => {
            return <LaunchPad
                key={fieldName} 
                fieldName={fieldName} 
                field={fieldObject}
                attributes={attributes}
                setAttributes={setAttributes}
              />
          })}
        </PanelBody>
      </Panel>
    </InspectorControls>
  )
}