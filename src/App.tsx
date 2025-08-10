import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { JSX } from 'react';
import DashboardLayout from './dashboard/DashboardLayout';
import StudentPage from './pages/Student/StudentPage';
import DashboardPage from './dashboard/DashboardPage';

const App = (): JSX.Element => (
    <Routes>
          <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/StudentPage" element={<StudentPage />} />
        </Route>
    </Routes>
);

export default App