import { Box, Container, Grid, Skeleton } from "@mui/material";

const MovieGridSkeleton = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <Box sx={{ width: "100%", padding: 2 }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
            justifyContent="center"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ maxWidth: 345, margin: "auto" }}>
                  <Skeleton variant="rectangular" width={345} height={500} />
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={30}
                    sx={{ mt: 2, mx: "auto" }}
                  />
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={30}
                    sx={{ mt: 1, mx: "auto" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="80%"
                    height={50}
                    sx={{ mt: 2, mx: "auto" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MovieGridSkeleton;
