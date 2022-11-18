import { FC } from 'react';
import type { ToDoItemType } from '../../type';

import ToDoItem from '../ToDoItem';

interface Props {
  todos: ToDoItemType[];
}

const ToDoList: FC<Props> = (props) => {
  return (
    <div>
      {props.todos.map((item) => {
        return <ToDoItem key={item.id} todo={item}></ToDoItem>;
      })}
    </div>
  );
};

export default ToDoList;
