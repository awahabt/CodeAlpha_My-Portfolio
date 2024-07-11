import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-auto flex flex-col flex-wrap items-center my-10 justify-center max-[1137px]:py-5 min-[1137px]:py-10">
      <div className="text-center ">
        <p className="text-4xl montserrat font-bold ">Get In Touch</p>
        <p className="montserrat text-[18px] font-[500] max-w-[700px] dimWhite pt-5 pb-20">
          Here you can let me know if you have any criticism, suggestion or
          problem, I'm waiting to hear your voice or see your message.
        </p>
      </div>

      <div className="montserrat">

        <div>
            <form >
                <label className="flex flex-col gap-2">
                <span className="font-semibold dimWhite">Name <span className="text-red-600">*</span> </span>
                <input type="text" placeholder="Email" className="w-[250px] px-4 py-2 bor text-[#5e6472] rounded" /></label>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
