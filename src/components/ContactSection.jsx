import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, //'success' or 'error'
        message: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error (
                    "EmailJS configuration is missing.Please check your environment variable"
                );
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name ,
                email: formData.email ,
                message: formData.message ,
            }, publicKey
        );

        // setSubmitStatus({
        //     type:"success",
            toast.success("Message sent successfully! "),
        // });
        setFormData({ name: "", email: "", message: ""});
        }catch (error){
            console.error("EmailJS error:", error);
            // setSubmitStatus({
            //     type: "error",
                toast.error(error.text || "Failed to send message. Please try again later")
                // message: error.text || "Failed to send message. Please try again later"
            // })

        } finally {
            setIsLoading(false)
        }
    };

  return (
    
  
    <section id='contact' className='py-2 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Get In <span className='text-primary'>Touch</span>
    </h2>
    <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
    I'm a fresher actively looking for opportunities to grow and contribute. Whether it's a full-time role, internship, or just a conversation, I'd love to hear from you.    
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>
                {/* mail */}
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                        <Mail className='h-6 w-6 hover:text-primary ' />
                    </div>
                    <div>
                        <h4 className='font-medium'>Email</h4>
                        <a href='mailto:manvihj244@gmail.com' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                            manvihj244@gmail.com
                        </a>
                    </div>
                </div>

                {/* phone */}
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                        <Phone className='h-6 w-6 hover:text-primary ' />
                    </div>
                    <div>
                        <h4 className='font-medium'>Phone</h4>
                        <a href='tel:+91 8970304899' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                            +91 8970304899
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                        <MapPin className='h-6 w-6 hover:text-primary ' />
                    </div>
                    <div>
                        <h4 className='font-medium'>Location</h4>
                        <a className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                            Karnataka, India
                        </a>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div className='pt-8'>
                <h4 className='font-medium mb-4'>Connect With Me</h4>
                <div className='flex space-x-4 justify-center'>
                    <a rel="noopener noreferrer" target='_blank' className='hover:text-primary duration-300' href='https://linkedin.com/in/manvi-h-j-5b6576330'  
 >
                        <FaLinkedin />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" className='hover:text-primary duration-300' href='https://www.instagram.com/manvi.hj?igsi=djRsbWlxNmhhb3Rj'>
                        <SiInstagram />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" className='hover:text-primary duration-300' href='https://wa.me/918970304899'>
                        <SiWhatsapp  />
                    </a>
                </div>
            </div>
        </div>

        <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-6' onSubmit={handleSubmit}>

                {/* name */}
                <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>
                    {" "}
                    Your name </label>
                <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-within:ring-2 focus:ring-primary'
                placeholder='For e.g: Manvi'
                value={formData.name}
                onChange={(e)=>
                    setFormData({ ...formData, name: e.target.value})
                }
                />
                </div>

                {/* email */}
                <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>
                    {" "}
                    Your Email </label>
                <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-within:ring-2 focus:ring-primary'
                placeholder='For e.g: manvi123@gmail.com'
                value={formData.email}
                onChange={(e)=>
                    setFormData({ ...formData, email: e.target.value})
                }
                />
                </div>


                <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>
                    {" "}
                    Your Message </label>
                <textarea
                
                id='message'
                name='message'
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-within:ring-2 focus:ring-primary resize-none'
                placeholder='I would like to talk about.......'
                value={formData.message}
                onChange={(e)=>
                    setFormData({ ...formData, message: e.target.value})
                }
                />
                </div>
                <button type='submit' disabled={isLoading} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                >
                    {isLoading ? (
                        <>Sending...</>
                    ) : (
                    <>
                    Send Message <Send size={16}/>
                    </>
                    )}
                </button>

                {/* {submitStatus.type && (
                    <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                        submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-red-500/10 text-red-600"
                    }`}
                    
                    >
                        {submitStatus.type === "success" ? (
                            <CheckCircle className='w-5 h-5 flex-shrink:0' />
                        ) : (
                            <AlertCircle className='w-5 h-5 flex-shrink:0'/>
                        )}
                        <p className='text-sm'>{submitStatus.message}</p>
                    </div>
                )} */}


            </form>

        </div>

    </div>
    </div>
  </section>
  
  )
}

export default ContactSection