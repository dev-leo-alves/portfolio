import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';

interface ITextareaProps extends TextareaProps {
  text: string;
};

export function Textarea({ text, ...rest }: ITextareaProps) {
  return (
    <ChakraTextarea
      h="13rem"
      p="7"
      bg="transparent"
      color="var(--emerald-800)"
      fontFamily="Montserrat"
      placeholder={text}
      borderWidth={1.9}
      borderColor="var(--emerald-800)"
      borderRadius="md"
      resize="none"

      _hover={{
        borderColor: 'var(--emerald-800)',
      }}

      _focus={{
        borderColor: 'var(--emerald-800)',
      }}

      _focusVisible={{
        borderColor: 'var(--emerald-800)',
      }}

      _placeholder={{ 
        color: 'var(--emerald-600)',
        fontWeight: 600
        
      }}

      {...rest}
    />
  );
}