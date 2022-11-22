import { UsersType } from "../../types/types";
import { Box, Typography ,Grid,Container} from "@mui/material";
import Avatar from "../../src/avatar.jpg";
import { Stack } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import Header from "../../components/Header"
function UserPreview({ user }: { user: UsersType }) {

  return (
    <>
  <Header/>
  <Grid item={true} md={6} xs={12} sx={{pl:2,pr:2}}>
  <Box className="profilecard">
  {/* <img className="profile-avatar" src={Avatar} /> */}
  <Typography variant="h4">{user.name}</Typography>
  <Typography variant="h6">{user.username}</Typography>
  <Stack
    sx={{ mt: 5 }}
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <LocalPhoneIcon />
    <Typography sx={{ ml: "10px !important " }} variant="body2">
      {" "}
      {user.phone}
    </Typography>
  </Stack>
  <Stack
    sx={{ mt: 2 }}
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <MailOutlineIcon />
    <Typography sx={{ ml: "10px !important " }} variant="body2">
      {" "}
     {user.email}
    </Typography>
  </Stack>
  <Stack
    sx={{ mt: 2 }}
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <LanguageIcon />
    <Typography sx={{ ml: "10px !important " }} variant="body2">
      {" "}
      {user.address.city}
    </Typography>
  </Stack>
  <Button sx={{ mt: 3 }} variant="outlined">
          {user.website}
        </Button>
</Box>
</Grid></>)
}

export async function getStaticPaths() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await request.json();

  return {
    paths: response.map((user: UsersType) => {
      return {
        params: {
          id: String(user.id),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await request.json();
  return {
    props: {
      user,
    },
  };
}

export default UserPreview;
