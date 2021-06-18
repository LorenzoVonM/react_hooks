
import '../assessment.css';

export default function Header({ darkMode ,toogleDarkMode }) {
    return (
        <div>
            <h1>
                Dark Mode
            </h1>
            <button 
                type='button' 
                onClick= { _ => toogleDarkMode() }
            >
                Go to {darkMode ? 'Dark mode': 'Light mode'}
            </button>
        </div>
    )
}
