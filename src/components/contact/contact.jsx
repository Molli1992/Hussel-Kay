import React from "react";
import "./contact.css";
import { Card, Image, Heading, Text } from "@chakra-ui/react";
import ContactImage from "../../images/contact.jpg";

function Contact() {
  return (
    <div className="body-contact">
      <Card
        className="container-img-contact"
        overflow="hidden"
        variant="outline"
      >
        <Image
          className="img-contact"
          objectFit="cover"
          src={ContactImage}
          alt="Contact Us"
        />
      </Card>

      <Card
        className="container-text-contact"
        overflow="hidden"
        variant="outline"
      >
        <Heading className="title-contact">Contact Us</Heading>

        <br></br>

        <Text className="text-contact">Hussel Kay LLC</Text>

        <br></br>

        <Text className="text-contact">3511 NW 113TH CT DORAL,</Text>
        <Text className="text-contact">FL 33178</Text>

        <br></br>

        <Text className="text-contact">+1 (786) 834 1705</Text>

        <br></br>

        <Text className="text-contact">husselkayllc@gmail.com</Text>
      </Card>
    </div>
  );
}

export default Contact;
