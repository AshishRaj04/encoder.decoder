import { BlogCard, Footer, About, MovingBorderButton } from "../components";
const Hero = ({ blogs }) => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <img
          src="https://avatars.githubusercontent.com/u/122210726?v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 shadow-lg"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Ashish Raj</h1>

        <p className="text-lg text-gray-600 max-w-lg text-center">
          I like to train deep neural networks on large datasets.
          <br />
          At the moment, I'm probably thinking about the question whose answer
          is <span className="font-bold">42</span>
        </p>
        <MovingBorderButton text="Mail me at" url="/contact" />
      </div>
      <About />
      <BlogCard blogs={blogs} />
      <Footer />
    </>
  );
};

export default Hero;
