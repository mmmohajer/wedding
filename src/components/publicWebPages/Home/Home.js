import { useEffect, useState } from "react";
import cx from "classnames";
import Div from "@/baseComponents/Div";
import Button from "@/baseComponents/Button";
import AppImage from "@/baseComponents/AppImage";
import styles from "./Home.module.scss";
import NewWeddingCardImg from "../../../assets/styles/Images/card-new.png";
import audioFile from "../../../assets/styles/music/yar-mobarak-bada.mp3";
import Icon from "@/baseComponents/Icon/Icon";
import CardContent from "./CardContent";
import { COLORS } from "@/constants/vars";

const Home = ({ guest }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioInstance = new Audio(audioFile);
      setAudio(audioInstance);

      audioInstance.addEventListener("ended", () => setIsPlaying(false));

      return () => {
        audioInstance.removeEventListener("ended", () => setIsPlaying(false));
      };
    }
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.load();
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
    setIsCardOpened(true);
  };

  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {!isCardOpened && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx(
            "width-per-100 p-l-temp-6 mouse-hand min-height-vh-full",
            styles.cardContainer
          )}
        >
          <Div className="pos-rel">
            <Div
              type="flex"
              direction="vertical"
              hAlign="end"
              className="pos-abs text-black z-10 width-px-200"
              style={{ top: "90px", left: "50px" }}
            >
              {" "}
              :حضور محترم
            </Div>
            <Div
              type="flex"
              direction="vertical"
              hAlign="end"
              className="pos-abs text-theme-two z-10 width-px-200"
              style={{ top: "130px", left: "50px" }}
            >
              {guest?.Guest_Name}
            </Div>
            <AppImage
              src={NewWeddingCardImg}
              width={360}
              heightOverWidthAsprctRatio={1.5}
              className="br-rad-md of-hidden"
              onClick={handleClick}
            />
            <Div type="flex" hAlign="center" className="m-t-10 text-theme-one">
              برای اطلاعات بیشتر روی کارت کلیک کنید
            </Div>
          </Div>
        </Div>
      )}
      {isCardOpened && (
        <Div
          type="flex"
          direction="vertical"
          hAlign="center"
          className={cx("p-all-temp-10 text-black", styles.container)}
        >
          <CardContent />
          <Div
            type="flex"
            hAlign="start"
            className="m-t-auto width-per-100"
            style={{ position: "fixed", bottom: "10px", right: "-30px" }}
          >
            <Div
              type="flex"
              vAlign="center"
              onClick={toggleAudio}
              className={"m-r-10"}
            >
              {isPlaying ? (
                <Icon type="pause" color={COLORS["theme-one"]} scale={3} />
              ) : (
                <Icon type="play" color={COLORS["theme-one"]} scale={3} />
              )}
            </Div>

            <Button onClick={toggleModal} className={"height-px-50 m-l-20"}>
              نمایش نقشه
            </Button>
          </Div>
        </Div>
      )}
      {isModalOpen && (
        <Div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Div
            type="flex"
            direction="vertical"
            hAlign="center"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <Div type="flex" hAlign="end" className="width-per-100">
              <Div className="m-r-temp-5">نقشه مکانی</Div>
              <Div onClick={toggleModal}>☓</Div>
            </Div>

            {/* <Button onClick={toggleModal} className={"m-t-temp-5"}></Button> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.3113888950847!2d53.0173628!3d36.6188906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f856b5433c91c33%3A0xc1ddd9f60c46647!2z2KjYp9i6INiq2KfZhNin2LEg2YXYp9mH2YjYsQ!5e0!3m2!1sen!2s!4v1747237124925!5m2!1sen!2s"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Div>
        </Div>
      )}
    </>
  );
};

export default Home;
