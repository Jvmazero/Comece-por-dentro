import React from 'react';
import { Home } from './pages/Home';
import { Toaster } from 'sonner';
export function App() {
  return (
    <>
      <Home />
      <Toaster position="bottom-center" richColors />
    </>);

}