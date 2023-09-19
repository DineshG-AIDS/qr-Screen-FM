import img from "../assert/image-qr-code.png";
const QrDiv = () => {
  return (
    <>
      <div className="w-72 h-full p-5  bg-slate-50 w-50 rounded-2xl">
        <div className="bg-blue-500 text-white flex justify-center rounded-2xl ">
          {/* <h1>hello</h1> */}
          <img className="rounded-2xl" src={img} alt="" />
        </div>
        <div>
          <h1 className="pt-5 text-xl text-center font-custom">
            Improve Front End Skills by building projects
          </h1>
          <p className="text-xs pt-5 font-custom1 text-center">
            Scan the QR code to visit Front-End Mentor and take your coding
            skills to next level
          </p>
        </div>
      </div>
    </>
  );
};

export default QrDiv;
