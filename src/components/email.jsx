import emailjs from "@emailjs/browser";

const userId = import.meta.env.VITE_EMAIL_USER_ID;
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

// This uses emailjs service to send an email
const sendCustomEmail = (details) => {

    // initialize using User ID from .env file
    emailjs.init({
        publicKey: userId,
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });

    emailjs.send(
        serviceId,
        templateId,

        {
            from_name: details.name,
            from_email: details.email,
            message: details.message
        }
    )
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
};

export { sendCustomEmail };