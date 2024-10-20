import { Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import React from "react";
import { useInputValidation } from "6pp";

const Search = () => {
  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack direction={"column"} p={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          
        />
      </Stack>
    </Dialog>
  );
};

export default Search;
