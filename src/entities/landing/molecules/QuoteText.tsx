import Text from "../../global/atoms/Typography/TypographyAtom";
import { Box } from "@mui/material";

export default function QuoteText({ text }: { text: string }) {
  return (
    <Box>
      <Text variant="body1" className='!text-lg !text-white/70'>“{text}”</Text>
    </Box>
  );
}
