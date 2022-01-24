import React from 'react';
import {Menu} from "./components/Menu/Menu";
import {OurCoffeePage} from "./pages/OurCoffeePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {IconImage} from "./components/IconsImage/IconImage";
import {MainPage} from "./pages/MainPage";
import {ForYourPage} from "./pages/ForYourPage";
import {AboutCoffeePage} from "./pages/AboutCoffeePage";

const App: React.FC = () => {

    return (
        <Router>
            <div className="header">
                <div className={'container'}>
                    <Menu color={'white'}/>
                </div>
            </div>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/coffee-house" element={null}/>
                    <Route path="/coffee" element={<OurCoffeePage/>}/>
                    <Route path="/coffee/:title" element={<AboutCoffeePage/>} />
                    <Route path="/your-pleasure" element={<ForYourPage/>}/>
                </Routes>
            </div>
            <div className="footer">
                <div className={'container'}>
                    <Menu color={'black'}/>
                    <IconImage color={'black'}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
