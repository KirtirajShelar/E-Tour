package com.etour.spring_boot_etour_app.service;

import java.util.List;

import com.etour.spring_boot_etour_app.models.Date_CostTable;

public interface Date_CostTableService {

	Date_CostTable getDate_CostTable(int destid);

	List<?> findByPlaceContaining(int destid);

	List<?> findBypriceBetween(int scost, int ecost);

	List<?> findByDurationBetween(int sDuration, int eDuration);

	List<?> findByDate(String sDate, String eDate);

}
