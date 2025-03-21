import {useEffect, useRef, useState} from "react";

interface IMessage {
    senderId: number;
    recipientId: number;
    content: string;
}

export const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const ws = useRef<WebSocket | null>(null);


    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080/chat');

        ws.current.onmessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);

            // Если пришел массив (история сообщений), заменяем текущие сообщения
            if (Array.isArray(message)) {
                setMessages(message);
            } else {
                // Если пришло одно сообщение, добавляем его в массив
                setMessages((prev) => [...prev, message]);
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Очистка при размонтировании компонента
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendMessage = () => {
        if (inputValue.trim() !== '' && ws.current?.readyState === WebSocket.OPEN) {
            const message = {
                senderId: 1,
                recipientId: 2,
                content: inputValue,
            };
            ws.current.send(JSON.stringify(message));
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Chat</h1>

            <div style={{ height: '300px', border: '1px solid #ccc', overflowY: 'auto', marginBottom: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className="p-5 border-b-gray-200 bg-red-500">
                        <strong>{msg.senderId}: </strong>{msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                style={{ width: '80%', padding: '5px' }}
            />
            <button className="bg-red-500" onClick={sendMessage} style={{ padding: '5px' }}>
                Send
            </button>
        </div>
    );
};