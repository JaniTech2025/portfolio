import biggerDp from "../../public/images/moreintro.jpg";

export default function MoreInfo() {
  return (
    <header className="flex">
      <section
        id="moreinfo"
        className="w-1/2 h-[600px] border bg-cover bg-center"
        style={{ backgroundImage: `url(${biggerDp})`, borderColor: "#F0FDF4" }}
      ></section>

      <section
        className="w-1/2 flex items-center justify-center"
        style={{ backgroundColor: "#F0FDF4" }}
      >
        <div className="w-full flex flex-col items-center justify-center text-green-900 text-lg px-8">
          <div className="mb-4">

          </div>

        <div className="font-body text-center font-sans font-extralight leading-normal space-y-4">
          <h2 className="font-heading text-2xl font-bold font-serif mb-6">.A Bit About Myself.</h2>
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
