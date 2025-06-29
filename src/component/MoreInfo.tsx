import biggerDp from "../../public/images/moreintro.jpg";

export default function MoreInfo() {
  return (
    <header className="flex flex-col md:flex-row mt-16 py-20">
  <section
    id="moreinfo"
    className="hidden md:block w-full md:w-1/2 border rounded-lg overflow-hidden flex items-center justify-center h-64 md:h-[480px]"
    style={{ borderColor: "#F0FDF4", backgroundColor: "#F0FDF4" }}
  >
    <img
      src={biggerDp}
      alt="More Info"
      className="w-full h-full object-cover rounded-sm"
      style={{ objectPosition: "center 70%" }}
    />
  </section>



      <section
        className="w-full md:w-1/2 flex-grow flex items-center justify-center bg-[#F0FDF4] p-6"
      >
        <div className="w-full max-w-xl flex flex-col items-center justify-center text-green-900 text-lg px-4 md:px-8">
          <div className="mb-4"></div>

          <div className="font-body text-center font-sans font-extralight leading-normal space-y-4">
            <h2 className="font-heading text-2xl font-semibold font-serif mb-6">.A Bit About Myself.</h2>
            <p>I have a background in Computer Science and a love for technology and learning.</p>
            <p>I’ve always enjoyed the mix of logic, problem-solving, and creativity that coding offers.</p>
            <p>I'm always looking to learn something new and connect with people who share that mindset.</p>
            <p>
              I enjoy exploring different interests and believe that being open to new experiences
              helps me grow, both personally and professionally.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
