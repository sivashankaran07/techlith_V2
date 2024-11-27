const handleContactForm = (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    // Process form submission (e.g., save to database or send email)
    console.log(`Received contact form submission: ${firstName} ${lastName} ${email} - ${message}`);
    res.status(200).send('Form submitted successfully');
  };
  
  module.exports = {
    handleContactForm,
  };
  