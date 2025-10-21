import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const botLink = "https://t.me/MrMohsenAI_bot"; // رابط البوت

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffffff, #b0e0d6ff)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        color: "#002064ff",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        أهلاً بيك في بوت مستر محسن AI
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          fontSize: "1.3rem",
          marginBottom: "2rem",
          maxWidth: "550px",
          lineHeight: "1.6",
        }}
      >
        ابعت أي سؤال في الدراسات الاجتماعية والـ بوت هيرد عليك بطريقة سهلة
        ومبسطة 💪
      </motion.p>

      <motion.a
        href={botLink}
        target="_blank"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "#2bc6ffff",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "1rem 2.5rem",
          backgroundColor: "#0088cc",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        افتح البوت على Telegram
      </motion.a>
    </div>
  );
}
