import axios from "axios";

const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/send-email",
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default sendEmail;
