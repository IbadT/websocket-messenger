import {SearchOutlined} from "@ant-design/icons";
import Input from "antd/es/input/Input";

export const SearchField = () => (
    <div className={" h-15 bg-white rounded-[20px] border-blue-200 shadow-md shadow-blue-200"}>
        <div className={"h-full text-[#7C7C7C] flex items-center mx-3"}>
            <Input
                size={"large"}
                style={{ border: "none", background: "#fff", boxShadow: "none" }}
                placeholder={"Type your message here..."}
                prefix={<SearchOutlined style={{fontSize: "24px"}} />}
            />
        </div>
    </div>
)