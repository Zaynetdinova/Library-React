import React from 'react';

const {
  Provider: CommonProvider,
  Consumer: CommonConsumer
} = React.createContext();

// export const context = React.createContext();
//
// console.log(context)
//
// export const CommonProvider = context.Provider;
// export const CommonConsumer = context.Consumer;

export {
  CommonProvider,
  CommonConsumer
}