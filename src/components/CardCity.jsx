import { ImageList, Typography } from "@mui/material";


export default function CardCity() {
  return (
    <>
      <Typography variant="h3" color="initial">
        CARD CITY
      </Typography>
      <ImageList
        sx={{
          width: 500,
          height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      ></ImageList>
    </>
  );
}
