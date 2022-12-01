import React, { useContext, useEffect, useRef } from 'react';
import { Row, Col, Radio, Input, Button } from 'antd';
import type { InputRef } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { ToDoContext } from '../../index';
import type { ToDoItemType } from '../../data';

import styles from './index.less';

function noop() {}
const ESC_KEY_CODE = 'Escape';
const ENTER_KEY_CODE = 'Enter';

type Props = {
  todo: ToDoItemType;
  onDel: (id: number) => void;
  onComplete: (id: number) => void;
};

const ToDoItem: React.FC<Props> = (props) => {
  const { todo, onComplete, onDel } = props;
  const { editCacheId, setEditCacheId, onEdit } = useContext(ToDoContext);

  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    editCacheId === todo.id && inputRef.current?.focus();
  }, [editCacheId]);

  const handleComplete = () => {
    onComplete(todo.id);
  };

  const handleStartEdit = () => {
    setEditCacheId(todo.id);
  };

  const handleCancel = () => {
    setEditCacheId(-1);
  };

  const handleEdit = (e: React.FocusEvent<HTMLInputElement>) => {
    onEdit(todo.id, e.target.value);
    handleCancel();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ESC_KEY_CODE) {
      handleCancel();
    }
    if (e.key === ENTER_KEY_CODE) {
      const value = e.currentTarget.value;
      onEdit(todo.id, value);
      handleCancel();
    }
  };

  const handleDel = () => {
    onDel(todo.id);
  };

  return (
    <Row className={styles.row}>
      <Col className={styles.center} span={1}>
        <Radio checked={todo.complete} onClick={handleComplete}></Radio>
      </Col>
      <Col
        className={styles.center}
        span={22}
        onDoubleClick={todo.id === editCacheId ? noop : handleStartEdit}
      >
        {todo.id === editCacheId ? (
          <Input
            ref={inputRef}
            defaultValue={todo.content}
            onBlur={handleEdit}
            onKeyUp={handleKeyUp}
          ></Input>
        ) : (
          <div className={todo.complete ? styles.complete : ''}>
            {todo.content}
          </div>
        )}
      </Col>
      <Col className={`${styles.center} ${styles.del}`} span={1}>
        <Button
          type="primary"
          danger
          shape="circle"
          size="small"
          icon={<CloseOutlined />}
          onClick={handleDel}
        />
      </Col>
    </Row>
  );
};

export default ToDoItem;
