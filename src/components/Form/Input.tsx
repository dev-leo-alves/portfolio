import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

interface IInputProps extends InputProps {
  text: string;
};

export function Input({ text, ...rest }: IInputProps) {
  return (
    <ChakraInput
      p="7"
      bg="transparent"
      color="var(--emerald-800)"
      fontWeight={600}
      fontFamily="Montserrat"
      placeholder={text}
      borderWidth={1.9}
      borderColor="var(--emerald-800)"
      borderRadius="full"

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
       }}

      {...rest}
    />
  );
}