package com.etour.spring_boot_etour_app.models;

import javax.persistence.*;

@Entity
@Table(name = "Bookings")
public class Bookings {
	private int bkid;
	private String add1;
	private String city;
	private String state;
	private int pincode;
	private String emailid;
	private long mobno;
	private int destid;
	private String destname;
	private String date;
	private int noofadults;
	private int noofchildrens;
	private int totalpersons;
	private int bktotalcost;

	private int bkPaymentDone;

	Bookings() {

	}

	public Bookings(int bkid, String add1, String city, String state, int pincode, String emailid, long mobno,
			int destid, String destname, String date, int noofadults, int noofchildrens, int totalpersons,
			int bktotalcost, int bkPaymentMethod, int bkPaymentDone) {
		super();
		this.bkid = bkid;
		this.add1 = add1;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.emailid = emailid;
		this.mobno = mobno;
		this.destid = destid;
		this.destname = destname;
		this.date = date;
		this.noofadults = noofadults;
		this.noofchildrens = noofchildrens;
		this.totalpersons = totalpersons;
		this.bktotalcost = bktotalcost;

		this.bkPaymentDone = bkPaymentDone;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getBkid() {
		return bkid;
	}

	public void setBkid(int bkid) {
		this.bkid = bkid;
	}

	public String getAdd1() {
		return add1;
	}

	public void setAdd1(String add1) {
		this.add1 = add1;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public long getMobno() {
		return mobno;
	}

	public void setMobno(long mobno) {
		this.mobno = mobno;
	}

	public int getDestid() {
		return destid;
	}

	public void setDestid(int destid) {
		this.destid = destid;
	}

	public String getDestname() {
		return destname;
	}

	public void setDestname(String destname) {
		this.destname = destname;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getNoofadults() {
		return noofadults;
	}

	public void setNoofadults(int noofadults) {
		this.noofadults = noofadults;
	}

	public int getNoofchildrens() {
		return noofchildrens;
	}

	public void setNoofchildrens(int noofchildrens) {
		this.noofchildrens = noofchildrens;
	}

	public int getTotalpersons() {
		return totalpersons;
	}

	public void setTotalpersons(int totalpersons) {
		this.totalpersons = totalpersons;
	}

	public int getBktotalcost() {
		return bktotalcost;
	}

	public void setBktotalcost(int bktotalcost) {
		this.bktotalcost = bktotalcost;
	}

	public int getBkPaymentDone() {
		return bkPaymentDone;
	}

	public void setBkPaymentDone(int bkPaymentDone) {
		this.bkPaymentDone = bkPaymentDone;
	}

	@Override
	public String toString() {
		return "Bookings [bkid=" + bkid + ", add1=" + add1 + ", city=" + city + ", state=" + state + ", pincode="
				+ pincode + ", emailid=" + emailid + ", mobno=" + mobno + ", destid=" + destid + ", destname="
				+ destname + ", date=" + date + ", noofadults=" + noofadults + ", noofchildrens=" + noofchildrens
				+ ", totalpersons=" + totalpersons + ", bktotalcost=" + bktotalcost + ", bkPaymentDone=" + bkPaymentDone
				+ "]";
	}

}
