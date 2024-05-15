import { ilustration, link, logo, phone, profile } from "../assets";

function Home() {
  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <header className="p-6">
        <div className="flex w-full max-w-[1850px] justify-between items-center bg-white p-4 rounded-xl">
          <img src={logo} alt="" />
          <div className="flex gap-4">
            <div className="flex w-32 gap-2 justify-center">
              <img src={link} className=" object-scale-down" alt="" />
              <p>Links</p>
            </div>
            <div className="flex w-44 gap-2 justify-center">
              <img src={profile} className=" object-scale-down" alt="" />
              <p>Profile Details</p>
            </div>
          </div>
          <button className="hover:bg-purple-300 font-bold text-purple-600 outline-none border-purple-600 p-3 border-solid border-2 rounded-lg pt-[10px] pb-[10px] pl-4 pr-4">
            Preview
          </button>
        </div>
      </header>
      <div className="pl-6 pr-6">
        <div className="flex justify-center gap-6">
          <div className="bg-white rounded-xl p-24 flex justify-center w-[750px] pt-36 pb-24">
            <img src={phone} className=" w-[308px] h-[632px]" alt="" />
          </div>
          <div className="bg-white rounded-xl w-full p-12">
            <h1 className=" font-bold text-3xl">Customize your links</h1>
            <p className=" text-[#595959] pt-4">
              Add/edit/remove links bellow and then share all you profiles with
              the world!
            </p>
            <button className="hover:bg-purple-300 w-full font-bold text-purple-600 outline-none border-purple-600 p-3 border-solid border-2 rounded-lg mt-5">
              + Add new link
            </button>
            <div className=" bg-[#f1f1f1] p-28 rounded-xl mt-6">
              <div className=" w-[650px] h-full grid justify-center mt-4">
                <img src={ilustration} alt="" />
              </div>
              <h1 className=" text-center font-bold text-3xl pt-8">
                Let`s get you started
              </h1>
              <p className="text-[#595959] pt-8 text-center">
                Use the `Add new link` button to get started. Once you have more
                than one link, you can reorder and edit them. We`re here to help
                you share you profiles with everyone!
              </p>
            </div>
            <div className=" mt-11 border-solid border-[1px]"></div>
            <div className=" w-full flex justify-end">
              <button className=" cursor-not-allowed font-bold text-purple-300 outline-none border-purple-300 bg-purple-100 p-3 border-solid border-2 rounded-lg pt-[10px] pb-[10px] pl-4 pr-4 mt-4">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
