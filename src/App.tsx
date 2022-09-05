
import Form from 'components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<Form />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;