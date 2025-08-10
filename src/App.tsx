import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import DashboardLayout from './dashboard/DashboardLayout';
import Student from './components/ui/dashboard/sidebar/Student';
import DashboardPage from './dashboard/DashboardPage';

const App = (): JSX.Element => (
    <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Student" element={<Student />} />
        </Route>
    </Routes>
);

export default App