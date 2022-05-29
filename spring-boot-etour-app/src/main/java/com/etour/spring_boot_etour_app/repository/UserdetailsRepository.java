package com.etour.spring_boot_etour_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etour.spring_boot_etour_app.models.Userdetails;

@Repository
public interface UserdetailsRepository extends JpaRepository<Userdetails, Integer> {

	public Userdetails getUserDemoByUserEmail(String userEmail);

	public Userdetails getUserByUserEmail(String userEmail);

	public List<Userdetails> getByuserEmail(String userEmail);

	public Userdetails findByResetPasswordToken(String token);
}
