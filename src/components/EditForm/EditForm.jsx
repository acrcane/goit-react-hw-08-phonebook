import PropTypes from 'prop-types';
import { FormStyle, Label, Input, Button ,Text} from "./EditForm.styled";

import { useDispatch, useSelector } from "react-redux"; 
import {  editContact } from "redux/operations";
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';


const EditForm = ({ onClose, id, name, number }) => {
  
    const dispatch = useDispatch();
    
    const initialName = name;
    const initialNumber = number;
    
        
    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number);

    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();

        const editContactName = contacts.find(contact => contact.name.toLowerCase() === editName.toLowerCase().trim());
        
        const editContactNumber = contacts.find(contact => contact.number === editNumber);
        if (editContactName & !editContactNumber) {
        Notify.failure(`Name  "${editName}"  is already in contacts`, Notify.init({
            clickToClose: true,
            position: 'center-top',
        }));
        return;
        }
        if (editContactNumber & !editContactName) {
        Notify.failure(`Phone   "${editNumber}"  is already in contacts`, Notify.init({
            clickToClose: true,
            position: 'center-top',
        }));
        return;
        }

        
        const form = event.currentTarget;
        dispatch(editContact({
        id,
        name: form.elements.name.value,
        number: form.elements.number.value,
        }));

        setTimeout(() => {
        dispatch(editContact())
        }, 500);

        if (initialName !== editName) {
        Notify.success(`Contact   "${initialName}"  has been changed to "${editName}"`, Notify.init({
            clickToClose: true,
            position: 'center-top',
            }));
        }
        if (initialNumber !== editNumber) {
        Notify.success(`Contact   "${initialName}"  number changed "`, Notify.init({
            clickToClose: true,
            position: 'center-top',
            }));
        }

        form.reset();
    };




    return(
        <>
        <form onSubmit={handleSubmit}>
        <FormStyle>      
            <Text>Edit contact</Text>
        <Label>
            Name 
            <Input
            type='text' 
            name='name'
            defaultValue={initialName} 
            onChange={(event) => setEditName(event.target.value)}
            placeholder="John Smith"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </Label> 

        <Label>
            Phone 
            <Input
            type='tel' 
            name='number'
            defaultValue={initialNumber} 
            onChange={(event) => setEditNumber(event.target.value)}
            placeholder="_ _ _ - _ _ _ - _ _ _ _"
            pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        </Label> 

            <div style={{ display: 'flex', gap: '20px', }}>
                <Button
                type="submit"
                disabled={initialName === editName & initialNumber === editNumber}
                >Save</Button>
                <Button type="button" onClick={onClose}>Cancel</Button>
            </div>
        </FormStyle>
        </form>
        </>
    )
}

export default EditForm;

EditForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};