import Stack from "@mui/material/Stack";
import CustomStar from "../atoms/StarIcon/StarIcon";

export default function Rating() {
  return (
    <Stack direction="row" spacing={0.5}>
      {Array.from({ length: 5 }).map((_, i) => (
        <CustomStar key={i} />
      ))}
    </Stack>
  );
}
