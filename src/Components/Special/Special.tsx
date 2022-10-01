import { Container, Grid, Box } from "@mui/material";
import SpecialHeader from "./Components/Header/SpecialHeader";
import SpecialItem from "./Components/SpecialItem/SpecialItem";
import SupportItems from "./Components/SupportItems/SupportItems";
import SpecialCards from "./Components/SpecialCards/SpecialCards";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import SpecialProductPlaceholder from "../Placeholders/SpecialProductPlaceholder";
import { useGetAllProductsQuery } from "../../features/products/productsApi";

const Special = () => {
  const [selectedSorting, setSelectedSorting] = useState("latest");

  const { ref, inView } = useInView({ triggerOnce: true });
  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(`page=1&limit=9&sort=${selectedSorting}`);
  const products = productsData?.data ?? [];
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        position: "relative",
        backgroundColor: "white",
        marginY: { xs: "-45px", sm: "-120px" },
        width: "96%",
        zIndex: "10",
      }}
      ref={ref}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          overflow: "hidden",
          paddingY: "20px",
          animation: (theme) =>
            inView
              ? `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`
              : "",
        }}
      >
        <SpecialHeader
          selectedSorting={selectedSorting}
          setSelectedSorting={setSelectedSorting}
        />

        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {!isLoading && !isError
              ? products.map((item) => (
                  <SpecialItem
                    key={item._id!}
                    id={item._id!}
                    title={item.title}
                    image={item.image}
                    offPrice={item.offPrice}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              : Array(9)
                  .fill(null)
                  .map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      sx={{ height: "150px" }}
                      key={index}
                    >
                      <SpecialProductPlaceholder />
                    </Grid>
                  ))}
          </Grid>
        </Box>
        <SpecialCards />
        <SupportItems />
      </Container>
    </Container>
  );
};

export default Special;
