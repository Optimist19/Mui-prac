import { Skeleton, Stack } from "@mui/material";
import React from "react";

function MuiSkeleton() {
  return (
    <>
      <Stack spacing={1} width="250px">
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="circular" animation="wave" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="wave"
        />
      </Stack>


      <Stack spacing={1} width="250px">
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" animation={false} width={40} height={40} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation={false}
        />
      </Stack>
    </>
  );
}

export default MuiSkeleton;
