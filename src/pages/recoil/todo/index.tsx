import { NextPage } from "next";
import { Row } from "antd";
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
      <RecoilForm />
      <RecoilList />
    </Row>
  );
};

export default TodoPage;
