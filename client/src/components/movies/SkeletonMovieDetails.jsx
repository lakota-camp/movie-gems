import { Container, Skeleton, Grid, Card } from "@mui/material";

const SkeletonMovieDetails = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={3}>
        {/* Movie Details Skeleton */}
        <Grid item xs={12} md={7}>
          <Card sx={{ height: "100%", border: "2px solid grey", p: 2 }}>
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="100%" height={25} />
            <Skeleton variant="text" width="100%" height={25} />
            <Skeleton variant="text" width="80%" height={25} />
            <Skeleton variant="text" width="70%" height={25} />
            <Skeleton variant="text" width="60%" height={25} />
            <Skeleton variant="text" width="90%" height={25} />
            <Skeleton variant="text" width="75%" height={25} />
            <Skeleton variant="text" width="85%" height={25} />
            <Skeleton variant="text" width="50%" height={25} />
            <Skeleton variant="text" width="40%" height={40} sx={{ mt: 2 }} />
            <Skeleton variant="text" width="70%" height={25} />
            <Skeleton variant="text" width="65%" height={25} />
            <Skeleton variant="text" width="75%" height={25} />
          </Card>
        </Grid>

        {/* Movie Poster Skeleton */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Skeleton
              variant="rectangular"
              width="100%"
              height={500}
              sx={{ maxWidth: 400, borderRadius: 2 }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkeletonMovieDetails;
