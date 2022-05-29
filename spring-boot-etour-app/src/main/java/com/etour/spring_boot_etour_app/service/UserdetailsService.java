package com.etour.spring_boot_etour_app.service;

import java.util.List;

import com.etour.spring_boot_etour_app.models.Userdetails;

public interface UserdetailsService {

	void addUser(Userdetails user);

	public boolean getvalidateuser(String username, String password);

	public boolean getvalidateuseremail(String email);

	public void updateResetPasswordToken(String token, String email) throws UserNotFoundException;

	public Userdetails get(String token);

	List<Userdetails> getByuserEmail(String userEmail);

	public void updatePassword(Userdetails user, String password);

}
