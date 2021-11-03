import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';


function Sushi(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Sushi');
    const [hotSushi, setHotSushi] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:3000/sushi`)
                setHotSushi(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotSushi ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotSushi)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Sushi;