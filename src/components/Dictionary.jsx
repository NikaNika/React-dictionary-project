import React, {useState} from "react";
import './Dictionary.css';
import Photos from "./Photos";
import Results from "./Results";
import axios from 'axios';

function Dictionary(props) {
  let [loaded, setLoaded] = useState(false);
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

  function search() {    
		// documentation: https://dictionaryapi.dev/e
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey = 'dlsf3WjPhNq7C7joEQ6xdEzJcqChJkJfSXKtewAHYudsFWiaMCjEA0U2';
			//'563492ad6f9170000100000181b32e908bd9455b9d3991048bc0149f';
			//'dlsf3WjPhNq7C7joEQ6xdEzJcqChJkJfSXKtewAHYudsFWiaMCjEA0U2';
			// '563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89';
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
	}

  function handleSubmit(event) {
		event.preventDefault();
		search();
	}

  function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

  function load() {
		setLoaded(true);
		search();
	}

  if (loaded) {
    return (
			<div className='Dictionary'>
				<section>
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type='search'
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className='hint'>
						suggested words: sunset, wine, yoga, plant...
					</div>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
  } else {
    load();
		return 'Loading';
  }
		
}

export default Dictionary;
