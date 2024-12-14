import emailjs from "@emailjs/browser";

// This uses emailjs service to send an email
const sendCustomEmail = (details) => {
    // initialize using User ID from .env file
    emailjs.init(import.meta.env.EMAIL_USER_ID);
    emailjs.send(
        import.meta.env.EMAIL_SERVICE_ID,
        import.meta.env.EMAIL_TEMPLATE_ID,

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