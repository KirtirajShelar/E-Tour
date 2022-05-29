package com.etour.spring_boot_etour_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Userdetails;
import com.etour.spring_boot_etour_app.service.UserdetailsService;
import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserdetailsController {

	@Autowired
	UserdetailsService service;

	@PostMapping(value = "user/add", headers = "Accept=application/json")
	public void addUser(@RequestBody Userdetails user) {
		service.addUser(user);
	}

	@GetMapping(value = "UserDetails/login/{email}/{password}", headers = "Accept=application/json")
	public boolean addUser(@PathVariable String email, @PathVariable String password) {
		return service.getvalidateuser(email, password);
	}

	@GetMapping(value = "UserDetails/forgot/{email}", headers = "Accept=application/json")
	public boolean addUser(@PathVariable String email) {
		return service.getvalidateuseremail(email);
	}

	@GetMapping(value = "UserDetails/{userEmail}", headers = "Accept=application/json")
	public String getUser(@PathVariable String userEmail) {
		return new Gson().toJson(service.getByuserEmail(userEmail));
	}
}
