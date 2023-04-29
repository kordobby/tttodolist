import { NextPage } from "next";
import { Divider, Row } from "antd";
import ZustandForm from "@/components/Zustand/ZustandForm";
import ZustandlList from "@/components/Zustand/ZustandList";

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
      <ZustandForm />
      <Divider plain>TodoList</Divider>
      <ZustandlList />
    </Row>
  );
};

export default TodoPage;
