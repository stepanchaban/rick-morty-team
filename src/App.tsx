import React from 'react';
import './App.css';

localStorage.setItem('string', 'privet');
console.log(localStorage.getItem('string'));

export const App: React.FC = () => <div>ASD</div>;
