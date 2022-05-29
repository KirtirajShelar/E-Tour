package com.etour.spring_boot_etour_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Date_CostTable;
import com.etour.spring_boot_etour_app.service.Date_CostTableService;
import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class Date_CostTableController {

	@Autowired
	Date_CostTableService service;

	@GetMapping(value = "itinerary/{destid}", headers = "Accept=application/json")
	public Date_CostTable getPro(@PathVariable int destid) {
		Date_CostTable p = service.getDate_CostTable(destid);
		return p;
	}

	@GetMapping(value = "crud/searchs/{destid}", headers = "Accept=application/json")
	public String findByPlaceContaining(@PathVariable int destid) {
		return new Gson().toJson(service.findByPlaceContaining(destid));
	}

	@GetMapping(value = "searchbycost/{scost}/{ecost}", headers = "Accept=application/json")
	public String findBypriceBetween(@PathVariable int scost, @PathVariable int ecost) {
		return new Gson().toJson(service.findBypriceBetween(scost, ecost));
	}

	@GetMapping(value = "searchbyDuration/{sDuration}/{eDuration}", headers = "Accept=application/json")
	public String findByDurationBetween(@PathVariable int sDuration, @PathVariable int eDuration) {
		return new Gson().toJson(service.findByDurationBetween(sDuration, eDuration));
	}

	@GetMapping(value = "searchbyDate/{sDate}/{eDate}", headers = "Accept=application/json")
	public String findByDate(@PathVariable String sDate, @PathVariable String eDate) {
		return new Gson().toJson(service.findByDate(sDate, eDate));
	}

}
