import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 12,
  margin: "40px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const Aside = styled(Box)(({ theme }) => ({
  position: "fixed",
  marginTop: "40px",
  backgroundColor: "white",
  width: "23%",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`,
  padding: "0 10px",
  [theme.breakpoints.down("lg")]: {
    width: "91%",
  },
  [theme.breakpoints.down("md")]: {
    width: "89%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "84%",
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  marginLeft: "28%",
  /* padding: "30px", */
  width: "100%",
  /* border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`, */
  borderRadius: "12px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const UserItem = styled(ListItem)(({ theme }) => ({
  fontFamily: "jost",
  padding: "3px 0",
  ".link": {
    padding: "8px 10px",
    borderRadius: "5px",
    transition: "background 150ms ease-in",
    display: "flex",
    textDecoration: "none",
    color: theme.palette.common.PanelDarkRed,
    width: "100%",

    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.common.panelHoverGrey,
    },
    "&.active": {
      backgroundColor: theme.palette.common.panelActiveRed,
      borderLeft: "7px solid red",
      "&:hover": {
        backgroundColor: theme.palette.common.panelActiveRed,
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.common.digitaRed,
      },
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: "40px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.panelGrey,
  },
}));

export const userAvatarStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginLeft: "5px",
  img: {
    width: "40px",
    borderRadius: "50%",
    border: "2px solid #eee",
    transition: "all 100ms ease-in",
    "&:hover ": {
      borderColor: "common.digitaRed",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "common.panelGrey",
  },
};

export const UserNavItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0.8rem 0",
  padding: ".8rem .5rem 0 .4rem",
}));

export const topMenuItem = {
  color: "common.digitaRed",
  cursor: "pointer",
  "&:hover": {
    "& .navIcon": {
      transition: "0.2s",
      marginLeft: "0.4rem",
    },
  },
};

/* =================== Profile ===================== */
export const wrapper = {
  border: "1px solid #d8d8d8",
  borderRadius: "12px",
  padding: "30px",
  overflow: "auto",
  "& .orderImg": {
    width: "80px",
  }
};

export const profileWrapper = {
  cursor: "pointer",
  padding: "30px",
  width: "200px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  "& .imgItem": {
    width: "100px",
    height: "100px",
  },
};

/* ============================== Latest shops =========================== */

export const shopWrapper = {
  display: "flex",
  flexBasis: "100px",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.10)",
  gap: 1,
  margin: "2rem 0",
};

/* ============= Wishlist ============ */
export const cardWrapper = {
  width: "100%",
  cursor: "pointer",
  boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.10)",
};

export const deleteBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  border: "1px solid #d8d8d8",
  color: "#555",
  fontSize: "16px",
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": { backgroundColor: "#999", color: "#fff" },
};

export const addBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "common.digitaRed",
  fontWeight: 400,
  border: "1px solid #f03637",
  fontSize: "16px",
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "#fff",
    borderColor: "common.digitaRed",
    "& .addIcon": {
      transition: "0.15s",
      color: "#fff",
    },
  },
};

export const addressBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "common.digitaRed",
  fontWeight: 400,
  border: "1px solid #f03637",
  fontSize: "16px",
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "#fff",
    borderColor: "common.digitaRed",
    "& .addIcon": {
      transition: "0.15s",
      color: "#fff",
    },
  },
};

export const between = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

/* =================== Personal info ==================== */
export const CardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "4px",
}));