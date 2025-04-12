import { Button, Icon, Link } from "@chakra-ui/react";
import { AiOutlineFilePdf } from 'react-icons/ai';

interface ViewButtonProps {
  url: string;
  buttonText?: string;
}

export function ViewButton({ url, buttonText }: ViewButtonProps) {
  return (
    <Link href={url} target="_blank"   
    _hover={{
        textDecor:"none"
        
    }}>
        <Button
        bgColor="var(--emerald-800)"
        boxShadow="sm"
        color="var(--gray-50)"
        w="12rem"
        h="3rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        _hover={{
            bgColor:"var(--emerald-600)",  
            fontSize:"1rem",         
        }}
        >
                {buttonText}
                <Icon as={AiOutlineFilePdf} />
        </Button>
    </Link>

  );
}