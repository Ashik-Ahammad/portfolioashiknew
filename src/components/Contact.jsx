import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [to_name, setTo_name] = useState("");
    const [from_name, setFrom_name] = useState("");
    const [message, setMessage] = useState("");

    const submitInfo = (e) => {

        
        
        
        const emailContent = {
            to_name: to_name,
            from_name: from_name,
            message: message,
        };

        emailjs.send('service_jdmnzov', 'template_yg3c1fj', emailContent, 'Zqvb9aKAxB9nJuQKF')
        .then((result) => {
            console.log(result.text);
           
        }, (error) => {
            console.log(error.text);
        });
        alert('Sent!')
    }

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Send me an email by submitting this form.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name'  onChange={(event) => {setTo_name(event.target.value)}} required/>

            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email'  onChange={(event) => {setFrom_name(event.target.value)}} required/>

            <textarea className='bg-[#ccd6f6] p-2' rows="10" placeholder='Message' onChange={(event) => {setMessage(event.target.value)}} required></textarea>

            <button onClick={submitInfo} name='submit' type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send   &nbsp; &gt; </button>
        </div>
    </div>
  )
}

export default Contact;