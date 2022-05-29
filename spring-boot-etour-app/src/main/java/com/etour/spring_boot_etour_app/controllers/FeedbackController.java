package com.etour.spring_boot_etour_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.FeedbackTable;
import com.etour.spring_boot_etour_app.service.FeedbackService;

@RestController
@CrossOrigin("http://localhost:3000")
public class FeedbackController {

	@Autowired
	FeedbackService service;

	@PostMapping(value = "user/addfeedback", headers = "Accept=application/json")
	public void addFeedback(@RequestBody FeedbackTable user) {
		service.addFeedback(user);
	}

}
