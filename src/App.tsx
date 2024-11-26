import { Route, Routes } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Groups from "./components/Groups";
import { useEffect, useState } from "react";
import MobilePage from "./components/MobilePage";
import ChatPage from "./components/Chat/ChatPage";

function App() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(() => window.matchMedia("(max-width: 768px)").matches);
    }, []);

    return (
        <main className="App">
            <Header />
            {mobile ? (
                <MobilePage />
            ) : (
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Groups />} path="/groups" />
                    <Route element={<ChatPage />} path="/:id" />
                </Routes>
            )}
        </main>
    );
}

export default App;
