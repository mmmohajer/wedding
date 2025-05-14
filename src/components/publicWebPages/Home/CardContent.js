import cx from "classnames";
import Div from "@/baseComponents/Div";
import styles from "./Home.module.scss";

const CardContent = ({}) => {
  return (
    <>
      <Div className={cx("m-b-temp-15 f-s-px-22 text-theme-three")}>
        به نام خالق عشق
      </Div>
      <Div>
        <Div type="flex" distributedBetween className="width-px-350 p-x-temp-3">
          <Div className="text-black">
            <Div
              className={cx("f-s-px-44 p-l-temp-5", styles.name)}
              style={{ lineHeight: "1.2rem" }}
            >
              محسن
            </Div>
            <Div className={cx("m-r-temp-10 f-s-px-20", styles.name)}>
              سهمدینی
            </Div>
          </Div>
          <Div className="text-theme-three">
            <Div
              type="flex"
              hAlign="end"
              className={cx("f-s-px-44", styles.name)}
              style={{ lineHeight: "1.2rem" }}
            >
              نیلوفر
            </Div>
            <Div className={cx("f-s-px-20 p-r-temp-10", styles.name)}>
              عادلخانی
            </Div>
          </Div>
        </Div>
        <Div type="flex" direction="vertical" hAlign="center">
          <Div className="f-s-px-26 m-y-temp-3 text-theme-one">
            "از دورترین فاصله‌ها به هم رسیدیم و تا اوج بودن باهمیم "
          </Div>
          <Div className="text-theme-three f-s-px-22">
            {" "}
            موعد دیدار: ۱۴۰۴/۰۳/۰۲
          </Div>
          <Div className="text-theme-three f-s-px-22">
            {" "}
            ساعت ۱۷:۳۰ تا پاسی از شب
          </Div>
          <Div className="text-theme-three f-s-px-22"> باغ ماهور</Div>
          <Div className="text-theme-three text-center m-t-temp-5 m-b-temp-10 f-s-px-22">
            ،از شما دعوت می‌کنیم که با لبخندهای پرنور خود
            <br /> چراغ این شب را روشن‌تر سازید
          </Div>
        </Div>

        <Div className="text-theme-three"></Div>
      </Div>
    </>
  );
};
export default CardContent;
