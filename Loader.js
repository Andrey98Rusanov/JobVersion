import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import { Spin } from 'antd';
import "./Loader.css"
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 48,
    }}
    spin
  />
);
const Loader = () => <Spin indicator={antIcon} />;
export default Loader;
