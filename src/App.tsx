import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import DashboardLayout from './dashboard/DashboardLayout';

const App = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<DashboardLayout/>}>
      </Route>
    </Routes>
);

export default App