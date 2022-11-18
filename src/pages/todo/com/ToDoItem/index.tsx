import { FC, useState } from 'react';
import type { ToDoItemType } from '../../type';

interface Props {
  todo: ToDoItemType;
}

const ToDoItem: FC<Props> = (props) => {
  return (
    <div>
      <div>{props.todo.content}</div>
    </div>
  );
};

export default ToDoItem;
