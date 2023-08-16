import React from 'react';

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const stx = React.useContext(Context);

    if (stx === undefined) {
      throw new Error(
        `useContext must be inside a Provider and a value must be provided`,
      );
    }

    return stx;
  };

  return [useContext, Context.Provider] as const;
};
