package com.etour.spring_boot_etour_app.service;

import java.util.List;

import com.etour.spring_boot_etour_app.models.Customers;

public interface CustomersManager {

	void addBooking(Customers customers);

	List<Customers> getCustomers();

	List<Customers> getCustomer(int bkid);

	void addCustomers(List<Customers> customers);

	List<Customers> getBymailid(String mailid);

	void update(Customers customers, String date, String mailid);

}
