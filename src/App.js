import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
import Contacts from './scenes/contacts';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Geography from './scenes/geography';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/ReactDashboard" element={<Dashboard />} />
              <Route path="/ReactDashboard/dashboard" element={<Dashboard />} />
              <Route path="/ReactDashboard/team" element={<Team />} />
              <Route path="/ReactDashboard/contacts" element={<Contacts />} />
              <Route path="/ReactDashboard/invoices" element={<Invoices />} />
              <Route path="/ReactDashboard/form" element={<Form />} />
              <Route path="/ReactDashboard/bar" element={<Bar />} />
              <Route path="/ReactDashboard/pie" element={<Pie />} />
              <Route path="/ReactDashboard/line" element={<Line />} />
              <Route path="/ReactDashboard/faq" element={<FAQ />} />
              <Route path="/ReactDashboard/calendar" element={<Calendar />} />
              <Route path="/ReactDashboard/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
