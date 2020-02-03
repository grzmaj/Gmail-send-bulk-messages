function sendBulkMessages() {
	var number_of_messages_to_send = 10
	var target_email_address = ""
	
	for (n = 0; n < number_of_messages_to_send; ++n) {
		var random_message_number = Math.floor(Math.random() * 10000)
		GmailApp.sendEmail(target_email_address, "Test message #" + random_message_number, "Lorem ipsum " + random_message_number);
		
		Logger.log("Sent message to: " + target_email_address + " subject: " + "Test message #" + random_message_number)
	}
}
