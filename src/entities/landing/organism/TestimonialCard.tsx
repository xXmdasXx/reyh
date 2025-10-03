import { Card, CardContent, Stack } from "@mui/material";
import Rating from "../molecules/Rating";
import QuoteText from "../molecules/QuoteText";
import UserInfo from "../molecules/UserInfo";

export default function TestimonialCard() {
  return (
    <Card className="!p-5 w-[30rem] !bg-gradient-to-tl !bg-gray-100/4 !backdrop-blur-md !rounded-[2rem] !shadow-2xl !shadow-gray-900
    !flex !flex-col !items-center !justify-center"
      sx={{
        backgroundColor: "#1E1E1E",
        borderRadius: "16px",
        color: "white",
        maxWidth: 400,
        p: 2,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Rating />
          <QuoteText text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها لازم است." />
          <UserInfo name="لورم ایپسوم" avatar="/avatar.png" />
        </Stack>
      </CardContent>
    </Card>
  );
}
