import axios from "axios";

const emailUrl = "https://formsubmit.co/ajax/philipoti2012@gmail.com";

export const sendEmail = async () => {
  axios.defaults.headers.post["Content-Type"] = "application/json";

  axios
    .post(emailUrl, {
      name: "form - submit",
      message: "I am from devro labs",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
 
