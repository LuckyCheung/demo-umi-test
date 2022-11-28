import { useState, useEffect } from 'react';
import type { ToDoItemType } from './data';

export enum Visibility {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

const useTodo = () => {
  const STORAGE_KEY = 'vue-todomvc';
  const [todos, setToDos] = useState<ToDoItemType[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  );
  const [editCacheId, setEditCacheId] = useState(-1);
  const [visibility, setVisibility] = useState(Visibility.All);

  // 数据持久化
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  const [filterTodos, setFilterTodos] = useState<ToDoItemType[]>([]);
  useEffect(() => {
    setFilterTodos(filters[visibility]());
  }, [visibility, todos]);

  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    setRemaining(filters[Visibility.Active]().length);
  }, [todos]);

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
    const isComplete = remaining === 0 ? false : true;
    setToDos(
      todos.map((item) => {
        return { ...item, complete: isComplete };
      }),
    );
  };

  const onClearCompleted = () => {
    setToDos(filters[Visibility.Active]());
  };

  return {
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
  };
};

export default useTodo;
