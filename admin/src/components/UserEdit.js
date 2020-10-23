import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled></TextInput>
                <DateInput source='createdAt' disabled></DateInput>
                <TextInput source='email'></TextInput>
                <TextInput source='password'></TextInput>
                <DateInput source='dateOfBirth'></DateInput>
                <TextInput source='licenseCategory'></TextInput>
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
