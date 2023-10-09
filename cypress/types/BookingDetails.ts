import BookingDates from "./BookingDates";

type BookingDetails = {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds: string;
};

export default BookingDetails;
