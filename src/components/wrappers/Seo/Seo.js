import Head from "next/head";

const Seo = ({
  title = "Tech Tips By Moh - Full-Stack Developer & System Design Expert",
  keywords = "Full-Stack Development, Full-Stack Developer, Backend Development, Frontend Development, System Design, Scalable System Architecture, Building Scalable Applications, Software Engineering Best Practices, API Development, API Optimization, Cloud Computing, DevOps, Django, Node.js, React, Next.js, Docker, Kubernetes, How to become a Full-Stack Developer in 2024, Best backend technologies for scalable applications, Django vs. Node.js, System Design for beginners, Best database for high-performance web applications, Full-Stack roadmap, How to optimize backend performance, API design best practices, Scaling a web application, Best practices for microservices architecture, How to secure your web applications, How Netflix handles millions of users, System Design Interview preparation, Load balancing explained, What is caching and why is it important, Best practices for Django REST API development, How to deploy a Next.js app with Docker, Node.js vs. FastAPI, Full-Stack Developer guide, Web development trends, Scalable web architecture",
  description = `Tech Tips By Moh provides expert insights on Full-Stack Development, scalable application architecture, and high-performance system design.`,
  imagePreview = "https://techtipsbymoh.tor1.cdn.digitaloceanspaces.com/general/Web%20Cover%20Photo-new.png",
  url = "https://tipsbymoh.tech/",
  imgAlt = "",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePreview} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tech Tips By Moh" />
        <meta name="twitter:card" content={imgAlt || title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePreview} />
        <meta name="twitter:url" content={url} />
      </Head>
      {children}
    </>
  );
};

export default Seo;
