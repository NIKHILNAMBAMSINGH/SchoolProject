import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import SidebarV3 from './dashboard/page';

const App = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<SidebarV3/>}>
      </Route>
    </Routes>
);

export default App