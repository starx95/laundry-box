import React, { useState, useEffect } from "react";
import logo from "../assets/laundry-box-logo.png";
import "../App.css";
import { QrReader } from "react-qr-reader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const history = useNavigate();
  const [code, setCode] = useState(null);
  const [precScan, setPrecScan] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [scan, setScan] = useState(false);
  const [selected, setSelected] = useState("environment");
  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const handleError = (err) => {
    console.error(err);
  };
  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "" && !showDialog && !processing) {
      console.log(`loaded >>>`, scanData);
      // setPrecScan(scanData);
      await fetchData({ qr: scanData });
    }
  };

  async function fetchData({ qr = "" }) {
    try {
      setProcessing(true);
      const result = await axios.get(
        `https://ucs-goma-backend.herokuapp.com/payement/scan?matricule=${qr}&forThisYear=1`
      );
      console.log("scanned code", qr);
      const { message, payement } = result.data;
      console.log(payement);
      if (!message) {
        setCode({
          text: payement.matricule,
          identite: `${payement.nom} ${payement.postnom} ${payement.prenom}`,
          promotion: payement.auditoire,
          annee: payement.annee,
          frais: Number.parseFloat(payement.totalPayer),
          total: Number.parseFloat(payement.totalAPayer),
          recouvrement: "Premiere tranche",
          maxEncours: 800,
        });
        // setPrecScan(null);
        setDiaglog(true);
      } else {
        setCode(null);
        setPrecScan(null);
        setErrorMessage(message);
        setDiaglog(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="logo-padding">
        <img src={logo} className="logo" />
      </div>
      <div className="scan-qr-text">
        <p>Scan QR</p>
      </div>
      <div className="video-qr">
        {" "}
        <QrReader
          facingMode={selected}
          delay={500}
          onError={handleError}
          onScan={handleScan}
          // chooseDeviceId={()=>selected}
          videoStyle={{ backgroundColor: "#000000", borderRadius: "1rem" }}
        />
      </div>
      <div className="scan-qr-btn">
        <button
          className="home-btn"
          onClick={() => {
            history("/welcome");
          }}
        >
          Scan QR
        </button>
      </div>
    </>
  );
}

export default WelcomePage;
