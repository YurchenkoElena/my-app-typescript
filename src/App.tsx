import React from 'react';
import {Menu} from "./components/Menu/Menu";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {IconImage} from "./components/IconsGroup/IconImage";

const App: React.FC = () => { //FC - function component

    return (
        <Router>
            <div className="header">
                <div className={'container'}>
                    <Menu/>
                </div>

            </div>
            <div className="container">
                <Routes>
                    <Route path="/coffee-house" element={<TodosPage/>}/>
                    <Route path="/coffee" element={<AboutPage/>}/>
                    <Route path="/your-pleasure" element={null}/>
                </Routes>
            </div>
            <div className="footer">
                <div className={'container'}>
                    <Menu/>
                    <IconImage color={'black'}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
