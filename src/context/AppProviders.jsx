// src/context/AppProviders.jsx
import { ThemeProvider } from './ThemeContext';
import { ToastProvider } from './ToastContext';
import { CartProvider } from './CartContext';
import { HashRouter } from 'react-router-dom';

export default function AppProviders({ children }) {
  return (
    <HashRouter>
      <ThemeProvider>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </ThemeProvider>
    </HashRouter>
  );
}
