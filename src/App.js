
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import DarkMode from './styles/DarkMode';

function App() {

	let [darkMode, toogleDarkMode] = DarkMode()
	let selectedTheme = darkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={ selectedTheme }>
			<div className="App">
				<GlobalStyles />
				<Header darkMode={ darkMode } toogleDarkMode={toogleDarkMode} />
				<div className='app-container'>
					<Characters />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
