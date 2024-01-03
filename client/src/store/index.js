import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48 ",
  isLogoTexture: true, // Are we currently displaing the logo on our shirt.
  isFullTexture: false,
  logoDecal: "./threejs.png", // The default Logo
  fullDecal: "./threejs.png",
});

export default state;
