import React, {createContext,useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

// context

const AuthContext = createContext();

// provider
const AuthProvider = ({children})=> {
    
    const [state,setState] = useState({
        user:null,
        token:'',
    });

    //default axios settings
    axios.defaults.baseURL = 'http://192.168.1.43:8080/api/v2'



    // local storage data
    useEffect( ()=> {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem('@auth');
            let loginData = JSON.parse(data);
            setState({...state, user:data?.user, token:data?.token});

        }
        loadLocalStorageData();
}, []);

   

    return(
        <AuthContext.Provider value = {[state,setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext,AuthProvider};