package com.etour.spring_boot_etour_app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "userdetails", uniqueConstraints = { @UniqueConstraint(columnNames = "userEmail")

})
public class Userdetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	private String userFName;
	private String userLName;
	private Long userMobile;
	private String userEmail;
	private String userPassword;

	public int getUserid() {
		return userid;
	}

	public String getUserFName() {
		return userFName;
	}

	public void setUserFName(String userFName) {
		this.userFName = userFName;
	}

	public String getUserLName() {
		return userLName;
	}

	public void setUserLName(String userLName) {
		this.userLName = userLName;
	}

	public Long getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(Long userMobile) {
		this.userMobile = userMobile;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	@Column(name = "reset_password_token")
	private String resetPasswordToken;

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}
	
	@Override
	public String toString() {
		return "Userdetails [userid=" + userid + ", userFName=" + userFName + ", userLName=" + userLName
				+ ", userMobile=" + userMobile + ", userEmail=" + userEmail + ", userPassword=" + userPassword
				+ ", resetPasswordToken=" + resetPasswordToken + "]";
	}
}
