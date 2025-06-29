import React, { useState } from "react";
import smallerDp from "../../public/images/smaller_dp.jpg";
import kolamNavy from "../../public/images/KolamNavy.png";
import Resume from "../../public/JaniResume.pdf";

export default function Introduction() {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const correctPassword = import.meta.env.VITE_RESUME_DOWNLOAD_PASSWORD;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
      <header className="flex flex-col md:flex-row mt-16">
        <section
        id="intro"
        className="
          hidden md:block
          w-full md:w-1/2
          h-48 sm:h-64 md:h-auto
          border
          bg-center bg-no-repeat bg-contain
          md:bg-cover
          py-10
        "
        style={{ backgroundImage: `url(${kolamNavy})`, borderColor: "#FFF1F2" }}
      ></section>

      <section
        className="w-full md:w-1/2 flex items-center justify-center bg-[#FFF1F2] p-6"
      >
        <div className="w-full max-w-md flex flex-col items-center justify-center gap-4 text-rose-900 px-4">
          <div className="mb-4">
            <button
              className="w-40 h-40 md:w-[200px] md:h-[200px] bg-transparent flex items-center justify-center overflow-hidden p-0 cursor-pointer shadow-lg rounded-full"
            >
              <img
                src={smallerDp}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </button>
          </div>

          <div className="font-body text-center font-sans font-extralight leading-normal">
            <h1 className="font-heading mb-2 text-2xl font-semibold">.About Me.</h1>
            <p>Hi, Welcome to my portfolio. I am a Programmer.</p>
            <p>When I am not coding, you are likely to find me solving a Sudoku puzzle,</p>
            <p>reading books, or unwinding with some Netflix.</p>
          </div>

          {!accessGranted && !showPasswordInput && (
            <button
              onClick={() => setShowPasswordInput(true)}
              className="font-body mt-6 inline-block bg-white text-rose-900 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
            >
              Download Resume
            </button>
          )}

          {showPasswordInput && !accessGranted && (
            <form
              onSubmit={handlePasswordSubmit}
              className="flex flex-col items-center gap-2 w-full max-w-xs"
            >
              <input
                type="password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                placeholder="Enter password"
                className="border px-4 py-2 rounded w-full"
              />
              <button
                type="submit"
                className="font-body bg-rose-900 text-white px-4 py-1 rounded hover:bg-rose-800 w-full"
              >
                Submit
              </button>
            </form>
          )}

          {accessGranted && (
            <a
              href={Resume}
              download
              className="mt-6 inline-block bg-white text-rose-900 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
            >
              Click to Download
            </a>
          )}
        </div>
      </section>
    </header>
  );
}
