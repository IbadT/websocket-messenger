import {BellOutlined, SettingOutlined} from "@ant-design/icons";
import { ImExit } from "react-icons/im";
import first from '../../../assets/first.jpg';

import {Flex, Image} from "antd";
import {MdHome} from "react-icons/md";
import {LuMessageCircleMore} from "react-icons/lu";

export const Dashboard = () => (
    <div className={"bg-[#6E00FF] h-[100%] rounded-[18px] flex justify-center py-7"}>

        <Flex vertical justify={"space-between"} className={"w-full"}>

            <Flex vertical align={"center"} justify={"space-between"} className={"h-2/3"}>
                <Image
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover", // Центрирование и масштабирование картинки
                    }}
                    src={first}
                    preview={false}
                />

                <Flex vertical align={"center"} justify={"space-between"} className={"text-white h-3/4 w-full"} style={{fontSize: "50px"}}>

                    <Flex justify={"center"} align={"center"} className={"w-full h-15 cursor-pointer hover:text-black transition-all duration:500 hover:bg-[#612DD1] hover:border-r-5 hover:border-[#F3B559]"}>
                        <MdHome />
                    </Flex>

                    <Flex justify={"center"} align={"center"} className={"w-full h-15 cursor-pointer hover:text-black transition-all duration:500 hover:bg-[#612DD1] hover:border-r-5 hover:border-[#F3B559]"}>
                        <LuMessageCircleMore />
                    </Flex>

                    <Flex justify={"center"} align={"center"} className={"w-full h-15 cursor-pointer hover:text-black transition-all duration:500 hover:bg-[#612DD1] hover:border-r-5 hover:border-[#F3B559]"}>
                        <BellOutlined />
                    </Flex>

                    <Flex justify={"center"} align={"center"} className={"w-full h-15 cursor-pointer hover:text-black transition-all duration:500 hover:bg-[#612DD1] hover:border-r-5 hover:border-[#F3B559]"}>
                        <SettingOutlined />
                    </Flex>

                </Flex>
            </Flex>


            <Flex align={"center"} justify={"center"} className={"text-white"} style={{fontSize: "50px"}}>
                <div className={"cursor-pointer hover:text-black transition-all duration:500"}>
                    <ImExit />
                </div>
            </Flex>

        </Flex>
    </div>
)