package com.etour.spring_boot_etour_app.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.Bookings;
import com.etour.spring_boot_etour_app.repository.BookingRepository;
import com.etour.spring_boot_etour_app.service.BookingManager;

@Service
public class BookingManagerImpl implements BookingManager {
	@Autowired
	BookingRepository repository;

	@Override
	public void addBooking(Bookings bookings) {
		repository.save(bookings);

	}

	@Override
	public int getBookings() {

		return repository.find();
	}

//	@Override
//	public Optional<Bookings> getBooking(int bkid) 
//	{
//		
//		return repository.findById(bkid);
//	}

	@Override
	public List<Bookings> getByemailid(String emailid) {
		// TODO Auto-generated method stub
		return repository.getByemailid(emailid);
	}

}
