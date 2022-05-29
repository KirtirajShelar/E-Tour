package com.etour.spring_boot_etour_app.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.Destination;
import com.etour.spring_boot_etour_app.repository.DestinationRepository;
import com.etour.spring_boot_etour_app.service.DestinationService;

@Service
public class DestinationServiceImpl implements DestinationService {

	@Autowired
	DestinationRepository repository;

	@Override
	public List<Destination> findByPlaceContaining(String Subdestid) {
		// TODO Auto-generated method stub
		return repository.findByPlaceContaining(Subdestid);
	}

	@Override
	public Destination findByid(int destid) {
		// TODO Auto-generated method stub
		return repository.findById(destid);
	}

}
