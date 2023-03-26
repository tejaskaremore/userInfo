
import {
  Box,
  Stack,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { useState } from "react";
import moment from "moment";
const UserForms = (props) => {
  const {userData, setUserData} = props;
  
  const [name, SetUserName] = useState("name1");
  const [dob, SetDob] = useState(moment());
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [college, SetCollege] = useState("");


  const submitUserForm = () => {
    // console.log('user name',name);
    // console.log('dob', dob.format('DD/MM/YYYY'));
    // console.log('age', age);
    // console.log('gender', gender);
    // console.log('college', college);
    const newDob = dob.format('DD/MM/YYYY');
    const newUserObj = {code: `u${userData.length}`, name, dob:newDob, age, gender, college}
    // console.log('newUserObj',newUserObj)
    // console.log('userData',userData)
    const newUserData = [
      ...userData,
      newUserObj
    ]
    console.log('newUserData',newUserData)
    setUserData(newUserData)
  }
  return (
    <Box>
      <Stack spacing={2}>
        {/* Name */}
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => {
            SetUserName(event.target.value)
          }}
        />
        {/* DOB */}
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Controlled picker"
            value={dob}
            onChange={(newValue) => {
              SetDob(newValue)
              SetAge(moment().diff(newValue, 'year'))
            }}
          />
        </LocalizationProvider>
        {/* Age => calculate from DOB  */}
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          value={age}
        />
        {/* Gender */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            value={gender}
            onChange={(event) => SetGender(event.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        {/* College */}
        <TextField
          id="outlined-basic"
          label="College"
          variant="outlined"
          value={college}
          onChange={(event) => SetCollege(event.target.value)}
        />
        <Button variant="contained" color="success" onClick={submitUserForm}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForms;