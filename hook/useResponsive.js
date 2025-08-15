 
import { useTheme, useMediaQuery } from '@mui/material';
 
const useResponsive = () => {
 
    const theme = useTheme();
 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
 
    return { isSmallScreen, isMediumScreen };
 
};
 
export default useResponsive;
 