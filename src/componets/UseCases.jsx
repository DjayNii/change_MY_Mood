import React from "react";

function UseCases(props) {
  return (
    <>
      <div
        className="h-[100vh] w-full flex flex-col items-center gap-20"
        style={{
          background: `linear-gradient(to top right,  ${props.secondary},${props.accent})`,
        }}
      >
        <h1
          className="mt-10 h-[5vh] w-[25vw] text-base rounded-lg flex items-center justify-center font-Anton border-b-[1vh] border-x-[.2vh] lg:h-[8vh] lg:text-2xl"
          style={{
            color: props.bg,
            borderColor: props.bg,
            boxShadow: ` 0 2px 8px 0 ${props.bg}, 0 0px 20px 0 ${props.accent}`,
          }}
        >
          Use Cases
        </h1>
        <div
          className="xl:h-[58vh] w-[95%] flex flex-col gap-2 p-2 text-base sm:text-xl md:text-xl lg:text-2xl "
          style={{ backgroundColor: props.bg }}
        >
          <div
            className=" rounded-md flex p-2 font-lexend"
            style={{
              flex: 1,
              background: props.secondary,
              color: props.textColor,
            }}
          >
            1) Pick your star color(Primary Color) and your backup
            dancer(Secondary Color). Star color shines on CTAs and main acts,
            backup dancer chills in the corners with less important stuff.
          </div>
          <div className="rounded-md flex flex-row gap-2 " style={{ flex: 2 }}>
            <div
              className="rounded-md p-2 font-lexend  border-x-2 border-y-2"
              style={{
                flex: 1,
                backgroundColor: props.bg,
                color: props.textColor,
                borderColor: props.accent,
              }}
            >
              2 ) Pick colors that are like night and day! Bright text on a dark
              background or vice versa. Easy peasy! Its the trustworthy
              combination
            </div>

            <div className="flex  flex-col gap-1 " style={{ flex: 1 }}>
              <div
                className="rounded-md font-lexend p-1"
                style={{ flex: 1, backgroundColor: props.accent }}
              >
                3) Accent color is the spice of your design! Use it to give
                items a flair
              </div>
              <div
                className="rounded-md font-lexend p-1"
                style={{
                  flex: 1,
                  backgroundColor: props.textColor,
                  color: props.bg,
                }}
              >
                4)Or ditch the rules and be a color rebel! Chaos can be
                beautiful, right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseCases;
