/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Pooling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="border border-black p-2 w-full h-[500px] ml-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => {
            return (
              <ChatMessage key={index} name={c.name} message={c.message} />
            );
          })}
        </div>
      </div>

      <form
        className="w-full p-2 border border-black ml-2 bg-slate-100 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Vaibhav Thareja",
            message:liveMessage
          }))
          setLiveMessage("")
        }}
      >
        <input
          className="w-96 px-2 py-1 rounded-lg"
          type="text"
          placeholder="chat"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 py-1 m-1 bg-blue-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
