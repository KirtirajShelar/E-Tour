package com.etour.spring_boot_etour_app.service;

import java.util.List;

import com.etour.spring_boot_etour_app.models.Bookings;

public interface BookingManager {

	void addBooking(Bookings b);

	int getBookings();
//	     Optional<Bookings> getBooking(int bkid);

	List<Bookings> getByemailid(String emailid);

}
