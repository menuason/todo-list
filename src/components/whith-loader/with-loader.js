import { CircularProgress } from '@mui/material';

export const WithLoader = ({ isLoading, className, children }) => {
  return (
    isLoading ? <CircularProgress classeName = {className} size={24}/> : <>{children}</>
  );
};
