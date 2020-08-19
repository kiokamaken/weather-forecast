import React from 'react';
import { Spin } from 'antd';
import {
  LoadingOutlined,
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';

interface StatusIndicator {
  loading: boolean;
  success?: boolean;
  warning?: boolean;
}

const StatusIndicator = (props: StatusIndicator) => {
  const { loading, success, warning } = props;
  return (
    <>
      {loading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {success && <CheckCircleTwoTone style={{ fontSize: 24 }} />}
      {warning && <ExclamationCircleTwoTone twoToneColor="red" style={{ fontSize: 24 }} />}
    </>
  );
};

export default React.memo(StatusIndicator);
