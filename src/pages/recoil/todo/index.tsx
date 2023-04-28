import { NextPage } from "next";
import { Form, Input, Row, Button } from "antd";
import { atom, useRecoilState } from "recoil";
import RecoilList from "@/components/Recoil/RecoilList";

export const todoState = atom({
  key: "todos",
  default: [
    {
      title: "",
      contents: "",
    },
  ],
});

const TodoPage: NextPage = () => {
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const contents = Form.useWatch("contents", form);
  const [todoList, setTodoList] = useRecoilState(todoState);

  const onAddTodo = () => {
    setTodoList([...todoList, { title, contents }]);
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        form={form}
        name="recoil-todo"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onValuesChange={(changedValues, values) => {
          console.log(values);
        }}
        layout="vertical"
        style={{
          width: 600,
        }}
        initialValues={{}}
        autoComplete="off"
        // labelAlign="left"
      >
        <Form.Item
          label="제목"
          name="title"
          rules={[
            {
              required: true,
              message: "오늘의 할 일은?",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="내용"
          name="contents"
          rules={[
            {
              required: true,
              message: "오늘의 할 일은?",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="">
          <Button onClick={onAddTodo} type="primary" htmlType="submit">
            추가하기
          </Button>
        </Form.Item>
      </Form>
      <RecoilList />
    </Row>
  );
};

export default TodoPage;
