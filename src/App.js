import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import AppRoute from './AppRoute'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
