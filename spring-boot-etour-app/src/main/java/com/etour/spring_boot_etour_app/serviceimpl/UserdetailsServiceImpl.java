package com.etour.spring_boot_etour_app.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.spring_boot_etour_app.models.Userdetails;
import com.etour.spring_boot_etour_app.repository.UserdetailsRepository;
import com.etour.spring_boot_etour_app.service.UserNotFoundException;
import com.etour.spring_boot_etour_app.service.UserdetailsService;

@Service
public class UserdetailsServiceImpl implements UserdetailsService {

	@Autowired
	UserdetailsRepository repository;

	@Override
	public void addUser(Userdetails user) {
		repository.save(user);
	}

	@Override
	public boolean getvalidateuser(String username, String password) {

		Userdetails user = this.repository.getUserDemoByUserEmail(username);
		if (user == null) {
			return false;
		}

		if (password.equals(user.getUserPassword())) {
			return true;
		}
		return false;
	}

	@Override
	public boolean getvalidateuseremail(String email) {
		// TODO Auto-generated method stub
		Userdetails user = this.repository.getUserByUserEmail(email);
		if (user == null) {
			return false;
		}
		return true;
	}

	@Override
	public List<Userdetails> getByuserEmail(String userEmail) {
		// TODO Auto-generated method stub
		return repository.getByuserEmail(userEmail);
	}

	@Override
	public void updateResetPasswordToken(String token, String email) throws UserNotFoundException {
		Userdetails user = repository.getUserByUserEmail(email);
		if (user != null) {
			user.setResetPasswordToken(token);
			repository.save(user);
		} else {
			throw new UserNotFoundException("Could not find any user with email" + email);
		}

	}

	public Userdetails get(String resetPasswordToken) {
		return repository.findByResetPasswordToken(resetPasswordToken);

	}

	public void updatePassword(Userdetails user, String newPassword) {
		// BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		// String encodedPassword = passwordEncoder.encode(newPassword);
		// user.setUserPassword(encodedPassword);
		user.setUserPassword(newPassword);
		user.setResetPasswordToken(null);

		repository.save(user);
	}

}
