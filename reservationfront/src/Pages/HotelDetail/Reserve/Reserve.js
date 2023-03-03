import axios from 'axios'
import React, { useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { SearchContext } from '../../../Context/SearchContext'
import UseFetch from '../../../Usefetch/UseFetch'
import "./Reserve.scss"

function Reserve({ setOpen, HotelId }) {
  const { data, loading, error } = UseFetch(`/hotels/room/${HotelId}`)
  const [selectedRooms, setSelectedRooms] = useState([])
  const {date} = useContext(SearchContext)
  const navigate = useNavigate();
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const alldates = getDatesInRange(date[0]?.startDate, date[0]?.endDate);
  const isAvailable = (roomNumber)=>{
    const  isFound = roomNumber.unavailableDates.some(date=>
      alldates.includes(new Date(date).getTime())
      );
      return !isFound;
  }
  const hendleSelect = (e)=>{
   const checked = e.target.checked
   const value = e.target.value
   setSelectedRooms(
    checked 
    ? [...selectedRooms, value]
    : selectedRooms.filter(item=> item !==value) )
  }

  const hendleClick = async ()=>{
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  }
  return (
    <div className='reserve'>
      <div className='rContainer'>
      <i class="fa-solid fa-x" onClick={() => setOpen(false)}></i>
        <div className='reserve_date'>
        <span>Select your room : </span>
        {
          data.map(item => (
            <div className='rItem'>
              <div className='rItemInfo'>
                <p className='rTitle'>Title: {item.title}</p>
                <p className='rDesc'>Desc: {item.desc}</p>
                <p className='rMax'>
                  Max people : <b>{item.maxPeople}</b>
                </p>
                <p className='rPrice'>Price: {item.price}</p>
              </div>
              <div className='rSelectRooms'>
                <p>Rooms Number: </p>
              {item.roomNumbers.map(roomNumber => (
                
                <div className='room'>
                  <p>{roomNumber.number}</p>
                  <input type={"checkbox"} value={roomNumber._id} onChange={hendleSelect} disabled={!isAvailable(roomNumber)}/>
                </div>
              ))}
              </div>
            </div>
          ))
        }
         <button onClick={hendleClick} className='rButton'>Reserve now!</button>
        </div>
      </div>
    </div>
  )
}

export default Reserve