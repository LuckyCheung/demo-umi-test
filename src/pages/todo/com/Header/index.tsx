import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
  onAdd: (value: string) => void;
}
const Header: React.FC<Props> = (props) => {
  const [content, setContent] = useState('');

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const hasContent = content && content.trim();
    if (!hasContent) {
      return;
    }
    props.onAdd?.(content);
    setContent('');
  };
  return (
    <Input.Group compact>
      <Input
        style={{ width: 'calc(100% - 100px)' }}
        value={content}
        placeholder="请输入"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setContent(e.target.value);
        }}
        onPressEnter={handlePressEnter}
      />
      <Button icon={<PlusOutlined />} />
    </Input.Group>
  );
};

export default Header;
