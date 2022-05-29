package com.etour.spring_boot_etour_app.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.Date_CostTable;
import com.etour.spring_boot_etour_app.repository.Date_CostTableRepository;
import com.etour.spring_boot_etour_app.service.Date_CostTableService;

@Service
public class Date_CostTableServiceImpl implements Date_CostTableService {

	@Autowired
	Date_CostTableRepository repository;

	public Date_CostTable getDate_CostTable(int destid) {
		// TODO Auto-generated method stub
		return repository.findById(destid);
	}

	@Override
	public List<?> findByPlaceContaining(int destid) {
		// TODO Auto-generated method stub
		return repository.findByPlaceContaining(destid);
	}

	@Override
	public List<?> findBypriceBetween(int scost, int ecost) {
		// TODO Auto-generated method stub
		return repository.findBypriceBetween(scost, ecost);
	}

	@Override
	public List<?> findByDurationBetween(int sDuration, int eDuration) {
		// TODO Auto-generated method stub
		return repository.findByDurationBetween(sDuration, eDuration);
	}

	@Override
	public List<?> findByDate(String sDate, String eDate) {
		// TODO Auto-generated method stub
		return repository.findByDate(sDate, eDate);
	}

}
