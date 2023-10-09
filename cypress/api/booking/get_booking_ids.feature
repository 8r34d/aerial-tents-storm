Feature: Booking - GetBookingIds

  Scenario: GetBookingIds

    When I request booking ids as "getBookingIds" for "all bookings"
    Then I should get a booking ids response as "getBookingIds" with 200 "booking id"
