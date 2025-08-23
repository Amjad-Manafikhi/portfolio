// components/Contact.jsx

import React, { useRef, useState } from "react";
import { style } from "../styles/style";
import SectionWrapper from "../hoc";
import { slideIn } from "../utils/motion";

import dynamic from 'next/dynamic';
const AnimatedDiv = dynamic(
  () => import('./AnimatedDiv'),
  { 
    ssr: false,
    loading: () => <div className="text-white">Loading animations...</div>
  }
);

const EarthCanvas = dynamic(
  () => import('./canvas/Earth'),
  { 
    ssr: false,
    loading: () => <div className="text-white">Loading 3D model...</div>
  }
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // This is where you would typically make an API call
    // For now, we'll just set loading to false.
    setLoading(false);
  };
console.log("contacy")
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <AnimatedDiv
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] white p-6 rounded-2xl border-1 border-secondary '
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 className={style.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-3'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium '>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-purple-300 py-3 px-8 my-2 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </AnimatedDiv>

      <AnimatedDiv
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        
        <EarthCanvas />
      </AnimatedDiv>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
