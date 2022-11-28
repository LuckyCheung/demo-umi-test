import React, { createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
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
      <PageContainer>
        <Card title="To Do List">
          <Header onAdd={onAdd}></Header>
          <ToDoList
            todos={filterTodos}
            onDel={onDel}
            onComplete={onComplete}
          ></ToDoList>
          {todos.length ? (
            <Footer total={todos.length} remaining={remaining}></Footer>
          ) : null}
        </Card>
      </PageContainer>
    </ToDoContext.Provider>
  );
};

export default ToDo;
