import Div from "@/baseComponents/Div/Div";

import { COLORS } from "@/constants/vars";

const DisplayColors = () => {
  return (
    <>
      {Object.keys(COLORS)?.map((item, idx) => (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="p-y-8 p-x-16 width-px-200 height-px-100 m-b-16"
          key={idx}
          style={{ backgroundColor: COLORS[item] }}
        >
          <Div className="bg-white">{item}</Div>
        </Div>
      ))}
    </>
  );
};

export default DisplayColors;
