import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';


import './editor.scss';


import metadata from './block.json';
import RocketBlocks from '../../components/RocketBlocks';


export default function Edit(props) {

	const {attributes, setAttributes} = props

	return (
		<>
			
			<div { ...useBlockProps() }>
				<ServerSideRender
					block="rktblk/auto-gen"
					attributes={ attributes }
				/>
			</div> 
			

			<RocketBlocks 
				metadata={metadata} 
				attributes={attributes}
				setAttributes={setAttributes} 
			/>
		</>
	);
}
