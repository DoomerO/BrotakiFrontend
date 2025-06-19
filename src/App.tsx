import { Provider } from './components/ui/provider'
import { BrowserRouter, Routes, Route} from 'react-router';

//Pages
import HomePage from './pages/HomePage'
import Page from './components/pages/Page';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="*" Component={Page}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
