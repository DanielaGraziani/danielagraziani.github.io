  // function startCakeAnimation() {
  //   const name = "amorcito 💗";
  //   const candleCount = 6;

  //   const birthdayText = document.getElementById("birthdayText");
  // //   birthdayText.innerHTML = `
  // //     <div id="mainTitle" class="text-xl pixel-font mb-1">Feliz Cumpleaños, ${name}!</div>
  // //     <div id="subTitle" class="text-sm text-gray-600">Pide un deseo y sopla las velas (en serio).</div>
  // //   `;

  //   const cake = document.getElementById("cake");
  //   createCandles(candleCount, cake);
  //   startMicDetection();
  // }

  //   function createCandles(count, cake) {
  //     cake.innerHTML = "";
  //     const colors = ["green-candle", "purple-candle", "blue-candle", "yellow-candle"];
  //     const candlesPerRow = 3;

  //     for (let i = 0; i < count; i++) {
  //       const candle = document.createElement("div");
  //       candle.classList.add("candle");
  //       candle.classList.add(colors[Math.floor(Math.random() * colors.length)]);

  //       const row = Math.floor(i / candlesPerRow);
  //       const col = i % candlesPerRow;

  //       candle.style.top = `${10 + row * 20}px`;
  //       candle.style.left = `${10 + col * 12}px`;

  //       cake.appendChild(candle);
  //     }
  //   }

  // async function startMicDetection() {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  //     const source = audioContext.createMediaStreamSource(stream);
  //     const analyser = audioContext.createAnalyser();
  //     analyser.fftSize = 512;

  //     source.connect(analyser);
  //     const dataArray = new Uint8Array(analyser.frequencyBinCount);
  //     let blown = false;

  //   function detectBlow() {
  //   analyser.getByteFrequencyData(dataArray);

  //   let highFreqSum = 0;
  //   let lowFreqSum = 0;
  //   const midpoint = dataArray.length / 2;

  //   for (let i = 0; i < dataArray.length; i++) {
  //     if (i < midpoint) lowFreqSum += dataArray[i];
  //     else highFreqSum += dataArray[i];
  //   }

  //   const highAvg = highFreqSum / (dataArray.length / 2);
  //   const lowAvg = lowFreqSum / (dataArray.length / 2);
  //   const ratio = highAvg / (lowAvg + 1);

  //   // Solo debug en consola
  //   // console.log("Ratio:", ratio.toFixed(2));

  //   if (ratio > 0.9 && !blown) {
  //     blown = true;
  //     blowOutCandles();
  //   }
  //   requestAnimationFrame(detectBlow);
  // }


  //     detectBlow();
  //     // console.log("ratio", ratio.toFixed(2));
  //   } catch (err) {
  //     console.error("Mic access error:", err);
  //   }
  // }

  // function blowOutCandles() {
  //   const candles = document.querySelectorAll(".candle");
  //   candles.forEach((candle) => {
  //     const delay = Math.random() * 1000;
  //     setTimeout(() => candle.classList.add("blown"), delay);
  //   });

  //   setTimeout(() => {
  //     const subTitle = document.getElementById("subTitle");
  //     if (subTitle) subTitle.textContent = `Espero que todos tus deseos se cumplan!! 🎉`;
  //   }, 1200);
  // }

//   function startCakeAnimation() {
//   const candleCount = 6;
//   const cake = document.getElementById("cake");
//   createCandles(candleCount, cake);

//   // ✅ OJO: ya no arrancamos el micrófono aquí
//   // startMicDetection(); <-- eliminado
// }

// function createCandles(count, cake) {
//   cake.innerHTML = "";
//   const colors = ["green-candle", "purple-candle", "blue-candle", "yellow-candle"];
//   const candlesPerRow = 3;

//   for (let i = 0; i < count; i++) {
//     const candle = document.createElement("div");
//     candle.classList.add("candle");
//     candle.classList.add(colors[Math.floor(Math.random() * colors.length)]);

//     const row = Math.floor(i / candlesPerRow);
//     const col = i % candlesPerRow;

//     candle.style.top = `${10 + row * 20}px`;
//     candle.style.left = `${10 + col * 12}px`;
//     candle.style.position = "absolute";

//     cake.appendChild(candle);
//   }
// }

// async function startMicDetection() {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     const source = audioContext.createMediaStreamSource(stream);
//     const analyser = audioContext.createAnalyser();
//     analyser.fftSize = 512;

//     source.connect(analyser);
//     const dataArray = new Uint8Array(analyser.frequencyBinCount);
//     let blown = false;

//     function detectBlow() {
//       analyser.getByteFrequencyData(dataArray);

//       let highFreqSum = 0;
//       let lowFreqSum = 0;
//       const midpoint = dataArray.length / 2;

//       for (let i = 0; i < dataArray.length; i++) {
//         if (i < midpoint) lowFreqSum += dataArray[i];
//         else highFreqSum += dataArray[i];
//       }

//       const highAvg = highFreqSum / (dataArray.length / 2);
//       const lowAvg = lowFreqSum / (dataArray.length / 2);
//       const ratio = highAvg / (lowAvg + 1);

//       console.log("Ratio:", ratio.toFixed(2));

//       // Umbral más bajo para laptops/móviles
//       if (ratio > 0.1 && !blown) {
//         blown = true;
//         blowOutCandles();
//       }
//       requestAnimationFrame(detectBlow);
//     }

//     detectBlow();
//   } catch (err) {
//     console.error("Mic access error:", err);

//     // Mensaje para el usuario si el micro está bloqueado
//     const birthdayText = document.getElementById("birthdayText");
//     if (birthdayText) {
//       birthdayText.textContent =
//         "⚠️ No tengo acceso al micrófono. Activá el mic para poder soplar las velas.";
//     }
//   }
// }

// function blowOutCandles() {
//   const candles = document.querySelectorAll(".candle");
//   candles.forEach((candle) => {
//     const delay = Math.random() * 1000;
//     setTimeout(() => candle.classList.add("blown"), delay);
//   });
// }

function startCakeAnimation() {
  const candleCount = 6;
  const cake = document.getElementById("cake");
  createCandles(candleCount, cake);

  // ✅ El micrófono solo se arranca con el botón "Soplar velas 🎂" (en script.js)
}

function createCandles(count, cake) {
  cake.innerHTML = "";
  const colors = ["green-candle", "purple-candle", "blue-candle", "yellow-candle"];
  const candlesPerRow = 3;

  for (let i = 0; i < count; i++) {
    const candle = document.createElement("div");
    candle.classList.add("candle");
    candle.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    const row = Math.floor(i / candlesPerRow);
    const col = i % candlesPerRow;

    candle.style.top = `${10 + row * 20}px`;
    candle.style.left = `${10 + col * 12}px`;
    candle.style.position = "absolute";

    cake.appendChild(candle);
  }
}

async function startMicDetection() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;

    source.connect(analyser);
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    let blown = false;

    function detectBlow() {
      analyser.getByteFrequencyData(dataArray);

      let highFreqSum = 0;
      let lowFreqSum = 0;
      const midpoint = dataArray.length / 2;

      for (let i = 0; i < dataArray.length; i++) {
        if (i < midpoint) {
          lowFreqSum += dataArray[i];
        } else {
          highFreqSum += dataArray[i];
        }
      }

      const highAvg = highFreqSum / (dataArray.length / 2);
      const lowAvg = lowFreqSum / (dataArray.length / 2);
      const ratio = highAvg / (lowAvg + 1);
      const total = highFreqSum + lowFreqSum;

      // 🔎 Logs para debug
      console.log(
        "Ratio:", ratio.toFixed(2),
        "| High:", highAvg.toFixed(1),
        "| Low:", lowAvg.toFixed(1),
        "| Total:", total.toFixed(0)
      );

      // ✅ Condición combinada
      if ((ratio > 0.6 || total > 100) && !blown) {
        blown = true;
        blowOutCandles();
      }

      requestAnimationFrame(detectBlow);
    }

    detectBlow();
  } catch (err) {
    console.error("Mic access error:", err);

    // Mensaje de fallback en pantalla
    const birthdayText = document.getElementById("birthdayText");
    if (birthdayText) {
      birthdayText.textContent =
        "⚠️ No tengo acceso al micrófono. Activá el mic para poder soplar las velas.";
    }
  }
}

function blowOutCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach((candle) => {
    const delay = Math.random() * 1000;
    setTimeout(() => candle.classList.add("blown"), delay);
  });
}
