import React from "react";
import Grid from "../grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "../artist";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, getWindow } from "../../global";
import Navbar from "../navbar";
import Info from "../Info";
import Footer from "../footer";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-screen mx-auto overflow-hidden max-w-max">
      <Navbar />
      <Info />
      {/* <Footer /> */}
    </div>
  );
}