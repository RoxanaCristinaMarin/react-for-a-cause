import React from 'react';
import emailjs from "@emailjs/browser";



const Contact = () => {
    const [setShow] = React.useState(true);
    const [inputs, setInputs] = React.useState({name: '', email: '', sub: '', message: ''});

    const handleInputChange = (e) => {
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
        e.target.focus()
    }
    const sendMessage = (e) => {
    if (e)
        e.preventDefault();
    const message = inputs.message;
    const messageEnter = message.replace(/\r\n|\r|\n/g, "%0D%0A").replace(' ', "%20");
    let params = {
        to_name: inputs.email,
        from_name: 'ZeldaTeam',
        message_html: messageEnter
    }

    emailjs.send('service_9o2p9yy', 'template_xt1qt2t', params, 'C_HuAfaEkCbB8QoDQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    console.log({
        'firstname': inputs.name,
        'email': inputs.email,
        'subject': inputs.sub,
        'message': inputs.message,

    })
        setShow(false)
}

    return  (
    <div className="contact__wrap" id="contact">
        <form className="contact__form" onSubmit={e => sendMessage(e)}>
        <h1> Contact Us</h1>
            <input
                value={inputs.name}
                onChange={e => handleInputChange(e)}
                type="text" name="name"
                placeholder="name"
                title="Your name"
                maxLength="50"
                required/>
            <input
                value={inputs.email}
                onChange={e => handleInputChange(e)}
                type="email" name="email"
                placeholder="email"
                title="Your email"
                maxLength="50"
                required/>
            <input
                value={inputs.sub}
                onChange={e => handleInputChange(e)}
                type="text" name="sub"
                placeholder="Subject"
                title="Subject"
                maxLength="50"
                required/>
            <textarea
                value={inputs.message}
                onChange={e => handleInputChange(e)}
                type="text" name="message"
                placeholder="message"
                title="Your message"
                maxLength="550"
                required/>
            <input
                type="submit"
                value="send message"/>
        </form>
    </div>)
}


export default Contact;