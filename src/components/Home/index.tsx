// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Chat from "../Chat";
import "./index.scss";
import { useEffect, useState } from "react";
import { ChatType, ChatTypeObj } from "../Chat/index.d";
// import { RootState } from "../../store/store";

const Home = () => {
    const [obj, setObj] = useState<ChatTypeObj>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://dummyjson.com/users").then((response) => {
            setObj(response.data.users);
            setIsLoaded(true);
        });
    }, []);

    if (isLoaded) {
        console.log(obj);
    }
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
                {isLoaded && obj ? (
                    obj?.map((dataObj: ChatType, index: number) => (
                        <Chat
                            key={index}
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
