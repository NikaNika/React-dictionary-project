import React from "react";
import './Photos.css';

function Photos(props) {
  if (props.photos) {
		return (
			<section className='Photos'>
				<div className='row'>
					{props.photos.map(function (photo, index) {
						return (
							<div key={index}>
								<a href={photo.src.original} target='_blank' rel='noreferrer'>
									<img
										src={photo.src.landscape}
										className='img-fluid'
										alt={photo.src.photographer}
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}

export default Photos;
