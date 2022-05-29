package com.etour.spring_boot_etour_app.serviceimpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.Customers;
import com.etour.spring_boot_etour_app.repository.CustomersRepository;
import com.etour.spring_boot_etour_app.service.CustomersManager;

@Service
public class CustomersManagerImpl implements CustomersManager {

	@Autowired
	CustomersRepository customersRepository;

	CustomersManagerImpl(CustomersRepository customersRepository) {
		this.customersRepository = customersRepository;
	}

	@Override
	public void addBooking(Customers bd) {

		customersRepository.save(bd);
	}

	@Override
	public List<Customers> getCustomers() {

		return customersRepository.findAll();
	}

	@Override
	public List<Customers> getCustomer(int bkid) {

		return customersRepository.findBybkid(bkid);
	}

	@Override
	public void addCustomers(List<Customers> customers) {
		customersRepository.saveAll(customers);

	}

	@Override
	public List<Customers> getBymailid(String mailid) {
		// TODO Auto-generated method stub
		return customersRepository.getBymailid(mailid);
	}

	@Override
	public void update(Customers customers, String date, String mailid) {
		// TODO Auto-generated method stub
		System.out.println("inside update method of service layer");
		customersRepository.update(customers.getBk(), date, mailid);

	}
}
