import { Stack, VStack, Button} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Textarea } from "./Textarea";
import { Input } from "./Input";

export function Form(){

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
  
    function sendMessage(e: FormEvent): void {
      e.preventDefault();
  
      const body = `Meu Nome é ${name}, meu email para contato é ${email}. ${subject}`;
  
      const message = body.split(" ").join("%20");
  
      const link =
        `https://api.whatsapp.com/send?phone=5511975551708&text=${message}`;
  
      window.location.href = link;
    }

    return(<>
        <VStack as="form" onSubmit={sendMessage} w={["100%", "90%", "80%"]}>
          <Stack w="100%" direction={["column", "column", "row"]}>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              text="Seu Nome"
              w={["100%", "100%", "50%"]}
            />
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              text="Seu Melhor E-mail"
              w={["100%", "100%", "50%"]}
            />
          </Stack>

          <Textarea
            value={subject}
            onChange={e => setSubject(e.target.value)}
            name="subject"
            text="Escreva sua mensagem..."
            w="100%"
          />
          <Button
            w="100%"
            type="submit"
            borderRadius="full"
            bg="var(--emerald-800)"
            color="var(--gray-50)"

            size="lg"
            transition="0.2s"

            _hover={{
              bg: 'var(--emerald-600)'
            }}
          >
            Enviar
          </Button>
        </VStack>
    </>)
}