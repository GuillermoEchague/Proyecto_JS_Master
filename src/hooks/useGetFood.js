import {useState} from 'react';
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage" ;
import { base_url } from '../constantes/constantes';

const useGetFood = () => {
//     const [food, setFood] = useLocalStorage('foods', '')
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);


//     async function getFoods() {
//         try {
//             const response = await axios.post(`${base_url}/api/menus`);
//             const result = response.data.results;
//             setFood(result);
//             setLoading(false);
//             setError(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//             setError(error);
//         }
//     }

// return { food, loading, error, getFoods };
}

export default useGetFood