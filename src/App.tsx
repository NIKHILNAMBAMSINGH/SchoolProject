import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import Dashboard from './pages/AppSideBar'; 

const App = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<Dashboard/>}>
      </Route>
    </Routes>
);

export default App