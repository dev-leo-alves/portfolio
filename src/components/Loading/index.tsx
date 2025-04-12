import { Progress, Box } from "@chakra-ui/react";

import { LoadingStyle } from './styles';
import { useTranslation } from "react-i18next";

interface ILoadingProps {
  text?: string;
}

export function Loading({ text }: ILoadingProps) {
  const [t] = useTranslation("global");

  return (
    <LoadingStyle>
      <Box w={["95%", "95%", "40rem"]} textAlign="center">
        <Progress.Root
          size="sm"
          colorPalette="green"
          variant="subtle"
          value={null}
          borderRadius="lg"


        >
          <Progress.Label
           className="text-loading"
           color="var(--emerald-500)"
           fontSize="xl"
           fontFamily="Montserrat"
           fontWeight="500"
           marginBottom="10px"
          >
            {!text ? t('loading.text') : text}

          </Progress.Label >

          <Progress.Track borderRadius="2xl">
            <Progress.Range backgroundColor="var(--emerald-500)" />
          </Progress.Track>
          
        </Progress.Root>
      </Box>
    </LoadingStyle>
  );
}