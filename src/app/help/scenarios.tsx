import neverSticksImg from "./thumbnails/never-sticks.png";
import unexpectedOffsetImg from "./thumbnails/unexpected-offset.png";

export const scenarios = [
  {
    description: "Unexpected sticky offset",
    img: unexpectedOffsetImg,
    slug: "unexpected-offset",
  },
  { description: "Never sticks", img: neverSticksImg, slug: "never-sticks" },
  {
    description: "Starts as sticky, but stops after scrolling",
    img: neverSticksImg,
    slug: "stops-unexpectedly",
  },
];
