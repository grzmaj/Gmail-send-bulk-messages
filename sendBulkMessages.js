function sendBulkMessages() {
	var number_of_messages_to_send = 10
	var target_email_address = ""
	
	for (n = 0; n < number_of_messages_to_send; ++n) {
		GmailApp.sendEmail(target_email_address, "Test message #" + n, "Lorem ipsum");
		Logger.log("Sent message to: " + target_email_address + " subject: " + "Test message #" + n)
	}
}
