import { Button, Icon, Link } from "@chakra-ui/react";
import { AiOutlineDownload } from 'react-icons/ai';

interface DownloadButtonProps {
  filePath: string;
  fileName: string;
  buttonText?: string;
}

export function DownloadButton({ filePath, fileName, buttonText = "Download" }: DownloadButtonProps) {
  return (
    <Link href={filePath} download={fileName} target="_blank"   
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
                <Icon as={AiOutlineDownload} />
        </Button>
    </Link>

  );
}