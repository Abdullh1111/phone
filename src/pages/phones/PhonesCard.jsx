
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
import Ph from './Ph';

const PhonesCard = () => {
    const [phone, setPhone] = useState()
    const id= useParams()
    const phones = useLoaderData()
   
    useEffect(()=>{
        const findphone = phones?.find(phone=>phone.id==id.id)
        setPhone(findphone)
    },[id,phones])
    // console.log(phone)

    return (
        <div>
            
        <div>
        <Ph phone={phone}></Ph>
        </div>
        </div>
    );
};

export default PhonesCard;