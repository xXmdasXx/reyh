// components/molecules/UserInfo.tsx
import Stack from "@mui/material/Stack";
import Text from "../../global/atoms/Typography/TypographyAtom"
import AvatarImage from "../atoms/AvatarImage/AvatarImage";

export default function UserInfo({ name, avatar }: { name: string; avatar: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <AvatarImage src={avatar} alt={name} />
      <Text variant="subtitle2">{name}</Text>
    </Stack>
  );
}
