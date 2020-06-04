import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage();
    
    const dark =
    typeof darkMode !== 'undefined' ? darkMode : darkMode;

    useEffect(() => {

        const className = 'dark-mode';
        const element = window.document.body;

        if (dark) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
        
    },
        [dark]
    )

        return [darkMode, setDarkMode]

} 
