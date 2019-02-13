import React from 'react';

const MyContext = React.createContext({
  testContext: (x = "TEST") => x,
  handleClick2: (id) => {
    return id;
  },
});
export default MyContext;
