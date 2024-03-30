/* eslint-disable prettier/prettier */
import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import Image from "next/image";

import previewImage from "../../assets/app-preview.png";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          agendamento descomplicado
        </Heading>
        <Text size="xl">
          Comece o seu calendário e permita que ass pessoas marquem agendamentos
          com o seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando app em funcionamneto"
        />
      </Preview>
    </Container>
  );
}
