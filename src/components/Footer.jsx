import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        &copy; Copyright {year}{" "}
        <a
          href="https://github.com/ametthapa"
          target="_blank"
          style={{
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.borderBottom = "1px solid white")
          }
          onMouseLeave={(e) =>
            (e.target.style.borderBottom = "1px solid transparent")
          }
        >
          MrThapa
        </a>
        , All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
