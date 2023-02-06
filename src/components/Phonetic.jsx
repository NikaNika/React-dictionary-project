import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css';

function Phonetic(props) {
  return (
		<div className='Phonetics'>
			<ReactAudioPlayer
				src={props.phonetic.audio}
				controls
				className='speaker mt-1 audioPhonetics'
			/>
			<br />
			{props.phonetic.text}
		</div>
	);
}

export default Phonetic;
