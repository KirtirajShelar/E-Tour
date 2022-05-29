package com.etour.spring_boot_etour_app.controllers;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Userdetails;
import com.etour.spring_boot_etour_app.service.UserNotFoundException;
import com.etour.spring_boot_etour_app.service.UserdetailsService;

import net.bytebuddy.utility.RandomString;

@RestController
@CrossOrigin("http://localhost:3000")
public class ForgotPasswordController {

	@Autowired
	private UserdetailsService userService;

	@Autowired
	private JavaMailSender mailSender;

	@GetMapping(value = "/forgot_password/{email}", headers = "Accept=application/json")
	public boolean processForgotPasswordForm(@PathVariable String email) {
		String token = RandomString.make(45);
		boolean response;
		System.out.println(email);

		try {
			userService.updateResetPasswordToken(token, email);

			// Generate custom reset password link based on token via email
			String resetPasswordLink = "http://localhost:3000/reset_password/" + token;

			sendEmail(email, resetPasswordLink);
			response = true;

		} catch (UserNotFoundException ex) {

			response = false;
			System.out.println("No user exist with this mail id");

		} catch (UnsupportedEncodingException | MessagingException e) {
			System.out.println("Error in sending mail");
			response = false;
		}

		return response;
	}

	private void sendEmail(String email, String resetPasswordLink)
			throws MessagingException, UnsupportedEncodingException {

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("thatsdailydestination@gmail.com", "Daily Destination Support");
		helper.setTo(email);

		String subject = "Reset Password";
		String content = "<p>Dear Customer, </p> " + "<p>You have requested to reset your password.</p>"
				+ "<p>Click the link below to change your password. </p>" + "<p><b><a href=\" " + resetPasswordLink
				+ "\"> Reset Password </a><b></p>"
				+ "<p> If you didn’t ask to reset your password, you can ignore this email. </p>" + "<p> Thanks, </p>"
				+ "<p> Your Daily Destination's team </p>";

		helper.setSubject(subject);
		helper.setText(content, true);

		mailSender.send(message);
		System.out.println("MAIL SENT SUCCESSFULLY............!!!!");

	}

	@GetMapping("/reset_password")
	public String showResetPasswordForm(@Param(value = "token") String token) {
		Userdetails user = userService.get(token);

		if (user == null) {
			token = "Invalid Token";
			return token;
		}
		return token;
	}

	@PostMapping("/reset_password/{token}/{password}")
	public boolean processResetPassword(@PathVariable String token, @PathVariable String password) {

		boolean response;
		Userdetails user = userService.get(token);

		if (user == null) {

			response = false;
			System.out.println("Invalid Token");
			return response;
		} else {
			userService.updatePassword(user, password);

			response = true;
			System.out.println("You have successfully changed your password.");
		}
		return response;
	}

}
