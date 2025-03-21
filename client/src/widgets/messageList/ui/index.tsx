import {Flex, Image, Typography} from "antd";
import {RiCheckDoubleFill} from "react-icons/ri";
import {useState} from "react";
// import fifth from "../../../assets/fifth.jpeg";
import premium from "../../../assets/premium.jpeg";

export const MessageList = () => (
    <div className={"h-1/2 bg-white rounded-[20px] border-blue-200 shadow-md shadow-blue-200 p-4 overflow-y-auto"}>

            <Typography.Title level={3}>
                MessageList(People)
            </Typography.Title>
        {Array(10).fill(premium).map((i, index: number) => (
            <Message img={i} key={index} />
            )
        )}
        {/*<Message img={fifth}/>*/}
        {/*<Message img={premium}/>*/}
        {/*<Message img={fifth}/>*/}
        {/*<Message img={premium}/>*/}
        {/*<Message img={fifth}/>*/}
        {/*<Message img={premium}/>*/}
        {/*<Message img={fifth}/>*/}
        {/*<Message img={premium}/>*/}

    </div>
)

export const Message = ({img}: any) => {
    const [isBouncing, setIsBouncing] = useState(false);
    return (
        <Flex
            onClick={() => {
                setIsBouncing(true);
                setTimeout(() => setIsBouncing(false), 500); // Сброс анимации через 500 мс
            }}
            align={"center"} justify={"space-between"}
            className={`
                border-b-1 hover:border-none border-gray-200 h-[55px] cursor-pointer hover:bg-gray-200 hover:rounded-xl  ${isBouncing ? "animate-press" : ""}
            `}>

            <Image
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    objectFit: "cover", // Центрирование и масштабирование картинки
                }}
                src={img}
                preview={false}
            />
            {/*<div className={"bg-red-500 rounded-full w-10 h-10"}></div>*/}

            <Flex justify={"space-between"} className={"w-4/5"}>
                <div>
                    <div><b>Friends Forever</b></div>
                    <div className={"text-gray-400"}>Hahahahah!</div>
                </div>
                <Flex vertical justify={"end"} align={"end"}>
                    <div className={"text-[#7C7C7C] text-[12px]"}>Today, 9.52pm</div>
                    <RiCheckDoubleFill style={{color: "#9747FF", fontSize: "20px"}}/>
                </Flex>
            </Flex>
        </Flex>

    )
};