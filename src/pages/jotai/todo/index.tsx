import { NextPage } from "next";
import { Divider, Row } from "antd";
import JotaiForm from "@/components/Jotai/JotaiForm";
import JotaiList from "@/components/Jotai/JotaiList";

const TodoPage: NextPage = () => {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Divider plain>TodoForm</Divider>
      <JotaiForm />
      <Divider plain>TodoList</Divider>
      <JotaiList />
    </Row>
  );
};

export default TodoPage;
