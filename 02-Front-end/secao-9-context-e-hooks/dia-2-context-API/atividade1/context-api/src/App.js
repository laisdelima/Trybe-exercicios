import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ThemeProvider from './context/ThemeProvider';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Footer />
    </ThemeProvider>
  )
}
