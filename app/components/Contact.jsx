import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto%] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect With Me
      </motion.h4>
      
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Get In Touch
      </motion.h2>
      
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions or just want to
        say, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="grid grid-cols-12 gap-6 mt-10 mb-8"
        >
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="text"
            name="name"
            placeholder="enter your name..."
            required
            className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white col-span-6 dark:bg-darkHover/30 dark:border-white"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            type="email"
            name="email"
            placeholder="enter your email..."
            required
            className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white col-span-6 dark:bg-darkHover/30 dark:border-white"
          />
        </motion.div>
        
        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          rows={6}
          name="message"
          placeholder="enter your message"
          className="w-full p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-8 dark:bg-darkHover/30 dark:border-white"
        />
        
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-auto dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="send icon"
            className="w-4"
          />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-4 mx-auto text-center"
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
