import React, { useState, memo } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type Props = {
  onAdd: (value: string) => void;
};
const Header: React.FC<Props> = (props) => {
  const [content, setContent] = useState('');

  const handleAdd = () => {
    const hasContent = content && content.trim();
    if (!hasContent) {
      return;
    }
    props.onAdd(content);
    setContent('');
  };

  return (
    <Input.Group compact>
      <Input
        style={{ width: 'calc(100% - 40px)' }}
        value={content}
        placeholder="请输入"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setContent(e.target.value);
        }}
        onPressEnter={handleAdd}
      />
      <Button icon={<PlusOutlined />} onClick={handleAdd} />
    </Input.Group>
  );
};

export default memo(Header);
