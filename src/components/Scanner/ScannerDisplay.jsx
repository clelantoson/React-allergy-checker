import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Scanner from "./Scanner";
// import Button from "@material-ui/core/Button";
import "./ScannerDisplay.scss";
import useSound from "use-sound";
import beepSound from "./beep.mp3";

const ScannerDisplay = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [productEAN, setProductEAN] = useState(null);
  const scannerRef = useRef(null);
  const history = useHistory();
  const [play] = useSound(beepSound);

  useEffect(() => {
    setIsMounted(true);
    console.log("is now mounted");
  }, []);

  // useEffect(
  //   () => () => {
  //     isMounted.current = false;
  //     console.log("will unmount");
  //   },
  //   []
  // );

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
    <div ref={scannerRef} id="quagga-scanner">
      <canvas />
      {isMounted && (
        <>
          <hr id="scan-laser" />
          <Scanner
            scannerRef={scannerRef}
            // onDetected={(result) => console.log(result)}
            onDetected={(result) => {
              setProductEAN(result);
              play();
            }}
          />
        </>
      )}
    </div>
  );
};

export default ScannerDisplay;
