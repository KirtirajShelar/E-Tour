package com.etour.spring_boot_etour_app.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.FeedbackTable;
import com.etour.spring_boot_etour_app.repository.FeedbackRepository;
import com.etour.spring_boot_etour_app.service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackRepository repository;

	@Override
	public void addFeedback(FeedbackTable user) {
		repository.save(user);
	}

}
