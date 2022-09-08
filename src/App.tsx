import Settings from 'pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<Settings />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;