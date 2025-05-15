import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import Home from "../components/publicWebPages/Home";

const index = () => {
  return (
    <>
      <Seo
        title="Guardian Assessment"
        keywords="guardian, assessment"
        description="This is to assess my skills"
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
