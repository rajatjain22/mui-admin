"use client";

import * as React from "react";
import { CssBaseline, Box } from "@mui/material";
import DynamicRajatDrawer from "@/app/_components/layout/Sidebar/RajatDrawer";
import MainPage from "./_components/layout/Sidebar/MainPage";

export default function template({ children }) {
  // const { pathname } = useLocation();
  const pathname = "/";
  const pathArray = pathname.split("/").filter((e) => e !== "");
  const lastPath = pathArray.splice(pathArray.length - 1);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen((presVal) => !presVal);
  };

  return (
    <Box>
      <CssBaseline />
      <DynamicRajatDrawer open={open} handleDrawerOpen={handleDrawerOpen} />
      <MainPage open={open} handleDrawerOpen={handleDrawerOpen}>
        {children}
      </MainPage>
    </Box>
  );
}
