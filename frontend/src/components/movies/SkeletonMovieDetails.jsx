import { Container, Skeleton } from "@mui/material";

const SkeletonMovieDetails = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "4rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // border: "solid red",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={600}
          height={600}
          sx={{
            marginX: "2rem",
          }}
        />
        <Skeleton
          variant="rectangular"
          width={400}
          height={500}
          sx={{
            marginX: "4rem",
          }}
        />
      </Container>
    </>
  );
};

export default SkeletonMovieDetails;
