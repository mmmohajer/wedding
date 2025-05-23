import fs from "fs";
import path from "path";
import Papa from "papaparse";

import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import Home from "../components/publicWebPages/Home";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "invited_with_ids.csv");
  const file = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(file, { header: true });

  const validRows = parsed.data.filter(
    (row) => typeof row.Guest_ID === "string" && row.Guest_ID.trim() !== ""
  );

  const paths = validRows.map((row) => ({
    params: { guest_id: row.Guest_ID.trim() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "invited_with_ids.csv");
  const file = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(file, { header: true });

  const guest = parsed.data.find(
    (row) => row.Guest_ID?.trim() === params.guest_id
  );

  if (!guest) {
    return { notFound: true };
  }

  return {
    props: { guest },
  };
}

const index = ({ guest }) => {
  return (
    <>
      <Seo
        title="Wedding Invitation"
        keywords="wedding"
        description="We would be delighted to have you with us on our special day."
        imagePreview="/images/Logo.png"
        url="https://celebratinglove.vercel.app"
        imgAlt="Logo of Site"
      >
        <PageContainer pageIdentifier="home">
          <Home guest={guest} />
        </PageContainer>
      </Seo>
    </>
  );
};

export default index;
