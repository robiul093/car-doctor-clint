import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
    
    const [bookings, setBookings] = useState()
    console.log(bookings);
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }, [user])
    
    return (
        <div>
            <h2>your booking : {bookings?.length} </h2>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th></th>
        <th>Service Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings?.map((booking, index) => <BookingRow key={index} booking={booking}></BookingRow>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;