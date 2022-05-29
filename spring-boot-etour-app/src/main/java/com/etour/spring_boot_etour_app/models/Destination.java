package com.etour.spring_boot_etour_app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Destination {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int destid;
	private String Subdestid;
	private String subcatID;
	private String destinationName;
	private String DestImg;
	private char flag;

	public int getDestid() {
		return destid;
	}

	public String getSubdestid() {
		return Subdestid;
	}

	public void setSubdestid(String subdestid) {
		Subdestid = subdestid;
	}

	public String getSubcatID() {
		return subcatID;
	}

	public void setSubcatID(String subcatID) {
		this.subcatID = subcatID;
	}

	public String getDestinationName() {
		return destinationName;
	}

	public void setDestinationName(String destinationName) {
		this.destinationName = destinationName;
	}

	public String getDestImg() {
		return DestImg;
	}

	public void setDestImg(String destImg) {
		DestImg = destImg;
	}

	public char getFlag() {
		return flag;
	}

	public void setFlag(char flag) {
		this.flag = flag;
	}

}
