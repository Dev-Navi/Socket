import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socketio;
export default function Chat() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [msg,setMsg] = useState("")
  const backendUrl = "http://localhost:8000/";

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const name = params.get("name");
    const room = params.get("room");

    console.log(name, room);
    setUser(name);
    setRoom(room);

    socketio = io(backendUrl);

    socketio.emit("join", { name: name, room: room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socketio.disconnect();
      socketio.off();
    };
  }, []);

  useEffect(() => {
    socketio.on("msg", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socketio.emit("sendMsg", msg, () => setMsg(""))
  };

  return (
    <div>
      <ul>
        {messages.map((msg, idx) => {
          return <li key={idx}>{JSON.stringify(msg)}</li>;
        })}
      </ul>

      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyPress={(e) =>
          e.key === "Enter" ? sendMessage(e) : null
        }
      />
    </div>
  );
}
