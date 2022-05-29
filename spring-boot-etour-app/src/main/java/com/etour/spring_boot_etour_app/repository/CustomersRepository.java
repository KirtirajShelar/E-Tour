package com.etour.spring_boot_etour_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.etour.spring_boot_etour_app.models.Customers;

@Repository
@Transactional
public interface CustomersRepository extends JpaRepository<Customers, Integer> {
	@Query(value = "select * from Customers where bkid=:id", nativeQuery = true)
	public List<Customers> findBybkid(@Param("id") int bkid);

	public List<Customers> getBymailid(String mailid);

	@Modifying
	@Query("update Customers p set p.bk = :bk where p.date = :date and p.mailid = :mailid")
	void update(@Param("bk") int bk, @Param("date") String date, @Param("mailid") String mailid);
}
