import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Index: FC<{ title: string }> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Index;
