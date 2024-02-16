'use client';

import React, { useState } from "react";
import LinkedinIcon from '../../../public/linkedin.svg';
import GithubIcon from '../../../public/github.svg';
import InstagramIcon from '../../../public/instagram.svg';
import FBIcon from '../../../public/facebook.svg';
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-5 gap-4" id='contact'>
        <div>
            <h5 className="text-xl font-bold text-white my-2">Connect with Me</h5>
            <p className='text-gray-300 mb-4 max-w-md text-xl'>
                {''}
                I am actively exploring new opportunities and welcome any inquiries. Feel free to reach out if you have any questions or simply want to connect. I&apos;m committed to responding promptly and am excited to engage in meaningful conversations with you!
            </p>
            <div className='socials flex flex-row gap-2'>
              <Link href='www.linkedin.com/in/lloyd-bill-lariosa-4a780621b'>
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
              <Link href='https://github.com/lloydeebill'>
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href='https://www.instagram.com/lloydthebill/'>
                <Image src={InstagramIcon} alt="Instagram Icon" />
              </Link>
              <Link href='https://www.facebook.com/lloydeebill143'>
                <Image src={FBIcon} alt="Facebook Icon" />
              </Link>
            </div>
        </div>
          <div>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>E-mail</label>
                <input
                  name='email'
                  type='email'
                  id='email'
                  required
                  className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='userexample@gmail.com'>
                </input>
              </div>
              <div className='mb-6'>
                <label htmlFor='subject' type='email' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input
                  name='subject'
                  type='text'
                  id='subject'
                  required
                  className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder="Come on, let&apos;s connect!">
                  </input>
              </div>
              <div>
                <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  required
                  className='bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Share your thoughts' />
              </div>
              <button
              type="submit"
              className="bg-orange-600 hover:white text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
              Send Message
              </button>
              {
                emailSubmitted && (
                  <p className='text-green-500 text-sm mt-2'>
                    Email sent successfully!
                  </p>
                )
              }
            </form>
          </div>
    </section>
  )
}

export default EmailSection