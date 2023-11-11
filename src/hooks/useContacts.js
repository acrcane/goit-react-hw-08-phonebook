import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const useContact = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return {
        error,
        isLoading,
    };
};