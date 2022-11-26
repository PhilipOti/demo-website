import React, { useState } from "react";
import signUpFormStyles from "./signUpForm.module.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
// import { sendEmail } from "../../utils/sendEmail";
import axios from "axios";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState(".");
  const [details, setDetails] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && email && companyName && description) {
      let siteVisitor = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
        companyName: companyName,
        description: description,
      };

      setDetails(siteVisitor);

      const JSONdata = JSON.stringify(siteVisitor);

      // API endpoint where we send form data.
      const endpoint = "/api/form";

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      setName("");
      setEmail("");
      setCompanyName("");
      setDescription("");
      // alert(`Are these your full details: ${result.data}`);
      // console.log(result);

      fetch("https://formsubmit.co/ajax/philipoti2012@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(siteVisitor),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  return (
    <section
      id="signupform"
      className={`${signUpFormStyles.signUp_container}`}
      // style={{ marginBottom: "4rem" }}
    >
      <SectionHeader
        subTitle="Grow Your Business Today!"
        title="contact us "
      ></SectionHeader>
      <div style={{ maxWidth: "700px", margin: "auto", padding: "3rem" }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label for="name">Name</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label for="email">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Company name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Label for="companyName">Company Name</Label>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </section>
  );
}
