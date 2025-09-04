import BurgerMenuIcn from "../../../assets/menu.svg";
import MainLogo from "../../../assets/main-logo.svg";

export const Header = () => {
  return (
    <>
      <div className="flex md:px-[30px] justify-between px-[20px] py-[12px] bg-[#132450] h-[60px] transition-all">
        <div className="flex gap-[9.5px] items-center cursor-pointer">
          <img src={MainLogo} alt="Main Logo" width={34} height={36} />
          <h2 className="text-white font-bold cu">Enagram</h2>
        </div>
        <button className="cursor-pointer">
          <img src={BurgerMenuIcn} alt="Burger Menu" />
        </button>
      </div>
    </>
  );
};
