import React from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const LayoutComponent = ({children}: ILayout) => {
  const location = useLocation()
  return(
    location.pathname === '/login' || location.pathname === '/register' 
    ? (
      <>
        {children}
      </>
    ) 
      : (
        <Box>     
          <TopBarComponent />
          {children}
        </Box>
      )
  )
}

export default LayoutComponent