import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/filter';
import { Box } from './ContactsPage.styled';
import { Text } from './ContactsPage.styled';
import {
  useContact
} from 'hooks';
import { RotatingLines } from 'react-loader-spinner';
import { Helmet } from 'react-helmet-async';
import { Button } from 'components/ContactForm/ContactForm.styled';
import Modal from 'components/Modal/Modal';




export default function ContactsPage() {
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

    const { isLoading, error } = useContact();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
        <Helmet>
            <title>Contacts</title>
        </Helmet>


        <Box>
            {error && <p>{error}</p>}
            {isLoading ? (
            <RotatingLines
                strokeColor="rgb(11, 127, 171)"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
            ) : (
            <>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    
                }}>
                    <Text>Contacts</Text>
                    <Button type="button"  onClick={openModal}>Add contact</Button>
                </div>
                <Filter />
                <ContactList />
                {showModal &&
            <Modal onClose={closeModal}>
            <ContactForm
                onClose={closeModal}
            />
            </Modal>}
            </>
            )}
        </Box>
        </>
    );
}