import React from "react";

export default function Home() {
  const botLink = "http://t.me/MrMohsenAI_bot"; // رابط البوت

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f6fa",
      fontFamily: "Arial, sans-serif",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        أهلاً بيك في بوت مستر محسن AI
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", textAlign: "center" }}>
        ابعت أي سؤال في الدراسات الاجتماعية والـ بوت هيرد عليك بطريقة سهلة ومبسطة 💪
      </p>
      <a
        href={botLink}
        target="_blank"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#0088cc",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1.1rem",
          transition: "all 0.2s ease-in-out"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0077b6"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#0088cc"}
      >
        افتح البوت على Telegram
      </a>
    </div>
  );
}
