import React from 'react';
import { Spin } from 'antd';
import {
  LoadingOutlined,
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';

export interface StatusIndicatorProps {
  loading: boolean;
  success?: boolean;
  warning?: boolean;
}

const StatusIndicator = (props: StatusIndicatorProps) => {
  const { loading, success, warning } = props;
  return (
    <>
      {loading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {!loading && success && <CheckCircleTwoTone style={{ fontSize: 24 }} />}
      {!loading && warning && (
        <ExclamationCircleTwoTone twoToneColor="red" style={{ fontSize: 24 }} />
      )}
    </>
  );
};

export default React.memo(StatusIndicator);
