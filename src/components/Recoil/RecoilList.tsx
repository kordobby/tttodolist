import { todoState } from "@/pages/recoil/todo";
import { Card, Space } from "antd";
import { FC } from "react";
import { selector, useRecoilValue } from "recoil";

interface TodoCardInterface {
  title: string;
  contents: string;
}
const TodoCard = ({ title, contents }: TodoCardInterface) => {
  return (
    <Card title={title}>
      <p>{contents}</p>
    </Card>
  );
};

type TodoType = {
  title: string;
  contents: string;
};

const RecoilList = () => {
  const todoListState = selector({
    key: "todotodo",
    get: ({ get }) => {
      const todos = get(todoState);

      return todos.length;
    },
  });

  const todoList = useRecoilValue(todoState);
  const todoCount = useRecoilValue(todoListState);

  return (
    <Space>
      <p>{todoCount}</p>
      {todoList?.map((value, index) => {
        return (
          <TodoCard
            key={`recoil-${index}`}
            title={value.title}
            contents={value.contents}
          />
        );
      })}
    </Space>
  );
};

export default RecoilList;
