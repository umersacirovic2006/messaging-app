// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Chat from "../Chat";
import "./index.scss";
import { useEffect, useState } from "react";
import { ChatType } from "../Chat/index.d";
// import { RootState } from "../../store/store";

const Home = () => {
    const [obj, setObj] = useState<ChatType[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then((response) => {
                setObj(response.data.users);
                setIsLoaded(true);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoaded(true);
            });
    }, []);
    // const count = useSelector((state: RootState) => state.counter.value)
    // const dispatch = useDispatch()

    return (
        <div className="Home">
            <nav>
                <h2>Home</h2>
                <div className="btns">
                    <button>New Contact</button>
                    <button>New Chat</button>
                </div>
            </nav>
            <div className="chats">
                {error ? (
                    <h1 className="error">Error: {error}</h1>
                ) : isLoaded && obj ? (
                    obj.map((dataObj: ChatType) => (
                        <Chat
                            key={dataObj.id} 
                            id={dataObj.id}
                            firstName={dataObj.firstName}
                            image={dataObj.image}
                            university={dataObj.university}
                            ip={dataObj.ip}
                            obj={dataObj}
                        />
                    ))
                ) : (
                    <h1 className="loading">Loading...</h1>
                )}
            </div>
        </div>
    );
};

export default Home;
