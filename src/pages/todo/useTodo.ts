import { useState, useEffect, useCallback, useMemo } from 'react';
import type { ToDoItemType } from './data';
import type { RootState } from '@/store/index';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodos, STORAGE_KEY } from '@/store/modules/todo';

export enum Visibility {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

const useTodo = () => {
  const todos: ToDoItemType[] = useSelector(
    (state: RootState) => state.todo.todos,
  );
  const dispatch = useDispatch();
  const setToDos = (todos: ToDoItemType[]) => {
    dispatch(
      updateTodos({
        todos,
      }),
    );
  };
  const [editCacheId, setEditCacheId] = useState(-1);
  const [visibility, setVisibility] = useState(Visibility.All);

  // 数据持久化
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // read
  const filters = useMemo(() => {
    return {
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
  }, [todos]);

  const filterTodos = useMemo(() => {
    return filters[visibility]();
  }, [visibility, todos]);

  const remaining = useMemo(() => {
    return filters[Visibility.Active]().length;
  }, [todos]);

  // create
  const onAdd = useCallback(
    (content: string) => {
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
    },
    [todos],
  );

  // update
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

  // delete
  const onDel = (id: number) => {
    setToDos(todos.filter((item) => item.id !== id));
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
