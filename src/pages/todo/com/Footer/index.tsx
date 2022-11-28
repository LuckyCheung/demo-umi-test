import React, { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';

import { ToDoContext } from '../../index';
import { Visibility } from '../../useTodo';

type Props = {
  remaining: number;
  total: number;
};

const Footer: React.FC<Props> = (props) => {
  const { remaining, total } = props;
  const {
    visibility,
    setVisibility,
    onToggleAll,
    onClearCompleted,
  } = useContext(ToDoContext);

  const VisibilityText = {
    [Visibility.All]: 'All',
    [Visibility.Active]: 'Active',
    [Visibility.Completed]: 'Completed',
  };

  const buttons = Object.values(Visibility).map((item) => {
    return {
      id: item,
      text: VisibilityText[item],
    };
  });

  const handleToggle = (id: string) => {
    setVisibility(id);
  };

  return (
    <Row style={{ marginTop: '10px' }} justify="space-between">
      <Col span={8}>
        <strong>{remaining} </strong>
        <span>{remaining === 1 ? 'item' : 'items'} left</span>
      </Col>
      <Col span={8}>
        <Space>
          {buttons.map((item) => {
            return (
              <Button
                key={item.id}
                type={item.id === visibility ? 'primary' : 'default'}
                danger={item.id === visibility ? true : false}
                onClick={() => {
                  handleToggle(item.id);
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </Space>
      </Col>
      <Col span={8}>
        <Row justify="end">
          <Space>
            {total > remaining ? (
              <Button onClick={onClearCompleted}>Clear Completed</Button>
            ) : null}
            <Button onClick={onToggleAll}>Toggle All</Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
