import { createContext } from 'react';

const ApiContext = createContext({
  api: 'http://localhost:4040/api/',
});

export default ApiContext;
