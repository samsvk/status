import React from "react";
import Grid from "../grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "../artist";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, getWindow } from "../../global";
import Navbar from "../navbar";
import Info from "../Info";

export default function Home() {
  function handleLogin() {
    const window = getWindow();
    window.location.href = "http://localhost:3001/login";
  }

  return (
    <div className="flex h-full min-h-screen mx-auto max-w-[1650px] items-start flex-col relative">
      <Navbar />
      <Info />
    </div>
  );
}
