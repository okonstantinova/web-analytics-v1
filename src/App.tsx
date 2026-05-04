import { HashRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import './styles/global.css';

const antdTheme = {
  token: {
    colorPrimary: '#8B7355',
    colorBgContainer: '#FFFFFF',
    colorBgLayout: '#FAF8F5',
    borderRadius: 8,
    colorBorder: '#E8E4DC',
  },
};

export default function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <FavoritesProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </HashRouter>
      </FavoritesProvider>
    </ConfigProvider>
  );
}
