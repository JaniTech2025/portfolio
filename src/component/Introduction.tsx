import smallerDp from "../../public/images/smaller_dp.jpg";
import kolamNavy from "../../public/images/KolamNavy.png";
import Resume from "../../public/JaniResume.pdf";

export default function Introduction() {
  return (
    <header className="flex">
      <section
        id="intro"
        className="w-1/2 h-[600px] border bg-cover bg-center"
        style={{ backgroundImage: `url(${kolamNavy})`, borderColor: "#7D93C4" }}
      ></section>

      <section
        className="w-1/2 flex items-center justify-center"
        style={{ backgroundColor: "#7D93C4" }}
      >
        <div className="w-full flex flex-col items-center justify-center gap-4 text-white px-4">
          <div className="mb-4">
            <button
              className="w-[200px] h-[250px] bg-transparent flex items-center justify-center overflow-hidden p-0 cursor-pointer shadow-lg"
              style={{ borderRadius: "50% / 50%" }}
            >
              <img
                src={smallerDp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <div className="text-center font-sans font-extralight leading-normal">
            <h1 className="mb-2 text-2xl font-semibold">.About Me.</h1>
            <p>Hi, Welcome to my portfolio. I am a Programmer.</p>
            <p>
              When I am not coding, you are likely to find me solving a Sudoku puzzle,
            </p>
            <p>reading books, or unwinding with some Netflix.</p>
          </div>

          <a
            href={Resume}
            download
            className="mt-6 inline-block bg-white text-[#7D93C4] font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </header>
  );
}
