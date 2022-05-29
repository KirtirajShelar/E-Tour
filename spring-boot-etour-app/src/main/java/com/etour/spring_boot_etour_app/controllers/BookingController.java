package com.etour.spring_boot_etour_app.controllers;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etour.spring_boot_etour_app.models.Bookings;
import com.etour.spring_boot_etour_app.service.BookingManager;
import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookingController {
	@Autowired
	private BookingManager bookingmanager;

	@Autowired
	private JavaMailSender mailSender;

	@GetMapping(value = "bookings", headers = "Accept=application/json")
	public String showBookings() {
		return new Gson().toJson(bookingmanager.getBookings());
	}

//	@GetMapping(value = "bookings/{bkid}", headers = "Accept=application/json")
//	public Optional<Bookings> getBookings(@PathVariable int bkid) {
//		Optional<Bookings> b = bookingmanager.getBooking(bkid);
//		return b;
//	}

	@PostMapping(value = "bookings/add", headers = "Accept=application/json")
	public void addBooking(@RequestBody Bookings booking) {

		bookingmanager.addBooking(booking);
	}

	@PostMapping(value = "/sendInvoice/{bkid}/{email}/{destinationName}/{destTotalCost}/{destStartDate}/{destEndDate}/{duration}/{persons}", headers = "Accept=application/json")
	public boolean processForgotPasswordForm(@PathVariable String bkid, @PathVariable String email,
			@PathVariable String destinationName, @PathVariable String destTotalCost,
			@PathVariable String destStartDate, @PathVariable String destEndDate, @PathVariable String duration,
			@PathVariable String persons) {

		boolean response;

		try {
			sendEmail(email, bkid, destinationName, destTotalCost, destStartDate, destEndDate, duration, persons);
			response = true;

		} catch (UnsupportedEncodingException | MessagingException e) {
			System.out.println("Error in sending mail");
			response = false;
		}

		return response;
	}

	private void sendEmail(String email, String bkid, String destinationName, String destTotalCost,
			String destStartDate, String destEndDate, String duration, String persons)
			throws MessagingException, UnsupportedEncodingException {

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("thatsdailydestination@gmail.com", "Daily Destination Support");
		helper.setTo(email);

		String subject = "Tour Booking Invoice";
		String content = "<p>Dear Customer, </p> " + "<p>You have booked a tour package and here is the invoice.</p>"

				+ "<fieldset>" + "    <legend>Choose your favorite monster</legend>"

				+ "<p>Your Booking Id : " + bkid + "</p>" + "<p>Your location : " + destinationName + "</p>"
				+ "<p><b>Net Paid Amount<b> : " + destTotalCost + "</p>" + "<p>Tour Start Date : " + destStartDate
				+ "</p>" + "<p>Tour Return Date : " + destEndDate + "</p>" + "<p>Tour Duration : " + duration + "</p>"
				+ "<p>No. of Passengers : " + persons + "</p>"

				+ "</fieldset>"

				+ "<p>Also don't forget to read Terms and Conditions </p> "
				+ "<p>We would love to get your feedback. To give feedback please click <b><a href= http://localhost:3000/Feedback> here </a><b>"

				+ "<p> This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message. </p>"
				+ "<p> Thanks, </p>" + "<p> Your Daily Destination's team </p>";
		helper.setSubject(subject);
		helper.setText(content, true);

		mailSender.send(message);
		System.out.println("MAIL SENT SUCCESSFULLY............!!!!");

	}

	@GetMapping(value = "download/{emailid}", headers = "Accept=application/json")
	public String getBookings(@PathVariable String emailid) {
		return new Gson().toJson(bookingmanager.getByemailid(emailid));

	}

}