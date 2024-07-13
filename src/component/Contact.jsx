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

      <div className="montserrat w-full flex flex-wrap justify-center gap-16">
        <form className=" flex flex-col form py-5 px-8 gap-8 max-w-[1000px] bg-white">
          <p className="text-2xl font-bold"> Whats up?</p>
          <div className="flex flex-wrap gap-8 justify-center w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col w-full">
                <p>Name (required) </p>
                <input
                  type="text"
                  className="input text-sm w-[300px] h-[40px] relative py-[6.5px] px-2"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className=" ">
                <p>Email (required) </p>
                <input
                  type="text"
                  className="input text-sm w-[300px] h-[40px] py-[6.5px] px-2"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className=" ">
                <p>Subject (required) </p>
                <input
                  type="text"
                  className="input text-sm w-[300px] h-[40px] py-[6.5px] px-2"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className=" ">
                <p>Subject (required) </p>
                <textarea
                  type="text"
                  
                  placeholder="Type comment"
                  className="input text-sm w-[300px] h-[200px]  pt-[4px]  px-2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center pt-2 w-full">
            <input type="submit" className="py-2 w-full contact-btn" />
          </div>
        </form>

        <div className=" flex flex-col form py-5 px-8 gap-4 max-w-[350px] bg-white">
          <p className="text-2xl"> What is your plan ? Call me</p>
          <p className="text-sm dimWhite">
            {" "}
            You can get my contact information here and if you like, you can see
            the urls of my pages on social networks from the top of the page and
            find me there.
          </p>
          <div>
            <img src="" alt="" /><p className="font-semibold">Islamabad, Pakistan</p>
          </div>
          <div>
            <img src="" alt="" /><p className="font-semibold">contact.abdulwahabtahir@gmail.<br/>com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
