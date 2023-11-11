import PropTypes from 'prop-types';
import { useEffect } from "react";
import { ModalOverlay, ModalField, Box } from './Modal.styled';
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
    useEffect(() => {
        const handleOnClose = (event) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleOnClose);

        return () => {
            window.removeEventListener('keydown', handleOnClose);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <ModalOverlay onClick={(e) => handleBackdropClick(e)}>
            <ModalField>
                <Box>{children}</Box>
            </ModalField>
        </ModalOverlay>,
        document.getElementById('modal-root') || document.body
    );
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;






