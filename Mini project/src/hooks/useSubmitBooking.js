import axios from 'axios';

export default function useSubmitBooking(){
  const submitBooking = async (payload) => {
    // do any pre-processing, analytics, or state-logic here
    const res = await axios.post('http://localhost:4000/bookings', payload);
    return res.data;
  };

  return { submitBooking };
}
