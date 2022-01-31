import React, { lazy, Suspense } from 'react';

const LazyClient = lazy(() => import('./Client'));

const Client = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClient {...props} />
  </Suspense>
);

export default Client;
