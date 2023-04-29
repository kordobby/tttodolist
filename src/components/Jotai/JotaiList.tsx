import { todoAtom } from "./store/JotaiStore";
import { Button, Card, Space } from "antd";
import { useAtom } from "jotai";

interface TodoCardInterface {
  title: string;
  contents: string;
  id: number;
}
const TodoCard = ({ title, contents, id }: TodoCardInterface) => {
  const [todoList, setTodoList] = useAtom(todoAtom);

  const onDeleteTodo = (id: number) => {
    const newArray = todoList.filter((value) => value.id !== id);
    setTodoList(newArray);
  };

  return (
    <Card
      title={title}
      extra={<Button onClick={() => onDeleteTodo(id)}>삭제</Button>}
    >
      <p>{contents}</p>
    </Card>
  );
};

export type TodoType = {
  title: string;
  contents: string;
  id: number;
};

const JotaiList = () => {
  const [todoList, setTodoList] = useAtom(todoAtom);

  return (
    <Space>
      <Space>{/* <p>{todoCount}</p> */}</Space>
      {todoList?.map((value, index) => {
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

export default JotaiList;
