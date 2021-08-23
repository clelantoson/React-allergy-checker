import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Scanner from "./Scanner";
import Button from "@material-ui/core/Button";

const ScannerDisplay = () => {
  const [scanning, setScanning] = useState(false);
  // const [results] = useState([]);
  const [productEAN, setProductEAN] = useState(null);
  const scannerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("will fetch now");
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${productEAN}.json`)
      .then((response) => {
        if (response.data.status === 0) {
          console.log("no product found for EAN", productEAN);
        } else {
          history.push(`product/${productEAN}`);
        }
      })
      .catch(() => console.log("il y a eu une erreur"));
  }, [productEAN]);

  return (
    <div>
      <Button
        onClick={() => setScanning(!scanning)}
        variant="contained"
        color="secondary"
      >
        {scanning ? "Stop" : "Start"}
      </Button>
      <div
        ref={scannerRef}
        style={{ position: "relative", border: "3px solid red" }}
      >
        {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
        <canvas
          className="drawingBuffer"
          style={{
            position: "absolute",
            top: "0px",
            // left: '0px',
            // height: '100%',
            // width: '100%',
            border: "3px solid green",
          }}
          width="640"
          height="480"
        />
        {scanning ? (
          <Scanner
            scannerRef={scannerRef}
            // onDetected={(result) => console.log(result)}
            onDetected={(result) => setProductEAN(result)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ScannerDisplay;
