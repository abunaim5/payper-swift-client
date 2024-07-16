import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const checkAuthStatus = async () => {
            const storedEmailOrNumber = localStorage.getItem('email-or-number');
            if (storedEmailOrNumber) {
                try {
                    const userInfo = storedEmailOrNumber;
                    const res = await axiosPublic.post('/jwt', userInfo)
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setUser({ emailOrNumber: storedEmailOrNumber });
                    } else {
                        localStorage.removeItem('access-token');
                    }
                } catch (error) {
                    console.error('Error from auth status', error);
                    localStorage.removeItem('access-token')
                }
            }
            setLoading(false);
        };

        checkAuthStatus();
    }, [axiosPublic]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('email-or-number', userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('email-or-number');
        localStorage.removeItem('access-token');
    }

    const authInfo = {
        user,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;