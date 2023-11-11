import PropTypes from "prop-types";
import { SearchList, ContactItem, Text, Button } from './ContactListItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

import { useState } from "react";
import Modal from "components/Modal/Modal";
import EditForm from "components/EditForm/EditForm";
import { Notify } from "notiflix";

export const ContactListItem = ({ renderListItem: { id, name, number } }) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        if (showModal) {
        setShowModal(false);
        };
    };

    const openModal = () => {
        if (!showModal) {
        setShowModal(true);
        };
    };
    
    const dispatch = useDispatch();

    const handleDeletContact = ()=>{
        dispatch(deleteContact(id));
        Notify.success(`Contact   "${name}"  deleted`, Notify.init({
            clickToClose: true,
            position: 'center-top',
        }));
    }

    return ( 

        <ContactItem key={id}>
        <SearchList>
            <Text>{name}:</Text>
            <Text>{number}</Text>
        </SearchList>
        <div style={{display: "flex", gap: '10px'}}>
            <Button type="button" style={{width:'36px'}} onClick={openModal}>
            Edit
        </Button>
            <Button type="button" onClick={handleDeletContact}>
            Delete
        </Button>
        </div>
        {showModal &&
            <Modal onClose={closeModal}>
            <EditForm
                id={id}
                name={name}
                number={number}
                onClose={closeModal}
            />
            </Modal>}
        </ContactItem>  
    );
};

ContactListItem.propTypes = {
    renderListItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};