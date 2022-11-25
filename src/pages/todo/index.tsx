import React, { useState, createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

import Header from './com/Header';
import ToDoList from './com/ToDoList';
import Footer from './com/Footer';

import type { ToDoItemType } from './data';

import styles from './index.less';

export const ToDoContext = createContext<Record<string, any>>({});

export enum Visibility {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

const ToDo: React.FC = () => {
  const [todos, setToDos] = useState<ToDoItemType[]>([]);
  const [editCacheId, setEditCacheId] = useState(-1);
  const [visibility, setVisibility] = useState(Visibility.All);

  const filters = {
    [Visibility.All]: () => {
      return todos;
    },
    [Visibility.Active]: () => {
      return todos.filter((item) => !item.complete);
    },
    [Visibility.Completed]: () => {
      return todos.filter((item) => item.complete);
    },
  };

  const filterTodos = () => {
    return filters[visibility]();
  };

  const remaining = () => {
    return filters[Visibility.Active]().length;
  };

  const onAdd = (content: string) => {
    if (!(content && content.trim())) {
      return;
    }
    setToDos(
      todos.concat({
        id: Date.now(),
        content,
        complete: false,
      }),
    );
  };

  const onDel = (id: number) => {
    setToDos(todos.filter((item) => item.id !== id));
  };

  const onEdit = (id: number, value: string) => {
    setToDos(
      todos.map((item) =>
        item.id === id ? { ...item, content: value } : item,
      ),
    );
  };

  const onComplete = (id: number) => {
    setToDos(
      todos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item,
      ),
    );
  };

  const onToggleAll = () => {
    const isComplete = remaining() === 0 ? false : true;
    setToDos(
      todos.map((item) => {
        return { ...item, complete: isComplete };
      }),
    );
  };

  const onClearCompleted = () => {
    setToDos(filters[Visibility.Active]());
  };

  return (
    <ToDoContext.Provider
      value={{
        editCacheId,
        setEditCacheId,
        visibility,
        setVisibility,
        onDel,
        onEdit,
        onComplete,
        onToggleAll,
        onClearCompleted,
      }}
    >
      <PageContainer>
        <Card title="To Do List">
          <Header onAdd={onAdd}></Header>
          <ToDoList todos={filterTodos()}></ToDoList>
          {todos.length ? (
            <Footer total={todos.length} remaining={remaining()}></Footer>
          ) : null}
        </Card>
      </PageContainer>
    </ToDoContext.Provider>
  );
};

export default ToDo;
