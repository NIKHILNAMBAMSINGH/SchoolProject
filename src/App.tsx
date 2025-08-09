import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import Layout from './dashboard/Layout';

const App = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
);

export default App