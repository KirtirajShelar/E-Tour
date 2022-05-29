package com.etour.spring_boot_etour_app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Customers;
import com.etour.spring_boot_etour_app.service.CustomersManager;
import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomersController {

	@Autowired
	private CustomersManager customersgmanager;

	@GetMapping(value = "customers", headers = "Accept=application/json")
	public String showBookingDetails() {
		return new Gson().toJson(customersgmanager.getCustomers());
	}

	/*
	 * @GetMapping(value = "/customers/{bkid}", headers = "Accept=application/json")
	 * public List<Customers> getCustomers(@PathVariable int bkid) { List<Customers>
	 * customers=customersgmanager.getCustomer(bkid); return customers; }
	 */

	@GetMapping(value = "searchCustomers/{bkid}", headers = "Accept=application/json")
	public String findby4bkid(@PathVariable int bkid) {
		return new Gson().toJson(customersgmanager.getCustomer(bkid));

	}

	@PostMapping(value = "customers/add", headers = "Accept=application/json")
	public void addBooking(@RequestBody List<Customers> b) {
		customersgmanager.addCustomers(b);
	}

	@GetMapping(value = "invoice/{mailid}", headers = "Accept=application/json")
	public String getCustomersBymailid(@PathVariable String mailid) {
		return new Gson().toJson(customersgmanager.getBymailid(mailid));

	}

	@PutMapping(value = "booking/update/{date}/{mailid}", headers = "Accept=application/json")
	public void updatepro(@RequestBody Customers customers, @PathVariable String date, @PathVariable String mailid) {
		System.out.println("inside updatepro of controller");
		customersgmanager.update(customers, date, mailid);
	}
}
