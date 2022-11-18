import { FC, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

import Header from './com/Header';
import ToDoList from './com/ToDoList';
import Footer from './com/Footer';

import type { ToDoItemType } from './type';

import styles from './index.less';

const ToDo: FC = () => {
  const [todos, setToDos] = useState<ToDoItemType[]>([]);

  const handleAdd = (content: string) => {
    if (!(content && content.trim())) {
      return;
    }
    setToDos([
      ...todos,
      {
        id: Date.now(),
        content,
        complete: false,
      },
    ]);
  };

  return (
    <PageContainer>
      <Card title={'To Do List'}>
        <Header onAdd={handleAdd}></Header>
        <ToDoList todos={todos}></ToDoList>
        <Footer></Footer>
      </Card>
    </PageContainer>
  );
};

export default ToDo;
