import React, { useState, useRef , useEffect, useSyncExternalStore } from 'react'
import styles from '../../src/styles/chat.module.css'
import ChatMessage from '../components/ChatMessage';
import Header from '../components/Header';
import Footer from '../components/Footer';

import KeysImage from '../assets/19Keys_Asci.png';
import KeysImage2 from '../assets/19Keys_asci2.png';
import KeysImage3 from '../assets/19Keys_Asci3.png';
export default function ChatApp() { 

    const [message, setMessage] = useState("")
    const [responses, setResponses] = useState([])
    const chatInput = useRef()
    const btnSubmit = useRef();
    const chat_selection = useRef();
    const app_wrapper = useRef();
    const mobile_chat_button = useRef();
    const form = useRef();






const[showDropdown, setDropdown] = useState(null);

 
  
  
  
    const [isVisible, setIsVisble ] = useState(null);




  
    function adjustHeight(el) {
      // Reset the height to 'auto' to get the real scrollHeight 
      // and then set it back to that scrollHeight
      el.style.height = 'auto';
      el.style.height = (el.scrollHeight) + 'px';
  }
  




useEffect(() => {
  const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          btnSubmit.current.click(); // Programmatically click the submit button
      }
  };

  chatInput.current.addEventListener('keydown', handleKeyDown);

  // Cleanup - remove the event listener when the component is unmounted
  return () => {
      if (chatInput.current) { // Check if chatInput.current is not null
          chatInput.current.removeEventListener('keydown', handleKeyDown);
      }
  };
}, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Set up the new response without any bot response yet.
    const newResponse = { question: message, response: "" };
    setResponses([...responses, newResponse]);
    setMessage("");

    try {
        // 2. Fetch bot reply from the API
        const botReply = await fetch('http://localhost:3001/', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ message }),
        }).then((res) => res.json());

        // 3. Update the responses array with the bot's reply.
        setResponses((prev) => {
            return prev.map((r) => {
              const updatedResponses = [...prev]; // Copy existing responses

                if (r.question === newResponse.question) {
                    return { ...r, response: botReply.message };
                }
                return r;
            });
        });

        console.log(responses)

    } catch (error) {
        console.error(error);
    }





};

  
  
    return ( 



      <div className={styles.app_container}>


          {/* <div ref = {loading_div} className ={`${styles.loading_container} ${fadeOut ? styles.fade_out: ''} ${displayNone ? styles.displayNone : ''}`}>

            <div className  ={styles.loading_wrapper}>
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>

          </div>
 */}





   
<Header />


        <div className = {`${styles.holder} ${isVisible === true ? 'visible' : ''}`}> 
          
        
        </div>
        <div ref = {app_wrapper} className = {styles.app_wrapper}>

          <div ref = {chat_selection} className = {styles.chat_selection}>

         

          </div>


          <div className = {styles.chat_conversation}>

          <button  ref = {mobile_chat_button} className = {`${styles.close_chat} ${styles.chat_btn} ${styles.fixed_chat_btn}`}>
                    {/* <Image src = {CloseIcon} width={100} height={100} /> */}
</button>

          <span className = {styles.chat_name}>
            <div className = {styles.chat_container}>
          <div className = {styles.chat_box}>
         
  
            <div className = {styles.chat_flex}>
              <div className = {styles.chat_Messages}>
              {responses.map((r, i) => (
                  <div className={styles.response_Flex} key={i}>
                <p className={`${styles.bot_Messages} ${styles.new_bot_message }`}>
      {r.question}
    </p>
    {r.response && <p className={styles.user_Messages}><ChatMessage message={r.response} /></p>}

                  </div>
                ))}
              </div>
  
            </div>
  
          </div>
  
          <form ref = {form}className = {styles.form} onSubmit={handleSubmit}>
    <textarea 
    onChange={(e) =>
    { 
      setMessage(e.target.value);
      adjustHeight(e.target)
    }}
    value = {message}
    ref = {chatInput}
    id= {styles.chatInput} 
    placeholder="Ask The Mind Of Keys..." 
    >
      </textarea>
    <button ref = {btnSubmit} type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="white" viewBox="0 0 256 256" class="h-4 w-auto">
            <path d="M232,127.89a16,16,0,0,1-8.18,14L55.91,237.9A16.14,16.14,0,0,1,48,240a16,16,0,0,1-15.05-21.34L60.3,138.71A4,4,0,0,1,64.09,136H136a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47H64.16a4,4,0,0,1-3.79-2.7l-27.44-80A16,16,0,0,1,55.85,18.07l168,95.89A16,16,0,0,1,232,127.89Z"></path>
        </svg>
    </button>
</form>
  
  
        </div>  
            </span>

          </div>




          <div className = {styles.chat_guidelines}>
          <img src = {KeysImage} />
          <img src = {KeysImage2} />
          <img src = {KeysImage3} />
           



          </div>











        </div>





  
      </div>
    );
  }
