import { FC } from 'react';
import type { ToDoItemType } from '../../data';

import ToDoItem from '../ToDoItem';

type Props = {
  todos: ToDoItemType[];
};

const ToDoList: FC<Props> = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((item) => {
        return <ToDoItem key={item.id} todo={item}></ToDoItem>;
      })}
    </div>
  );
};

export default ToDoList;
