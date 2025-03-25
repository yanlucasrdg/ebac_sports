import { Provider } from 'react-redux';
import { store } from './store';
import ReactDOM = require('react-dom');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} children={''}>
  </Provider>
);