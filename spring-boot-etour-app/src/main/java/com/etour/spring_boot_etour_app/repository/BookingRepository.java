package com.etour.spring_boot_etour_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.etour.spring_boot_etour_app.models.Bookings;

@Repository
@Transactional
public interface BookingRepository extends JpaRepository<Bookings, Integer>

{

	List<Bookings> getByemailid(String emailid);

	@Query(value = "select bkid from Bookings u order by bkid desc limit 1", nativeQuery = true)
	int find();

}
