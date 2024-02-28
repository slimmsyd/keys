
import genVid from "../assets/Gen_PAGE.mp4";
import "../index.css";


const footerBanner = ({video}) => {


  const textLines = [
    "WHAT YOU DO",
    "FREQUENTLY",
    "DO",
    "BECOMES YOUR",
    "FREQUENCY"
  ];

      const renderBanner = (texts, rep) => { 
    
        return (
          <>
            {texts.map((text, index) => (
              <div key={index} className="flex-row">
                <span className="white-line"></span>
                <p>{text}</p>
                <span className="white-line"></span>
              </div>
            ))}
          </>
        );
      };

      return ( 


        <section className="about-section px-0 w-full h-[100vh] flex items-center justify-center bg-[#111111] z-[100]">
          <div class="video-container">
            <div class="opacity-bg">


            <h1 className="hero-title no-translate text-[calc(16px_+_5vw)] leading-[1em] text-white font-['Cinzel'] font-bold translate-x-[calc(12px_+_-4vw)] translate-y-[calc(12px_+_2vw)] z-[99]">
            19 KEYS
          </h1>
            </div>

            <div class="lg-image-banner">

                {renderBanner(textLines)}
                {renderBanner(textLines)}
                {renderBanner(textLines)}



            </div>
            <video
              className="relative w-full h-[100vh]  object-cover lg:w-[100%]"
              loop
              muted
              autoPlay
              playsInline
            >
              <source
                className="absolute inset-0 w-full h-full"
                src={video}
                type="video/mp4"
              />
            </video>

            <div class="lg-image-banner bottom-banner">

            {renderBanner(textLines)}
                {renderBanner(textLines)}
                {renderBanner(textLines)}


            </div>
          </div>
        </section>

        
      )

      

      


}

export default  footerBanner;

