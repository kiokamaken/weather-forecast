import React from 'react';
import { Row as AntdRow } from 'antd';

const Row = ({ children, gutter, ...rest }: any) => (
  <AntdRow gutter={gutter ?? [16, { xs: 8, sm: 16, md: 24, lg: 32 }]} {...rest}>
    {children}
  </AntdRow>
);

export default Row;
