import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import Home from "../components/publicWebPages/Home";

const index = () => {
  return (
    <>
      <Seo
        title="Wedding Invitation"
        keywords="wedding"
        description="Your presence will make us happy."
        imagePreview="/images/Logo.png"
        url="https://Makeclient.ngrok.io/"
        imgAlt="Logo of Site"
      >
        <PageContainer pageIdentifier="home">{/* <Home /> */}</PageContainer>
      </Seo>
    </>
  );
};

export default index;
