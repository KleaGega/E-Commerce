import React from 'react';
import { useTheme } from '../../features/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-button">
      <FontAwesomeIcon icon={themeMode === 'dark' ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
