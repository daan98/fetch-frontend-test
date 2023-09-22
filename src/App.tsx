import { useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import {
  Login,
  SearchPage,
  Footer,
  PrivateRoute
} from './components';

function App() {
  const [loginStatus, setLoginStatus] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login setLoginStatus={setLoginStatus} /> } />

        <Route
          path="/dogs"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
