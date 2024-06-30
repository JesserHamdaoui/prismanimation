import axios from "axios";

const submitApplication = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/submit-application",
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default submitApplication;
