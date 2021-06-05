
import {useState} from 'react';
import '../assessment.css';
import DarkMode from '../styles/DarkMode'

export default function Header() {

    let [darkMode, toogleDarkMode] = DarkMode()

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
