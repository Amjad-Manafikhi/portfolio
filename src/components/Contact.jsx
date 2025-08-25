// components/Contact.jsx

import React, { useRef, useState } from "react";
import { style } from "../styles/style";
import SectionWrapper from "../hoc";
import { slideIn } from "../utils/motion";
import toast from 'react-hot-toast'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

  const formSchema = z
  .object({
    name: z.string().min(1," This field is required"),
    email: z.email(),
    message: z.string().min(1," This field is required"),
  })


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
  setLoading(true);
  try {
    const { name, email, message } = data;
    const response = await fetch('/api/contact/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      setError("");
      toast.success('Successfully Sent');
      reset();
    } else {
      setError(result.error || "Something went wrong");
      toast.error(result.error);
    }
  } catch (err) {
    setLoading(false);
    toast.error("Unexpected error occurred");
    console.error(err);
  }
};
  return (
    <>
    
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mx-auto max-w-lg`}
      >
        <AnimatedDiv
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] white p-6 rounded-2xl border-1 border-secondary '
        >
          <p className={style.sectionSubText}>Get in touch</p>
          <h3 className={style.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className='mt-6 flex flex-col gap-3 '
          >
            <label className='flex flex-col'>
              <span className='text-secondary font-medium'>Name</span>
              <input
                type='text'
                placeholder="Name"
                className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </label>
            <label className='flex flex-col'>
              <span className='text-secondary font-medium'>Email</span>
              <input
                type='email'
                placeholder="Email"
                className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </label>
            <label className='flex flex-col'>
              <span className='text-secondary font-medium '>Message</span>
              <textarea
                rows={5}
                placeholder='Message'
                className='bg-purple-300 py-4 px-6 placeholder:text-secondary placeholder:opacity-50 text-secondary rounded-lg outline-none border-none font-medium'
                {...register('message')}
            />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
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
    </>
  );
};

export default SectionWrapper(Contact, "contact");
