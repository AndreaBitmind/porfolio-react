import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div
      className={
        showGoTop ? "block fixed bottom-4 right-4 z-50 text-2xl" : "hidden"
      }
      onClick={handleScrollUp}
    >
      <button
        type={"button"}
        className="bg-goTopButton text-white px-3 py-3 rounded-full"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default GoTopButton;
