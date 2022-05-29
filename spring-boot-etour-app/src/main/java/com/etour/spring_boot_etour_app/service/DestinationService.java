package com.etour.spring_boot_etour_app.service;

import java.util.List;

import com.etour.spring_boot_etour_app.models.Destination;

public interface DestinationService {

	List<Destination> findByPlaceContaining(String Subdestid);

	Destination findByid(int destid);

}
