package com.etour.spring_boot_etour_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.etour.spring_boot_etour_app.models.Date_CostTable;

public interface Date_CostTableRepository extends JpaRepository<Date_CostTable, Integer> {

	Date_CostTable findById(int destid);

	@Query(value = "select * from date_costtable u where u.destid like %:keyword%", nativeQuery = true)
	// Date_CostTable findById(@Param("keyword") String keyword);
	List<Date_CostTable> findByPlaceContaining(@Param("keyword") int destid);

	@Query(value = "from Date_CostTable t where destCost_4SP BETWEEN :sprice AND :eprice")
	public List<Date_CostTable> findBypriceBetween(@Param("sprice") int sprice, @Param("eprice") int eprice);

	@Query(value = "from Date_CostTable t where Duration BETWEEN :sDuration AND :eDuration")
	public List<Date_CostTable> findByDurationBetween(@Param("sDuration") int sDuration,
			@Param("eDuration") int eDuration);

	@Query(value = "from Date_CostTable t where destStartDate>=:sDate  AND destEndDate<=:eDate")
	public List<Date_CostTable> findByDate(@Param("sDate") String sDate, @Param("eDate") String eDate);

}
