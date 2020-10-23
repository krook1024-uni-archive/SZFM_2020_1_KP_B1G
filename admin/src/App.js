import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UserList'

const dataProvider = jsonServerProvider('http://localhost:3004'); // todo: move this to a config

const App = () => {
    return <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} />
    </Admin>;
};

export default App;
