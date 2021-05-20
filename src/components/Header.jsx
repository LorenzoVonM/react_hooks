
import {useState} from 'react';
import '../assessment.css';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <h1>
                Dark Mode
            </h1>
            <button 
                type='button' 
                onClick= { _ => setDarkMode(!darkMode) }
            >
                Go to {darkMode ? 'Dark mode': 'Light mode'}
            </button>
        </div>
    )
}
