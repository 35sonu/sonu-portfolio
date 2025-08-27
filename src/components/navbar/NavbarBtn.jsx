import { LuDownload } from "react-icons/lu";

const NavbarBtn = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Sonu-Kumar-Resume.pdf';
    link.download = 'Sonu-Kumar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownloadResume}
      className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      <span>Download Resume</span>
      <div className="sm:hidden md:block">
        <LuDownload />
      </div>
    </button>
  );
};

export default NavbarBtn;
