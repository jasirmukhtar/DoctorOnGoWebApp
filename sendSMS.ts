import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
import { getPatientById } from "./lib/actions/patient.actions";
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

export const sendSMSNotification = async (
  userId: string,
  smsMessage: string
) => {
  try {
    const patient = await getPatientById(userId);

    if (!patient || !patient.phone) {
      throw new Error("Patient not found or invalid phone number");
    }

    const message: MessageInstance = await client.messages.create({
      body: smsMessage, // Pass the smsMessage as a string
      from: "+12672144130", // Your Twilio number
      to: patient.phone, // Patient's phone number
    });

    console.log(`Message sent with SID: ${message.sid}`);
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
};


