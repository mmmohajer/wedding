import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Icon = ({
  type = "close",
  color = "black",
  width = "16px",
  height = "6px",
  scale = 1,
}) => {
  return (
    <>
      {type === "close" ? (
        <FontAwesomeIcon
          icon={faClose}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}

      {type === "instagram" ? (
        <FontAwesomeIcon
          icon={faSquareInstagram}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Icon;
