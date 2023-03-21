import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import HeroBgImage from "../assets/herosection_bg.jpg";

import { useDispatch, useSelector } from "react-redux";
import { fromToSetInRedux } from "../app/SearchSlice";


export default function BasicCard() {
     
  const dispatch = useDispatch();

    const [from , setFrom] = React.useState("");
    const [to , setTo] = React.useState("");
    const [depart , setDepart] = React.useState("");
    const [returnBack, setReturnBack] = React.useState("");


    const handleSearch = (e) =>{
        e.preventDefault();

        // if(from && to ){
          dispatch(fromToSetInRedux({from: from , to : to}));
        // }
        // }else {
        //   alert("Fiill input");
        // }
    }


  return (
    <Box>
      <Card sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover >
          <img src={HeroBgImage} alt="Hero bg Image" />
        </CardCover> 

        <CardContent id="mainContainer">
          <Box
            id="cardContent"
            >
              <Typography id="heroText"  textColor="#fff">Let the journey begin</Typography>

            <Box id="hero_search_flights">
              <Box className="inputConatiner">
                <label htmlFor="from">From</label>
                <input type="text" value={from} name="" id="from" placeholder="Amsterdam" onChange={(e)=> setFrom(e.target.value)}/>
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="to">To</label>
                <input type="text" name="" id="to" placeholder="Stockholm" value={to} onChange={(e)=> setTo(e.target.value)}/>
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="depart">Depart</label>
                <input
                  type="date"
                  name=""
                  id="depart"
                  value = {depart}
                  // placeholder="01/Sa/2023"
                  onChange={(e)=> setDepart(e.target.value)}
                />

              </Box>

              <Box className="inputConatiner">
                <label htmlFor="return">Return</label>
                <input
                  type="date"
                  name=""
                  id="return"
                  value = {returnBack}
                  // placeholder="01/Sa/2023"
                  onChange={(e)=> setReturnBack(e.target.value)}

                />
              </Box>

              <button type="submit" id="btn" onClick={handleSearch}>
                SEARCH FLIGHTS
              </button>
            </Box>

            </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
