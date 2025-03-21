import {Flex, Image, Typography} from 'antd';
import {useState} from "react";
import group from "../../../assets/group.jpg";



export const GroupList = () => (
    <div className={"h-1/3 bg-white p-4 rounded-[20px] border-blue-200 shadow-md shadow-blue-200 overflow-y-auto"}>
        <Typography.Title level={3}>
            Groups
        </Typography.Title>

        <Group />
        <Group />
        <Group />
        <Group />
        <Group />

    </div>
)




export const Group = () => {
    const [isBouncing, setIsBouncing] = useState(false);

    return(
        // добавить padding
        <Flex
            onClick={() => {
                setIsBouncing(true);
                setTimeout(() => setIsBouncing(false), 500); // Сброс анимации через 500 мс
            }}
            align={"center"} justify={"space-between"}
            className={`
                p-2 border-b-1 border-gray-200 h-[55px] cursor-pointer hover:bg-gray-200 hover:border-none transition duration:700 hover:rounded-xl ${isBouncing ? "animate-press" : ""}
            `}>

            <Image
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    objectFit: "cover", // Центрирование и масштабирование картинки
                }}
                src={group}
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
                    <div className={"bg-[#F24E1E] w-4 h-4 rounded-full text-white text-[10px] flex justify-center align-center"}>4</div>
                </Flex>
            </Flex>
        </Flex>
    )
};
