import { Grid2, ListItem, Skeleton, Stack } from "@mui/material";
import React from "react";

const LayoutLoader = () => {
  return (
    <>
      <Grid2
        container
        height={"calc(100vh - 4rem)"}
        width={"100vw"}
        direction={"row"}
        gap={"1rem"}
        columns={3}
        wrap={"nowrap"}
      >
        <Grid2
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          width={"100%"}
          height={"100%"}
        >
          <Skeleton variant="rectangular" width={"100%"} height={"100vh"} />
        </Grid2>
        <Grid2 xs={12} sm={8} md={5} lg={6} width={"100%"} height={"100%"}>
            <Stack spacing={"1rem"}>

          {Array.from({ length: 10 }).map((el,index) => (
              <Skeleton key={index} variant="rounded" width={"100%"} height={"5rem"} />
            ))}
            </Stack>
        </Grid2>
        <Grid2
          md={4}
          lg={3}
          width={"100%"}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Skeleton variant="rectangular" width={"100%"} height={"100vh"} />
        </Grid2>
      </Grid2>
    </>
  );
};



export default LayoutLoader;
