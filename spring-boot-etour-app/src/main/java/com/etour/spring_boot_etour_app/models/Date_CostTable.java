package com.etour.spring_boot_etour_app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "date_costtable")
public class Date_CostTable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int destid;
	private String destIternary;
	private int destCost_4SP;
	private int destCost_2SP;
	private int destCost_1SP;
	private int destCost_CP;
	private int destCost_CWP;
	private String destStartDate;
	private String destEndDate;
	private int Duration;
	private String destMap;

	public int getDestid() {
		return destid;
	}

	public String getDestIternary() {
		return destIternary;
	}

	public void setDestIternary(String destIternary) {
		this.destIternary = destIternary;
	}

	public int getDestCost_4SP() {
		return destCost_4SP;
	}

	public void setDestCost_4SP(int destCost_4SP) {
		this.destCost_4SP = destCost_4SP;
	}

	public int getDestCost_2SP() {
		return destCost_2SP;
	}

	public void setDestCost_2SP(int destCost_2SP) {
		this.destCost_2SP = destCost_2SP;
	}

	public int getDestCost_1SP() {
		return destCost_1SP;
	}

	public void setDestCost_1SP(int destCost_1SP) {
		this.destCost_1SP = destCost_1SP;
	}

	public int getDestCost_CP() {
		return destCost_CP;
	}

	public void setDestCost_CP(int destCost_CP) {
		this.destCost_CP = destCost_CP;
	}

	public int getDestCost_CWP() {
		return destCost_CWP;
	}

	public void setDestCost_CWP(int destCost_CWP) {
		this.destCost_CWP = destCost_CWP;
	}

	public String getDestStartDate() {
		return destStartDate;
	}

	public void setDestStartDate(String destStartDate) {
		this.destStartDate = destStartDate;
	}

	public String getDestEndDate() {
		return destEndDate;
	}

	public void setDestEndDate(String destEndDate) {
		this.destEndDate = destEndDate;
	}

	public int getDuration() {
		return Duration;
	}

	public void setDuration(int duration) {
		Duration = duration;
	}

	public String getDestMap() {
		return destMap;
	}

	public void setDestMap(String destMap) {
		this.destMap = destMap;
	}

	@Override
	public String toString() {
		return "Date_CostTable [destid=" + destid + ", destIternary=" + destIternary + ", destCost_4SP=" + destCost_4SP
				+ ", destCost_2SP=" + destCost_2SP + ", destCost_1SP=" + destCost_1SP + ", destCost_CP=" + destCost_CP
				+ ", destCost_CWP=" + destCost_CWP + ", destStartDate=" + destStartDate + ", destEndDate=" + destEndDate
				+ ", Duration=" + Duration + ", destMap=" + destMap + "]";
	}

}
