import biggerDp from "../../public/images/moreintro.jpg";

export default function MoreInfo() {
  return (
    <header className="flex">
      <section
        id="moreinfo"
        className="w-1/2 h-[600px] border bg-cover bg-center"
        style={{ backgroundImage: `url(${biggerDp})`, borderColor: "#7D93C4" }}
      ></section>

      <section
        className="w-1/2 flex items-center justify-center"
        style={{ backgroundColor: "#7D93C4" }}
      >
        <div className="w-full flex flex-col items-center justify-center text-white text-lg px-8">
          <div className="mb-4">

          </div>

        <div className="text-center font-sans font-extralight leading-normal space-y-4">
          <p>I have a background in Computer Science and a love for technology and learning.</p>
          <p>I’ve always enjoyed the mix of logic, problem-solving, and creativity that coding offers.</p>
          <p>I'm always looking to learn something new and connect with people who share that mindset.</p>
          <p>I enjoy exploring different interests and believe that being open to new experiences
          helps me grow, both personally and professionally.</p>
        </div>


        </div>
      </section>
    </header>
  );
}
