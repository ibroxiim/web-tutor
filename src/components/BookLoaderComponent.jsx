// import { BookLoader } from "react-awesome-loaders";
import { BookLoader } from "react-awesome-loaders";

export const BookLoaderComponent = () => {
  return (
    <div className="w-full h-full flex item-center">
      <BookLoader
        background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#4645F6"}
      />
    </div>
  );
};
