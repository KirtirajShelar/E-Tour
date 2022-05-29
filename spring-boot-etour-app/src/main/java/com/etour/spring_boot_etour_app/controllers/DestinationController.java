package com.etour.spring_boot_etour_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Destination;
import com.etour.spring_boot_etour_app.service.DestinationService;
import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class DestinationController {
	@Autowired
	DestinationService service;

	@GetMapping(value = "destination/{Subdestid}", headers = "Accept=application/json")
	public String findByPlaceContaining(@PathVariable String Subdestid) {
		return new Gson().toJson(service.findByPlaceContaining(Subdestid));
	}

	@GetMapping(value = "destid/{destid}", headers = "Accept=application/json")
	public Destination findByid(@PathVariable int destid) {
		Destination d = service.findByid(destid);
		return d;
	}

}
