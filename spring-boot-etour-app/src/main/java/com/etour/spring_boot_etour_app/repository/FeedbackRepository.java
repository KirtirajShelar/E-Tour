package com.etour.spring_boot_etour_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etour.spring_boot_etour_app.models.FeedbackTable;
import com.etour.spring_boot_etour_app.models.Userdetails;

public interface FeedbackRepository extends JpaRepository<FeedbackTable, Integer> {

	FeedbackTable save(Userdetails userdetails);

}
