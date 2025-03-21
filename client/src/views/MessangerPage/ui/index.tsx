import {Dashboard} from "../../../widgets/dashboard";
import {SearchField} from "../../../widgets/searchField";
import {MessageField} from "../../../widgets/message";
import {Col, Flex} from "antd";
import {GroupList} from "../../../widgets/groupList";
import {MessageList} from "../../../widgets/messageList";

export const MessengerPage = () => (
    <div className={"bg-[#EFF6FC] w-full h-screen p-10 flex justify-between"}>
        <Col style={{ width: '7%' }}>
            <Dashboard />
        </Col>

        <Col span={6} >
            <Flex vertical justify={"space-between"} className={"h-full"}>
                <SearchField />
                <GroupList />
                <MessageList />
            </Flex>
        </Col>

        <Col span={15}>
            <MessageField />
        </Col>
    </div>
)