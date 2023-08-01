import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Main from './components/main';
import CakeContainer from './cakeContainer';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {

  const isUser = JSON.parse(localStorage.getItem('my_item'))

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <div className='App'>
              {isUser ? <Main /> :
                <Routes>
                  <Route path="/" element={<Login />} />
                </Routes>}
            </div>          
          </BrowserRouter>
        </PersistGate >
      </Provider >
    </>
  )
}

export default App;
