
const BookingRow = ({ booking }) => {

    const {_id, img, service, email, date, price } = booking;
    const handelDelete = (id) =>{
        fetch(`http://localhost:5000/booking${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {img && <img src={img} alt="" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;