import Link from "next/link";
import ImageComponent from "./components/ImageComponent";
import ImageBlur from "./components/ImageDinamicBlur";
import { FaGithub } from "react-icons/fa";

const GridPicture = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full my-10">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-3xl font-black "> Next/Image component</h1>

      <p className="mt-16 underline">Without blur effect</p>
      <GridPicture>
        <div className="  h-48  w-full relative">
          <ImageComponent
            src={
              "https://images.unsplash.com/photo-1543510875-8b2e1c93c1ed?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"image 1"}
          />
        </div>
        <div className="  h-48  w-full relative">
          <ImageComponent
            src="https://images.unsplash.com/photo-1702610274640-6df979c93086?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={"image 2"}
          />
        </div>{" "}
        <div className="  h-48  w-full  relative">
          <ImageComponent
            src={
              "https://images.unsplash.com/photo-1699856015134-c4a2265738f2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"image 3"}
          />
        </div>
      </GridPicture>
      <p className="mt-16 underline">With blur effect</p>

      <GridPicture>
        <div className=" h-72 w-full relative">
          <ImageBlur
          alt={'image blur effect 1'}
            src={
              "https://images.unsplash.com/photo-1702966051138-009c0c965295?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className=" h-72 w-full relative">
          <ImageBlur
           alt={'image blur effect 2'}
            src={
              "https://images.unsplash.com/photo-1700508317396-e343a69ac72f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>{" "}
        <div className=" h-72 w-full relative">
          <ImageBlur
          alt={'image blur effect 3'}
            src={
              "https://images.unsplash.com/photo-1695661936347-8e4ebacf4460?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </GridPicture>

      <Link
        className="flex gap-2 items-center hover:bg-white text-black p-3 rounded-md bg-white/90 transition-all"
        href={"https://github.com/caceres1992/Image-Lazy-loading"}
        target="_blank"
      >
        Respository <FaGithub />
      </Link>
    </main>
  );
}
