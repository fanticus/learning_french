import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './navigation/Navigator'
import store from './store'

const App = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);

export default App
