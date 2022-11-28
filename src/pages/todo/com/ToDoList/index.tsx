import { FC } from 'react';
import type { ToDoItemType } from '../../data';

import ToDoItem from '../ToDoItem';

type Props = {
  todos: ToDoItemType[];
  onDel: (id: number) => void;
  onComplete: (id: number) => void;
};

const ToDoList: FC<Props> = (props) => {
  const { todos, ...rest } = props;
  return (
    <div>
      {todos.map((item) => {
        return <ToDoItem key={item.id} todo={item} {...rest}></ToDoItem>;
      })}
    </div>
  );
};

export default ToDoList;
