import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import UseFetch from '../../Usefetch/UseFetch'
import "../Hotel/Hotel.scss"
function Cabins() {
    const { data, loading } = UseFetch("/hotels")
    const filterType = data.filter((x) => x?.type === "Cabins")
    const [first, setfirst] = useState("")
    const newFilter = filterType.filter((data) => data.name.toLowerCase().includes(first.toLowerCase()))
    return (
        <>
        <Navbar/>
        <section className='Hotels'>
            <div className='Search'>
                <input placeholder='search' onInput={(e) => { setfirst(e.target.value) }} />
            </div>
            <div className='Hotels_width'>

                {loading ? ("loading") : (<>
                    {newFilter.map((data) =>
                        <div className='property_box'>

                            <div className='property_img_box'>
                                <img src={data.photos[0]} alt="hotel" />
                            </div>
                            <div className='property_button_box'>
                                <Link to={`/detail/${data._id}`}><button className='Detailbutton'>Detail</button> </Link>
                                <button>{data.cheapestPrice}$</button>
                            </div>
                            <div className='property_title'>
                                <h3>{data.name}</h3>
                                <h4>City:  {data.city}</h4>
                                <p>{data.title}</p>
                            </div>
                        </div>
                    )}
                </>)}
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Cabins