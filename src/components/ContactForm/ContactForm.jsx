import { useState } from "react";

import { FormStyle, Label, Input, Button, Text } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux"; 
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { Notify } from "notiflix";


export const ContactForm = ({ onClose }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contact = {
            name: name,
            number: number,
    }
    
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
            event.preventDefault();

    const newContactName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim());
    if (newContactName) {
        Notify.failure(`Name  "${name}"  is already in contacts`, Notify.init({
            clickToClose: true,
            position: 'center-top',
        }));
        return;
    }

    const newContactNumber = contacts.find(contact => contact.number === number);
    if (newContactNumber) {
        Notify.failure(`Phone   "${number}"  is already in contacts`, Notify.init({
            clickToClose: true,
            position: 'center-top',
        }));
        return;
    }

    dispatch(addContact(contact));


    Notify.success(`Contact "${name}" added in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
    }));

    reset();
    };

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

        default:
            return;
        }
    };


  const reset = () => {
    setName('');
    setNumber('');
  };


    return(
        <>
        <form onSubmit={handleSubmit}>
            <FormStyle>      
            <Text>Add new contact</Text>
        <Label>
            Name 
            <Input
            type='text' 
            name='name'
            value={name} 
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required='Name required'
            />
        </Label> 

        <Label>
            Phone 
            <Input
            type='tel' 
            name='number'
            value={number} 
                onChange={handleChange}
                placeholder="_ _ _ - _ _ _ - _ _ _ _"
            pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required='Phone number required'
            />
        </Label> 
            <div style={{ display: 'flex', gap: '140px', margin:'auto'}}>
                <Button type="submit" disabled={!name || !number} >Add contact</Button>
                <Button type="button" onClick={onClose}>Cancel</Button>
            </div>
            
        </FormStyle>
        </form>
        </>
    )
}