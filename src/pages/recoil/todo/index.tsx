import { NextPage } from "next";
import { Divider, Row } from "antd";
import RecoilList from "@/components/Recoil/RecoilList";
import RecoilForm from "@/components/Recoil/RecoilForm";

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
      <RecoilForm />
      <Divider plain>TodoList</Divider>
      <RecoilList />
    </Row>
  );
};

export default TodoPage;
