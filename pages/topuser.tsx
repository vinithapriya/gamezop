import { useEffect, useState } from "react";
import { UsersType } from "../types/types";
import { userList } from "../types/UserContext";
import Header from "../components/Header"
export { getServerSideProps } from "../types/UserContext";
import Card from '@mui/material/Card';
import { Box, Typography ,Grid,Container} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import { red } from '@mui/material/colors';
function TopUser(){
    const[topUser,settopUser]=useState([])
    
    const{users}=userList()
    useEffect(()=>{
        const usertop=JSON.parse(localStorage.getItem("topUsers")||'[]');
        settopUser(usertop)
    },[])

   
    let FilteredData=users.filter((rec)=>{
        if(topUser.includes(rec.id)){
           return rec
        }
    }
        )

    return (
      <div>
        <Header/>
        <Container maxWidth="lg">
          <Grid sx={{flexGrow:1,mt:5}}
          container rowSpacing={1}
          columnSpacing={{sm:2,md:3}}
          spacing={2}>

        {
          FilteredData.map((record) => {
             const{name,id,email,address,username,phone,website}=record
            return (
              <Grid item={true} md={6} xs={12} sx={{pl:2,pr:2}} key={id}>
              <Box className="profilecard">
              {/* <Avatar className="profile-avatar"  sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar> */}
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h6">{username}</Typography>
              <Stack
                sx={{ mt: 5 }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <LocalPhoneIcon />
                <Typography sx={{ ml: "10px !important " }} variant="body2">
                  {" "}
                 {phone}
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
                 {email}
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
                  {address.city}
                </Typography>
              </Stack>
              <Button sx={{ mt: 3 }} variant="outlined">
                      {website}
                    </Button>
            </Box>
            </Grid>
            
              );
          })}
       </Grid>
        </Container>
      </div>
    );

    
}
export default TopUser