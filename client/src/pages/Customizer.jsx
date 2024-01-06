import React, { useState, useEffect } from "react";
import { AninmatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config"; // will be used later on to set the url of our state
import state from "../store";
import { downlaod } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
export const Customizer = () => {
  // This will be the main part of out application
  return <div>Customizer</div>;
};
