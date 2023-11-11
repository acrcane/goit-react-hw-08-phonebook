import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
    selectUser,
    selectIsAuthError,
    selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isAuthError = useSelector(selectIsAuthError);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        isLoggedIn,
        user,
        isAuthError,
        isRefreshing,
    };
};