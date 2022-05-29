package com.etour.spring_boot_etour_app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;
import javax.persistence.*;

@Entity
public class Customers {

	private int customerid;
	private String mailid;
	private String name;
	private String dob;
	private String gender;
	private int age;
	private String govidType;
	private long govid;
	private int bk;
	private String date;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "customerid")
	public int getCustomerid() 
	{
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public String getMailid() {
		return mailid;
	}

	public void setMailid(String mailid) {
		this.mailid = mailid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGovidType() {
		return govidType;
	}

	public void setGovidType(String govidType) {
		this.govidType = govidType;
	}

	public long getGovid() {
		return govid;
	}

	public void setGovid(long govid) {
		this.govid = govid;
	}

	public int getBk() {
		return bk;
	}

	public void setBk(int bk) {
		this.bk = bk;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Customers [customerid=" + customerid + ", mailid=" + mailid + ", name=" + name + ", dob=" + dob
				+ ", gender=" + gender + ", age=" + age + ", govidType=" + govidType + ", govid=" + govid + ", bk=" + bk
				+ ", date=" + date + "]";
	}

}
