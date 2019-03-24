import React from 'react';

import Spinner from '../ui/spinner/spinner';

export interface InjectedProps {
  isLoading: boolean;
  errorOccured: boolean;
  children: JSX.Element;
}

const withHandleLoading = ({isLoading, errorOccured, children}: InjectedProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (errorOccured) {
    return <div>error</div>;
  }

  return children;
}

export default withHandleLoading;