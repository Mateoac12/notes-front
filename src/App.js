import './App.css';

import React, { Suspense } from 'react'
import { Route } from 'wouter'

/* import HomePage from './pages/HomePage' */
import Header from './components/Header'
import Notes from './pages/Notes'
import LoginPage from 'pages/LoginPage';

const HomePage = React.lazy(() => import('pages/HomePage'))

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
      <Header />
      <div className="App">
        <Route
          component={ HomePage }
          path="/"
        />
        <Route
          component={LoginPage}
          path="/login"
        />
        <Route
          component = { Notes }
          path = "/notes"
        />
      </div>
    </Suspense>
    </>
  );
}

export default App;
