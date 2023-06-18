import Link from "next/link";
import Image from "next/image";
import defaultImg404 from "../assets/images/404notfound.webp";
import MainLayout from "@/components/seo/MainLayout";

const ErrorPage = () => {
  return (
    <div className="p-3">
      <h2 className=" font-robotoSlab font-semibold text-[30px] text-red-800">
        Error
      </h2>
      <h4 className=" font-robotoSlab font-semibold text-[24px] text-red-800">
        This page does not exist
      </h4>

      <Image
        src={defaultImg404}
        alt="notFoundPageImage"
        width={600}
        height={450}
      />
    </div>
  );
};

export default ErrorPage;
