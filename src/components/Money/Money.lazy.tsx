import React, { lazy, Suspense } from 'react';

const LazyMoney = lazy(() => import('./Money'));

const Money = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMoney {...props} />
  </Suspense>
);

export default Money;
