import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import "./Search.css";
const useStyles = makeStyles({
  search: {
    position: "absolute",
    top: "35px",
    left: "25%",
    width: "100vw",
  },
  searchHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "559px",
    padding: "10px",
    backgroundColor: "white",
    position: "absolute",
    left: "0",
  },
  input: {
    width: "539px",
    padding: "20px",
    position: "absolute",
    left: "0",
    height: "30px",
    top: "38px",
    border: "none",
    "&:focus": {
      outlineWidth: "0 !important",
    },
  },
  button: {
    position: "absolute",
    left: "0",
    top: "87px",
    textTransform: "inherit !important",
    backgroundColor: "#ff7779",
    color: "white",
    width: "579px",
    "&:hover": {
      backgroundColor: "white",
      color: "#ff7779",
    },
  },
});

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
