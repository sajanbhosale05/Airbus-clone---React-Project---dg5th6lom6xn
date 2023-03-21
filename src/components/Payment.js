import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
// import { StackedBarChartSharp } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const price = useSelector((state) => state.search.price);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);

  return (
    <Stack
      spacing={2}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      height={"90vh"}
      variant="outlined"
      width={"90%"}
      columnGap={"2rem"}
      margin={"20px auto"}
      id="paymentFormContainer"
      rowGap={"1rem"}
    >
      <Card
        sx={{ minWidth: 275 }}
        style={{ width: "100%", padding: "19px", border: "1px solid gray" }}
      >
        <CardContent>
          <Typography
            variant="h4"
            style={{ textAlign: "left" }}
            marginBottom={"20px"}
          >
            Fare Summary
          </Typography>
          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Base Fare
            </Typography>
            <Typography variant="h5" component="div">
              ${price}
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Fee & Surcharges
            </Typography>
            <Typography variant="h5" component="div">
              $740
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Total Amount
            </Typography>
            <Typography variant="h5" component="div">
              ${Number(price) + 740}
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Box
        style={{
          width: "100%",
          display: "flex",
          padding: "30px",
          flexDirection: "column",
          border: "1px solid gray",
          rowGap: "1rem",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "left" }}>
          Payment Method
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Card Number" variant="outlined" />
        <TextField id="outlined-basic" label="Expiry Date" variant="outlined" />
        <TextField id="outlined-basic" label="CVV" variant="outlined" />
        <Button variant="contained" style={{ alignSelf: "flex-start" }}>
          Pay
        </Button>
      </Box>
      <h1 id="hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
    </Stack>
  );
}
