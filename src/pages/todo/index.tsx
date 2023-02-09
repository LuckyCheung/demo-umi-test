import React, { createContext } from 'react';
import { Card } from 'antd';

import Header from './com/Header';
import ToDoList from './com/ToDoList';
import Footer from './com/Footer';

import useTodo from './useTodo';

import styles from './index.less';

export const ToDoContext = createContext<Record<string, any>>({});

const ToDo: React.FC = () => {
  const {
    editCacheId,
    setEditCacheId,
    visibility,
    setVisibility,
    filterTodos,
    remaining,
    todos,
    onAdd,
    onDel,
    onEdit,
    onComplete,
    onToggleAll,
    onClearCompleted,
  } = useTodo();

  return (
    <ToDoContext.Provider
      value={{
        editCacheId,
        setEditCacheId,
        visibility,
        setVisibility,
        onEdit,
        onToggleAll,
        onClearCompleted,
      }}
    >
      <Card title="To Do List">
        <Header onAdd={onAdd} />
        <ToDoList todos={filterTodos} onDel={onDel} onComplete={onComplete} />
        {todos.length ? (
          <Footer total={todos.length} remaining={remaining} />
        ) : null}
      </Card>
    </ToDoContext.Provider>
  );
};

export default ToDo;
