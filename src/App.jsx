import { useState } from "react";
import { colorsDS } from "./assets/colorsTheme";
import Hero from "./componets/Hero";
import CtaButton from "./componets/CtaButton";
import PallateBox from "./componets/PallateBox";
import HowToUse from "./componets/HowToUse";

function App() {
  const [themeColor, setColor] = useState({
    textColor: "#E6EAED",
    bg: "#1E1E1E",
    primary: "#A6B3C0",
    secondary: "#195496",
    accent: "#FF9900",
  });

  let lastColorIndex = null;

  function changeColor() {
    const colors = Object.keys(colorsDS); // will return a array of keys ie. [red,blue,purple]

    let randomIndex;

    //do while is to make sure that a colour is not reapeted twice
    do {
      randomIndex = Math.floor(Math.random() * colors.length); //will return a random index in length of object ie 0-4
    } while (randomIndex === lastColorIndex);

    lastColorIndex = randomIndex;
    console.log(lastColorIndex);

    //so if u do colors[randomIndex] we wil get red , purple or other colors
    const randomColorName = colors[randomIndex];
    console.log(randomColorName);

    const primaryColor = colorsDS[randomColorName].primary; // Access the primary color
    const secondaryColor = colorsDS[randomColorName].secondary; //Access the seconday colors
    const bg = colorsDS[randomColorName].bg; //Access the backGround color
    const textColor = colorsDS[randomColorName].textColor; // Access the textcolor color
    const accent = colorsDS[randomColorName].accent; // Access the accent color

    return { primaryColor, secondaryColor, textColor, bg, accent };
  }

  const randomhexcodes = changeColor();
  console.log(randomhexcodes);

  function updateColor() {
    setColor(() => {
      return {
        primary: randomhexcodes.primaryColor,
        secondary: randomhexcodes.secondaryColor,
        bg: randomhexcodes.bg,
        accent: randomhexcodes.accent,
        textColor: randomhexcodes.textColor,
      };
    });
  }

  return (
    <>
      <div
        style={{
          backgroundColor: themeColor.bg,
        }}
      >
        <div className="relative top-[36.3vh]">
          <Hero
            primary={themeColor.primary}
            secondary={themeColor.secondary}
            accent={themeColor.accent}
            bg={themeColor.bg}
            textColor={themeColor.textColor}
          />
          <div className="px-9" onClick={() => updateColor()}>
            <CtaButton
              primary={themeColor.primary}
              secondary={themeColor.secondary}
              accent={themeColor.accent}
              bg={themeColor.bg}
              textColor={themeColor.textColor}
            />
          </div>
          <PallateBox
            primary={themeColor.primary}
            secondary={themeColor.secondary}
            accent={themeColor.accent}
            bg={themeColor.bg}
            textColor={themeColor.textColor}
          />
          <HowToUse
            primary={themeColor.primary}
            secondary={themeColor.secondary}
            accent={themeColor.accent}
            bg={themeColor.bg}
            textColor={themeColor.textColor}
          />
          <PallateBox
            className="mt-6"
            primary={themeColor.primary}
            secondary={themeColor.secondary}
            accent={themeColor.accent}
            bg={themeColor.bg}
            textColor={themeColor.textColor}
          />
        </div>
      </div>
    </>
  );
}

export default App;
