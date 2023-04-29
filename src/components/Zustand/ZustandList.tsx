import { zustandTodo } from "./store/ZustandStore";
import { Button, Card, Space } from "antd";

interface TodoCardInterface {
  title: string;
  contents: string;
  id: number;
}

const TodoCard = ({ title, contents, id }: TodoCardInterface) => {
  const { deleteTodo } = zustandTodo();

  return (
    <Card
      title={title}
      extra={<Button onClick={() => deleteTodo(id)}>삭제</Button>}
    >
      <p>{contents}</p>
    </Card>
  );
};

type TodoType = {
  title: string;
  contents: string;
  id: number;
};

const ZustandlList = () => {
  const { state } = zustandTodo();

  return (
    <Space>
      <Space>{/* <p>{todoCount}</p> */}</Space>
      {state?.map((value, index) => {
        return (
          <TodoCard
            key={`recoil-${value.id}-${index}`}
            title={value.title}
            contents={value.contents}
            id={value.id}
          />
        );
      })}
    </Space>
  );
};

export default ZustandlList;
