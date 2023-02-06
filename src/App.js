import logo from './logo1.png';
import './App.css';
import Dictionary from './components/Dictionary';

function App() {
  return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<main>
				<Dictionary defaultKeyword='' />
			</main>
			<footer className='App-footer'>
				<small>
					Coded by{' '}
					<a
						className='App-link'
						href='https://github.com/NikaNika/react-dictionary-project'
						target='_blank'
						rel='noopener noreferrer'
					>
						NikaNika
					</a>
				</small>
			</footer>
		</div>
	);
}

export default App;
