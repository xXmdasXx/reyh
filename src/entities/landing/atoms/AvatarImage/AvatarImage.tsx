import Avatar from "@mui/material/Avatar";

export default function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return <Avatar src={src} alt={alt} sx={{ width: 32, height: 32 }} />;
}
