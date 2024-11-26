import "./index.scss";
import { ChatType } from "./index.d";
import { Link } from "react-router-dom";

const Chat = (obj: ChatType) => {
    return (
        <Link className="Chat" to={`/${obj.id}`} state={obj}>
            <div className="left">
                <div className="img">
                    <img src={obj.image} alt="wda" />
                </div>
                <div className="info">
                    <p>{obj.firstName}</p>
                    <p>{obj.university}</p>
                </div>
            </div>
            <div className="right">
                <div className="read">
                    {/* if its read or not */}
                    <small>{obj.id}</small>
                </div>
                <div className="time">
                    <small>{obj.ip}</small>
                </div>
            </div>
        </Link>
    );
};

export default Chat;
