import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      primary: "#FBBC39",
    },
  },
});

const Container = styled("main", {
  backgroundColor: "$primary",
});
function ExampleComponent() {
  return <Container>Hello World</Container>;
}

export default ExampleComponent;
