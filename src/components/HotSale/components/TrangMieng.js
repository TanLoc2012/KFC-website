import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function TrangMieng(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Tráng Miệng');
    const [hotTrangMieng, setHotTrangMieng] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const data = [
                    {
                        "_id": 11,
                        "image": "https://cdn.tgdd.vn/2021/10/CookDishThumb/cach-lam-banh-dau-nanh-nuong-thom-ngon-bo-duong-d-thumb-620x620-1.jpg",
                        "name": "Bánh đậu nành nướng",
                        "salePrice": 20000,
                        "price": 0
                    },
                    {
                        "_id": 12,
                        "image": "https://cdn.tgdd.vn/2021/10/CookDishThumb/cach-lam-banh-bong-lan-yen-mach-cam-sua-chua-thom-ngon-de-lam-thumb-620x620.jpg",
                        "name": "Bánh bông lan yến mạch sữa chua",
                        "salePrice": 30000,
                        "price": 0
                    },
                    {
                        "_id": 13,
                        "image": "https://cdn.tgdd.vn/2021/10/CookDishThumb/cach-lam-che-khuc-bach-khong-dung-whipping-cream-deo-mem-cuc-thumb-620x620.jpg",
                        "name": "Chè khúc bạch",
                        "salePrice": 30000,
                        "price": 0
                    },
                    {
                        "_id": 14,
                        "image": "https://cdn.tgdd.vn/2021/10/CookDishThumb/cach-lam-pudding-bi-do-mem-thom-beo-ngay-cho-be-don-halloween-thumb-620x620.jpg",
                        "name": "Bánh plan bí đỏ",
                        "salePrice": 15000,
                        "price": 0
                    },
                    {
                        "_id": 15,
                        "image": "https://cdn.tgdd.vn/2021/10/CookDishThumb/2-cach-lam-banh-khoai-lang-yen-mach-giam-can-thom-ngon-don-thumb-620x620.jpg",
                        "name": "Bánh khoai lang yến mạch",
                        "salePrice": 20000,
                        "price": 0
                    }
                ]
                setHotTrangMieng(data)
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
                   hotTrangMieng ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotTrangMieng)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default TrangMieng;