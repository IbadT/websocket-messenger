import {Col, Flex, Image, Typography} from "antd";
import {LuVideo} from "react-icons/lu";
import {CgBorderStyleDashed, CgSmileMouthOpen} from "react-icons/cg";
import {MdPhone} from "react-icons/md";
import {FC} from "react";
import {RiCheckDoubleFill} from "react-icons/ri";
import {CameraOutlined, PaperClipOutlined} from "@ant-design/icons";
import {FaMicrophone} from "react-icons/fa6";
import Input from "antd/es/input/Input";
import third from "../../../assets/third.jpeg";



export const MessageField = () => {
    const messages = [
        {
            text: "Привет! Как дела?",
            date: "2025-03-19T10:15:00",
            isRead: true,
            sender: "left", // Сообщение слева
        },
        {
            text: "Привет! Все хорошо, а у тебя?",
            date: "2025-03-19T10:16:00",
            isRead: true,
            sender: "right", // Сообщение справа
        },
        {
            text: "Рад это слышать! У меня тоже все отлично.",
            date: "2025-03-19T10:17:00",
            isRead: true,
            sender: "left",
        },
        {
            text: "Отлично! Что новенького?",
            date: "2025-03-19T10:18:00",
            isRead: false,
            sender: "right",
        },
        {
            text: "Думаю, сходить в кино сегодня вечером. Хочешь присоединиться?",
            date: "2025-03-19T10:20:00",
            isRead: false,
            sender: "left",
        },
    ];
    return (
        <div className="h-full flex flex-col rounded-[20px] bg-white border-blue-200 shadow-md shadow-blue-200">
            {/* Заголовок */}
            <HeadMessageField/>

            {/* Контейнер сообщений */}
            {/*<div className="flex-grow overflow-y-auto custom-scroll py-5 px-10 h-[80%]">*/}
            <div className="flex-grow overflow-y-auto py-5 px-10 h-[80%]">
                {messages.map(({text, date, isRead, sender}: ITextMessageProps, index) => (
                    <>
                        <TextMessage key={index} text={text} date={date} isRead={isRead} sender={sender}/>
                        <TextMessage key={index} text={text} date={date} isRead={isRead} sender={sender}/>
                        <TextMessage key={index} text={text} date={date} isRead={isRead} sender={sender}/>
                    </>
                ))}
            </div>

            {/* Панель отправки */}
            <div className="w-full bg-white shadow-md px-5 pb-5">
                <SendMessageBar/>
            </div>
        </div>
    );
}


export const SendMessageBar = () => {
    return (
        <Flex align={"center"} justify={"space-around"} className={"h-full"}>
            <div className={"flex bg-[#EFF6FC] h-full w-[85%] rounded-xl"}>
                <Flex justify={"center"} align={"center"} className={"w-15 cursor-pointer group"}>
                    <PaperClipOutlined
                        style={{color: "#333333", fontSize: "26px", cursor: "pointer"}}
                        className={"text-white text-[25px] transform transition-transform duration-300 group-hover:scale-125"}
                    />
                </Flex>

                <Input
                    autoFocus
                    size={"large"}
                    style={{border: "none", background: "#EFF6FC", boxShadow: "none" }}
                    placeholder={"Type your message here..."}
                />

                <Flex justify={"center"} align={"center"} className={"w-15 cursor-pointer group"}>
                    <CgSmileMouthOpen
                        style={{color: "#333333", fontSize: "24px", textAlign: "center"}}
                        className={"text-white text-[25px] transform transition-transform duration-300 group-hover:scale-125"}
                    />
                </Flex>

                <Flex justify={"center"} align={"center"} className={"w-15 cursor-pointer group"}>
                    <CameraOutlined
                        className="text-white text-[25px] transform transition-transform duration-300 group-hover:scale-125"
                        style={{color: "#333333", fontSize: "24px"}}
                    />
                </Flex>
            </div>

            <Flex
                justify={"center"}
                align={"center"}
                className={"bg-[#6E00FF] rounded-xl h-15 w-15 text-center cursor-pointer group"}
            >
                <FaMicrophone
                    className="text-white text-[25px] transform transition-transform duration-300 group-hover:scale-125"
                />
            </Flex>

        </Flex>
    )
}










interface ITextMessageProps {
    text: string;
    date: string;
    isRead: boolean;
    sender: string;
}
export const TextMessage: FC<ITextMessageProps> = ({ text, date, isRead, sender }) => {
    return (
        <div
            className={`flex flex-col mb-2 ${sender === 'right' ? "items-end" : "items-start"}`}
        >
            {/* Контейнер текста сообщения */}
            <div
                className={`
                    max-w-[65%] px-4 py-2 rounded-lg text-sm ${sender === 'right' ? "bg-[#6E00FF] text-white" : "bg-[#E7E7E7] text-black"}
                `}
            >
                {text}
            </div>

            {/* Контейнер даты */}
            <Flex align={"center"} className="mt-1 w-30 text-xs text-gray-500">
                {formatDate(date)}
                {isRead && sender === "right" && <span className="ml-2 text-blue-500"><RiCheckDoubleFill style={{color: "#9747FF"}}/></span>} {/* Отметка прочтения */}
            </Flex>
        </div>
    );
};







// ПЕРЕДЕЛАТЬ
export const HeadMessageField = () => (
    <div className={"flex justify-center py-2 border-b-1 border-gray-200 h-[10%]"}>
        <Image
            style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover", // Центрирование и масштабирование картинки
            }}
            src={third}
            className={"mr-5"}
            preview={false}
        />

        <Col span={20}>

            <Flex justify={"space-between"} className={"w-full"}>
                <div>
                    <Typography.Title level={3}>
                        Anil
                    </Typography.Title>
                    <div>Online - Last seen, 2.02pm</div>
                </div>

                <Col span={6} className={""}>
                    <Flex justify={"end"} align={"center"} className={"h-full"}>
                        <Col span={6} className={"cursor-pointer"}>
                            <MdPhone style={{color: "#9747FF", fontSize: "35px"}}/>
                        </Col>

                        <Col span={6} className={"cursor-pointer"}>
                            <LuVideo style={{color: "#9747FF", fontSize: "35px"}}/>
                        </Col>

                        <Col span={6} className={"cursor-pointer"}>
                            <CgBorderStyleDashed style={{color: "#9747FF", fontSize: "35px", rotate: "90deg"}}/>
                        </Col>


                    </Flex>
                </Col>
            </Flex>
        </Col>
    </div>
)



function formatDate(inputDate: string) {
    const date = new Date(inputDate); // Преобразуем строку в объект Date
    const now = new Date(); // Текущее время

    // Проверяем, является ли дата сегодняшней
    const isToday = date.toDateString() === now.toDateString();

    // Получаем часы и минуты
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Добавляем 0, если минуты меньше 10
    const amPm = hours >= 12 ? 'pm' : 'am';

    // Преобразуем часы в 12-часовой формат
    hours = hours % 12 || 12;

    // Возвращаем строку
    return `${isToday ? 'Today' : date.toLocaleDateString()} ${hours}.${minutes}${amPm}`;
}
