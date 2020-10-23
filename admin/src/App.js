import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UserList'
import RentList from './components/RentList'

const dataProvider = jsonServerProvider('http://localhost:3004'); // todo: move this to a config

const App = () => {
    return <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} />
        <Resource name='rents' list={RentList} />
    </Admin>;
};

export default App;
