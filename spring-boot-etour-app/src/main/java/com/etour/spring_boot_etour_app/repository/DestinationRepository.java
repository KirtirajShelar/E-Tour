package com.etour.spring_boot_etour_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.etour.spring_boot_etour_app.models.Destination;

@Repository
@Transactional
public interface DestinationRepository extends JpaRepository<Destination, Integer> {

	@Query(value = "select * from Destination u where u.Subdestid like %:keyword%", nativeQuery = true)

	List<Destination> findByPlaceContaining(@Param("keyword") String Subdestid);

	Destination findById(int destid);
}
