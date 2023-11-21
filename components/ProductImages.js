import { useEffect, useState } from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  img {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const OtherImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  overflow-x: scroll;
  img {
    max-width: 100%;
    height: 60px;
    object-fit: cover;
    border: ${(props) =>
      props.active === "true" ? "3px solid gray" : "1px solid #eaeaea"};
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      border: 3px solid gray;
    }
  }
`;

export default function ProductImages({ images }) {
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    if (images?.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);
  return (
    <>
      <ImageBox>
        <img src={mainImage} alt="main" />
      </ImageBox>
      <OtherImages>
        {images?.length > 0 &&
          images.map((image) => (
            <img
              key={image}
              src={image}
              alt="thumbnail"
              active={mainImage === image ? "true" : "false"}
              onClick={() => setMainImage(image)}
            />
          ))}
      </OtherImages>
    </>
  );
}
