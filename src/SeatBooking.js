// import React, { useState, useEffect } from 'react';

// const SeatBooking = () => {
//   const [seats, setSeats] = useState(Array(80).fill(false));
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);

//   const handleBookSeats = (count) => {
//     if (count < 1 || count > 7) return alert('You can book between 1 to 7 seats.');

//     const availableSeats = seats.map((seat, index) => !seat ? index + 1 : null).filter(Boolean);

//     if (availableSeats.length < count) return alert('Not enough seats available');

//     let booked = findSeatsTogether(count, availableSeats) || availableSeats.slice(0, count);

//     const updatedSeats = [...seats];
//     booked.forEach(seat => updatedSeats[seat - 1] = true);

//     setSeats(updatedSeats);
//     setBookedSeats([...bookedSeats, ...booked]);
//     setSelectedSeats(booked);
//   };

//   const findSeatsTogether = (count, availableSeats) => {
//     for (let i = 0; i <= availableSeats.length - count; i++) {
//       let block = availableSeats.slice(i, i + count);
//       if (block[block.length - 1] - block[0] === count - 1) return block;
//     }
//     return null;
//   };

//   const handleReset = () => {
//     setSeats(Array(80).fill(false));
//     setSelectedSeats([]);
//     setBookedSeats([]);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2>Ticket Booking</h2>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 40px)', gap: '5px' }}>
//         {Array.from({ length: 80 }).map((_, index) => (
//           <div key={index} style={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: bookedSeats.includes(index + 1) ? 'orange' : 'green',
//             color: 'white',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: '5px'
//           }}>
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: '20px' }}>
//         <input
//           type="number"
//           min="1"
//           max="7"
//           placeholder="Enter seats to book"
//           onChange={(e) => setSelectedSeats(parseInt(e.target.value) || 0)}
//         />
//         <button onClick={() => handleBookSeats(selectedSeats)}>Book</button>
//         <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset Booking</button>
//       </div>
//       <div style={{ marginTop: '10px' }}>
//         <span>Booked Seats = {bookedSeats.length}</span>
//         <span style={{ marginLeft: '20px' }}>Available Seats = {80 - bookedSeats.length}</span>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;


// import React, { useState, useEffect } from 'react';

// const ROW_SIZE = 7;
// const TOTAL_SEATS = 80;

// const SeatBooking = () => {
//   const [seats, setSeats] = useState(Array(TOTAL_SEATS).fill(false));
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleBookSeats = (count) => {
//     if (count < 1 || count > 7) return alert('You can book between 1 to 7 seats.');

//     const availableSeats = seats.map((seat, index) => !seat ? index : null).filter((seat) => seat !== null);

//     if (availableSeats.length < count) return alert('Not enough seats available');

//     const booking = findSeatsTogether(availableSeats, count);

//     if (booking.length < count) return alert('Unable to find nearby seats');

//     const updatedSeats = [...seats];
//     booking.forEach((seat) => {
//       updatedSeats[seat] = true;
//     });

//     setSeats(updatedSeats);
//     setSelectedSeats(booking.map((seat) => seat + 1));
//   };

//   const findSeatsTogether = (availableSeats, count) => {
//     for (let rowStart = 0; rowStart < TOTAL_SEATS; rowStart += ROW_SIZE) {
//       let rowEnd = rowStart + ROW_SIZE;
//       if (rowEnd > TOTAL_SEATS) rowEnd = TOTAL_SEATS;

//       const rowSeats = availableSeats.filter((seat) => seat >= rowStart && seat < rowEnd);

//       if (rowSeats.length >= count) {
//         return rowSeats.slice(0, count);
//       }
//     }

//     return availableSeats.slice(0, count);
//   };

//   const handleReset = () => {
//     setSeats(Array(TOTAL_SEATS).fill(false));
//     setSelectedSeats([]);
//   };

//   return (
//     <div>
//       <h2>Ticket Booking</h2>
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(${ROW_SIZE}, 40px)`, gap: '10px' }}>
//         {seats.map((seat, index) => (
//           <div key={index} style={{ width: '40px', height: '40px', backgroundColor: seat ? 'orange' : 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <input type="number" placeholder="Seats to Book" onChange={(e) => setSelectedSeats(Number(e.target.value))} />
//       <button onClick={() => handleBookSeats(selectedSeats)}>Book</button>
//       <button onClick={handleReset}>Reset Booking</button>
//     </div>
//   );
// };

// export default SeatBooking;



// import React, { useState, useEffect } from 'react';

// const ROW_SIZE = 7;
// const TOTAL_SEATS = 80;

// const SeatBooking = () => {
//   const [seats, setSeats] = useState(Array(TOTAL_SEATS).fill(false));
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleBookSeats = (count) => {
//     if (count < 1 || count > 7) return alert('You can book between 1 to 7 seats.');

//     const availableSeats = seats
//       .map((seat, index) => (!seat ? index : null))
//       .filter((seat) => seat !== null);

//     if (availableSeats.length < count) return alert('Not enough seats available.');

//     let bookedSeats = [];

//     for (let i = 0; i < availableSeats.length; i++) {
//       const start = availableSeats[i];
//       const rowStart = Math.floor(start / ROW_SIZE) * ROW_SIZE;
//       const rowSeats = availableSeats.filter(
//         (seat) => seat >= rowStart && seat < rowStart + ROW_SIZE
//       );

//       if (rowSeats.length >= count) {
//         bookedSeats = rowSeats.slice(0, count);
//         break;
//       }
//     }

//     if (bookedSeats.length < count) {
//       bookedSeats = availableSeats.slice(0, count);
//     }

//     const updatedSeats = [...seats];
//     bookedSeats.forEach((seat) => (updatedSeats[seat] = true));

//     setSeats(updatedSeats);
//     setSelectedSeats(bookedSeats);
//   };

//   const handleReset = () => {
//     setSeats(Array(TOTAL_SEATS).fill(false));
//     setSelectedSeats([]);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
//       <h2>Ticket Booking</h2>
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(${ROW_SIZE}, 40px)`, gap: '10px' }}>
//         {seats.map((seat, index) => (
//           <div
//             key={index}
//             style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: seat ? 'orange' : 'green',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: 'white',
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>

//       <div style={{ marginTop: '20px' }}>
//         <input
//           type="number"
//           placeholder="Enter Seats"
//           min="1"
//           max="7"
//           onChange={(e) => setSelectedSeats(Array(parseInt(e.target.value) || 0).fill(0))}
//         />
//         <button onClick={() => handleBookSeats(selectedSeats.length)} style={{ marginLeft: '10px' }}>
//           Book
//         </button>
//         <button onClick={handleReset} style={{ marginLeft: '10px' }}>
//           Reset Booking
//         </button>
//       </div>

//       <div style={{ marginTop: '20px' }}>
//         <span style={{ marginRight: '10px' }}>Booked Seats: {seats.filter(Boolean).length}</span>
//         <span>Available Seats: {TOTAL_SEATS - seats.filter(Boolean).length}</span>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;




import React, { useState, useEffect } from 'react';

const ROW_SIZE = 7;
const TOTAL_SEATS = 80;

const SeatBooking = () => {
  const [seats, setSeats] = useState(Array(TOTAL_SEATS).fill(false));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [inputSeats, setInputSeats] = useState(1);

  const handleBookSeats = (count) => {
    if (count < 1 || count > 7) return alert('You can book between 1 to 7 seats.');

    const availableSeats = seats
      .map((seat, index) => (!seat ? index : null))
      .filter((seat) => seat !== null);

    if (availableSeats.length < count) return alert('Not enough seats available.');

    let bookedSeats = [];

    for (let i = 0; i < availableSeats.length; i++) {
      const start = availableSeats[i];
      const rowStart = Math.floor(start / ROW_SIZE) * ROW_SIZE;
      const rowSeats = availableSeats.filter(
        (seat) => seat >= rowStart && seat < rowStart + ROW_SIZE
      );

      if (rowSeats.length >= count) {
        bookedSeats = rowSeats.slice(0, count);
        break;
      }
    }

    if (bookedSeats.length < count) {
      bookedSeats = availableSeats.slice(0, count);
    }

    const updatedSeats = [...seats];
    bookedSeats.forEach((seat) => (updatedSeats[seat] = true));

    setSeats(updatedSeats);
    setSelectedSeats(bookedSeats);
  };

  const handleReset = () => {
    setSeats(Array(TOTAL_SEATS).fill(false));
    setSelectedSeats([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Train Seat Booking</h2>
      <div>
        <input
          type="number"
          min="1"
          max="7"
          value={inputSeats}
          onChange={(e) => setInputSeats(parseInt(e.target.value))}
        />
        <button onClick={() => handleBookSeats(inputSeats)}>Book Seats</button>
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset Seats</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 40px)', gap: '5px', marginTop: '20px' }}>
        {seats.map((seat, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: seat ? 'red' : 'green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Selected Seats: {selectedSeats.map((seat) => seat + 1).join(', ') || 'None'}</h3>
        <h3>Available Seats: {seats.filter((seat) => !seat).length}</h3>
      </div>
    </div>
  );
};

export default SeatBooking;


// import React, { useState, useEffect } from 'react';

// const ROW_SIZE = 7;
// const TOTAL_SEATS = 80;

// const SeatBooking = () => {
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [inputSeats, setInputSeats] = useState(1);

//   useEffect(() => {
//     fetchSeats();
//   }, []);

//   const fetchSeats = async () => {
//     const response = await fetch('http://localhost:5000/api/seats');
//     const data = await response.json();
//     setSeats(data.seats);
//   };

//   const handleBookSeats = async () => {
//     if (inputSeats < 1 || inputSeats > 7) return alert('You can book between 1 to 7 seats.');

//     const response = await fetch('http://localhost:5000/api/book', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ count: inputSeats }),
//     });

//     const data = await response.json();
//     if (data.success) {
//       setSelectedSeats(data.bookedSeats);
//       fetchSeats();
//     } else {
//       alert(data.message);
//     }
//   };

//   const handleReset = async () => {
//     await fetch('http://localhost:5000/api/reset', { method: 'POST' });
//     setSelectedSeats([]);
//     fetchSeats();
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>Ticket Booking</h2>
//       <div style={{ display: 'inline-grid', gridTemplateColumns: `repeat(${ROW_SIZE}, 40px)`, gap: '5px' }}>
//         {seats.map((seat, index) => (
//           <div
//             key={index}
//             style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: seat ? 'green' : 'orange',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: '5px',
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>

//       <div style={{ marginTop: '20px' }}>
//         <input
//           type="number"
//           value={inputSeats}
//           onChange={(e) => setInputSeats(Number(e.target.value))}
//           style={{ marginRight: '10px' }}
//         />
//         <button onClick={handleBookSeats}>Book</button>
//         <button onClick={handleReset} style={{ marginLeft: '10px' }}>
//           Reset Booking
//         </button>
//       </div>

//       {selectedSeats.length > 0 && (
//         <div style={{ marginTop: '10px' }}>
//           <strong>Booked Seats: </strong>
//           {selectedSeats.map((seat) => seat + 1).join(', ')}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeatBooking;
