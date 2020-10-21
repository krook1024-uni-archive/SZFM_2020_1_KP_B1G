import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3004'); // todo: move this to a config

const App = () => {
    return <Admin dataProvider={dataProvider}>{/* TODO */}</Admin>;
};

export default App;
