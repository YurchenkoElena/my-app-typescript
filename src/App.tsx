import React from 'react';
import {Menu} from "./components/Menu/Menu";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {IconImage} from "./components/IconsImage/IconImage";
import {MainPage} from "./pages/MainPage";

const App: React.FC = () => { //FC - function component

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
                    <Route path="/coffee" element={<AboutPage/>}/>
                    <Route path="/your-pleasure" element={null}/>
                    <Route path="/todo-list" element={<TodosPage/>}/>
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
