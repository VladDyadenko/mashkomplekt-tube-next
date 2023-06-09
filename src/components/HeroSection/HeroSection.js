import Image from "next/image";
import imageMission from "../../assets/images/tube-5.jpg";
import imageAdvantages from "../../assets/images/tube-3.jpg";
import HeadSite from "../seo/HeadSite";
import { Container } from "@mui/material";
import { seoHeadHome } from "../../assets/constants/HeadSeo";

const HeroSection = () => {
  return (
    <>
      <HeadSite
        title={seoHeadHome.title}
        keywords={seoHeadHome.keywords}
        description={seoHeadHome.description}
      ></HeadSite>
      <Container>
        <section className="">
          <h2 className="text-2xl text-center font-robotoSlab text-textColor mb-4  ">
            Наша міссія
          </h2>
          <div className="flex gap-6 sm:flex-col sm:items-center sm:justify-start">
            <Image
              priority={true}
              src={imageMission}
              alt="Picture tubes"
              className="w-[460px] h-[340px]   sm:h-auto"
            />

            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et. (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum
              et Malorum by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
          <h2 className="text-2xl text-center font-robotoSlab text-textColor my-4  ">
            Наши переваги
          </h2>
          <div className="flex gap-6 sm:flex-col sm:items-center sm:justify-start">
            <Image
              src={imageAdvantages}
              alt="Picture tubes"
              className="w-[460px] h-[340px]  sm:mb-2 sm:h-auto"
            />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et. (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum
              et Malorum by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HeroSection;
