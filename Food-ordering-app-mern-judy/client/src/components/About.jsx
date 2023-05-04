import aboutImg from "../assets/images/about-image.png"

const About = () => {
  return (
    <div className="FO__about bg-white"  id="about" >
      <div className="FO__about-container p-24 grid grid-cols-2 ">
        <div className="FO__about-section_container">
          <h2 className="text-3xl font-medium mb-4">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel
            at maiores qui fugiat fugit consectetur aut possimus voluptates
            repellendus excepturi ad ipsam asperiores nemo pariatur totam
            explicabo sapiente, quis distinctio quae, voluptatem veniam? Velit
            atque enim id doloribus vitae nam voluptatibus, deserunt quas
            suscipit sapiente, labore soluta. Tenetur, deserunt voluptate
            possimus ab aut modi natus laudantium! Magnam architecto dolorem
            enim nesciunt soluta nulla obcaecati aut beatae, deserunt alias!
            Ipsam optio temporibus officiis in rerum fuga at perspiciatis
            veritatis suscipit .
          </p>
        </div>
        <div className="FO__about-image_container  flex items-center justify-center">
            <img src={aboutImg} alt="about-us" className="w-[400px] h-[400px] object-cover"  />

        </div>
      </div>
    </div>
  );
};

export default About;
