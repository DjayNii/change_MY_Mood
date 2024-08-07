import { useState } from "react";
import { colorsDS } from "./assets/colorsTheme";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import UseCases from "./componets/UseCases";

function App() {
  const [themeColor, setColor] = useState({
    textColor: "#ECEBED", // Light grey for text
    bg: "#0C090E", // Dark purple/black background
    primary: "#7B1FA2", // Rich purple for primary
    secondary: "#2F4A29", // Even darker olive green for a deeper tone
    accent: "#a2f62f", // Bright green accent, unchanged
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
        className="w-[100vw] h-[100%] "
        style={{
          backgroundColor: themeColor.bg,
        }}
      >
        <Navbar
          primary={themeColor.primary}
          secondary={themeColor.secondary}
          accent={themeColor.accent}
          bg={themeColor.bg}
          textColor={themeColor.textColor}
        />

        <div className="text-center">
          <button
            className="w-[20vh]  h-[10vh] mb-4 text-xl font-thunder font-bold tracking-wider rounded-md"
            style={{
              background: `linear-gradient(${themeColor.secondary},${themeColor.accent})`,
              color: themeColor.primary,
              boxShadow: ` 0 2px 8px 0 ${themeColor.accent}, 0 0px 20px 0 ${themeColor.accent}`,
            }}
            onClick={updateColor}
          >
            Change the colors
          </button>
        </div>
        <Hero
          primary={themeColor.primary}
          secondary={themeColor.secondary}
          accent={themeColor.accent}
          bg={themeColor.bg}
          textColor={themeColor.textColor}
        />
        <UseCases
          primary={themeColor.primary}
          secondary={themeColor.secondary}
          accent={themeColor.accent}
          bg={themeColor.bg}
          textColor={themeColor.textColor}
        />
      </div>
    </>
  );
}

export default App;
