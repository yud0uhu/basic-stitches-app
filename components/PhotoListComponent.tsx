import React from "react";
import { styled } from "../stitches.config";

const Text = styled("p", {
  color: "$hiContrast",
});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",

  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});

const ImageList = styled("ul", {
  listStyle: "none",
  padding: "0",
  margin: "0",
});

const ImageListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
});

const Image = styled("img", {
  width: "100px",
  height: "auto",
  borderRadius: "$1",
});

const PhotoListComponent = ({ text, photoList }) => {
  return (
    <Container size={{ "@initial": "1", "@bp1": "2" }}>
      <Text as="h1">PhotoListComponent from Stitches.</Text>
      <p>text: {text}</p>
      <ImageList>
        {photoList.map((photo) => (
          <ImageListItem key={photo.id}>
            <Image src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default PhotoListComponent;
