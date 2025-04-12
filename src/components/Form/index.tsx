import { Stack, VStack, Button } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Textarea } from "./Textarea";
import { Input } from "./Input";
import { FormStatus } from "./styles";
import { useTranslation } from "react-i18next";


export function Form(){
  const [t] = useTranslation("global");

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const [status, setStatus] = useState({
      type: '',
      message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (!isValidEmail(formData.email)) {
        setStatus({
          type: 'error',
          message: t("footer.contact.form.validation.invalid_mail")
        });
        return;
      }

      setIsSubmitting(true);
      setStatus({ type: 'info', message: t("footer.contact.form.status.sending") });
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setStatus({
            type: 'success',
            message: t("footer.contact.form.status.success")
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus({
            type: 'error',
            message: data.error || t("footer.contact.form.status.error")
          });
        }
      } catch (error) {
        setStatus({
          type: 'error',
          message: t("footer.contact.form.status.server_error")
        });
        console.error('Erro:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  

    return(<>
        <VStack as="form" onSubmit={handleSubmit} w={["100%", "90%", "80%"]}>
          <Stack w="100%" direction={["column", "column", "row"]}>
            <Input
              value={formData.name}
              onChange={handleChange}
              name="name"
              text={t("footer.contact.form.name")}
              w={["100%", "100%", "50%"]}
              required
            />
            <Input
              value={formData.email}
              onChange={handleChange}
              name="email"
              text={t("footer.contact.form.email")}
              w={["100%", "100%", "50%"]}
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />
          </Stack>

          <Textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            text={t("footer.contact.form.message")}
            w="100%"
            required
          />

          <FormStatus>
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
              disabled={isSubmitting}
            >
              {isSubmitting ? t("footer.contact.form.status.sending") : t("footer.contact.form.status.send")}
            </Button>

            {status.message && (
              <p className={`form-status ${status.type}`}>
                {status.message}
              </p>
            )}
          </FormStatus>
        </VStack>
    </>)
}