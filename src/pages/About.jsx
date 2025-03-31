import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:2-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            iste aspernatur eius nam facere provident minima, suscipit commodi
            possimus. Ipsum ab eos illo voluptatibus velit ipsam veniam libero
            sequi a!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            iste aspernatur eius nam facere provident minima, suscipit commodi
            possimus. Ipsum ab eos illo voluptatibus velit ipsam veniam libero
            sequi a!
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            iste! Nam corrupti natus reiciendis suscipit quam eum debitis neque
            accusantium, totam magni consectetur porro distinctio amet voluptas
            alias error doloremque.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tenetur porro quasi, dolorem aut quo error incidunt eaque ea possimus libero voluptate esse debitis sed.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tenetur porro quasi, dolorem aut quo error incidunt eaque ea possimus libero voluptate esse debitis sed.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tenetur porro quasi, dolorem aut quo error incidunt eaque ea possimus libero voluptate esse debitis sed.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default About;
