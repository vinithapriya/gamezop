import * as React from 'react';
import { NewsType } from '../types/types';


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../components/Header"

const NewsList:React.FC<{newsList:NewsType[]}>=({newsList})=> {
return(
    <>
  <Header/>
  <>
      <Container maxWidth="lg">
        <Grid
          sx={{ flexGrow: 1, mt: 5 }}
          container
          rowSpacing={1}
          columnSpacing={{ sm: 2, md: 3 }}
          spacing={2}
        >
          {newsList.map((news) => {
            return (
              <Grid item={true} md={6} xs={12} sx={{ pl: 2, pr: 2 }}>
                <Card
                  variant="outlined"
                  sx={{
                    minWidth: 275,
                    borderRadius: "10px",
                    border: "1px solid #E7EBF0",
                    pb: "10px",
                    boxShadow: "2px 2px 5px 0px #00000030",
                    marginBottom: "22px",
                    backgroundColor: "#bdbdbd3b",
                    height: "215px",
                  }}
                >
                  <CardContent  sx={{  height: "125px" }}>
                    <Stack direction="row" sx={{ mb: 2 }} spacing={1}>
                      <Chip
                        sx={{ textOverflow: " ellipsis", height: "24px" }}
                        label="News"
                      />
                    </Stack>
                    <Typography
                      sx={{
                        mb: 1.5,
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        alignItems: "center",
                        color: "#1A2027",
                      }}
                      variant="h5"
                      component="div"
                    >
                      {news.title}
                    </Typography>
              
                  </CardContent>
                  <CardActions sx={{ pl: 2, pr: 2 }}>
                    <Grid container>
                      <Grid
                        item={true}
                        md={6}
                        xs={12}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                      >
                        <Avatar sx={{ mb: 1 }} alt="Author"></Avatar>
                        
                      </Grid>
                      <Grid
                        item={true}
                        sx={{ textAlign: "right" }}
                        md={6}
                        xs={12}
                      >
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                          target="_blank"
                        >
                          {" "}
                          <Button endIcon={<KeyboardArrowRightIcon />}>
                            Read More
                          </Button>
                        </a>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
    
    
    </>
)
}
export default NewsList