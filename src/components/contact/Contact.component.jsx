import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext
} from "react";
import emailjs from "@emailjs/browser";
import email from "../../img/email.png"
import { ContactContainer, ContactWrapper, ContactTitle, ContactSubTitle, ContactDescription, ContactForm, ContactFromAddressInput, BackgroundContainer, BackgroundImage, SendButton } from "./contact.styles";
import CustomInput from "../customInput/CustomInput.component";
import { ThemeContext } from "../../context";
import { gsap } from 'gsap';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const contactRef = useRef();
  const formRef = useRef();
  const buttonRef = useRef();

  const [contactPosition, setContactPosition] = useState(Infinity);
  const [contactVisibility, setContactVisibility] = useState(0);

  const handleScroll = useCallback(async (e) => {
    const contactElement = contactRef.current;
    const contactPosition = contactElement.getClientRects()[0].y;
    setContactPosition(contactPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!contactVisibility && window.innerHeight * 0.4 >= contactPosition) {
      setContactVisibility(1);
    }

    const button = buttonRef.current;

    let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

    button.addEventListener('click', e => {

        if(!button.classList.contains('active')) {

            button.classList.add('active');

            gsap.to(button, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(button, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            button.removeAttribute('style');
                            gsap.fromTo(button, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    button.classList.remove('active');
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(button, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': getVar('--primary-darkest'),
                    '--right-wing-background': getVar('--primary-darkest'),
                    duration: .1
                }, {
                    '--left-wing-background': getVar('--primary'),
                    '--right-wing-background': getVar('--primary'),
                    duration: .1
                }, {
                    '--left-body-background': getVar('--primary-dark'),
                    '--right-body-background': getVar('--primary-darkest'),
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }

    })


    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, contactPosition, contactVisibility]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o87fd5o', 'template_5lf7n6s', formRef.current, 'ORS6nvw8z6wahaGhq')
      .then((result) => {
          console.log(result.text);
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <ContactContainer ref={contactRef} id="contact" darkMode={darkMode}>
      <BackgroundContainer>
        <BackgroundImage src={email} alt=''/>
      </BackgroundContainer>
      <ContactWrapper visibility={contactVisibility}>
        <ContactDescription>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactSubTitle>
          Got a question or proposal, or just want to say hello? Send me a message.
          </ContactSubTitle>
        </ContactDescription>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactFromAddressInput>
            <CustomInput
              type="text"
              name="user_name"
              label="Your Name"
            ></CustomInput>
            <CustomInput
              type="email"
              name="user_email"
              label="Your Email"
            ></CustomInput>
            <CustomInput
              type="text"
              name="user_subject"
              label="Subject"
            ></CustomInput>
          </ContactFromAddressInput>
          <CustomInput
            type="textarea"
            name="user_text"
            label="Your Message"
          ></CustomInput>
          <SendButton type='submit' ref={buttonRef}>
            <span className="default">Send</span>
            <span className="success">Sent</span>
            <div className="left"></div>
            <div className="right"></div>
          </SendButton>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
