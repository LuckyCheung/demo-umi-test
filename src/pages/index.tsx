import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Col, Row } from 'antd';
import { history } from 'umi';
import styles from './index.less';

const IndexPage: FC = () => {
  function handleGoToDoList() {
    history.push('/test/todo');
  }
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <h1 className={styles.title}>Page index</h1>
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <h2 onClick={handleGoToDoList}>go todolist</h2>
        </Card>
      </Col>
    </Row>
  );
};

export default IndexPage;
