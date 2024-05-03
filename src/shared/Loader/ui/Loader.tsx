import { CircularProgress, Typography, Box } from '@mui/material';

import type { FC } from 'react';

type TLoaderProps = {
  message?: string;
};

const Loader: FC<TLoaderProps> = ({ message }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="40vh"
  >
    <CircularProgress color="secondary" />
    {message && (
      <Typography variant="body1" mt={2}>
        {message}
      </Typography>
    )}
  </Box>
);

export default Loader;
