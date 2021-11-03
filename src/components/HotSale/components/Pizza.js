import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Pizza(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Pizza');
    const [hotPizza, setHotPizza] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                // 
               const {data} = await axios.get(`http://localhost:3000/pizza`)
                setHotPizza(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotPizza ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotPizza)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Pizza;