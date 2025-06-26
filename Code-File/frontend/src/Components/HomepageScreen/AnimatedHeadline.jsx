import React from 'react';

const headline = 'CodeFusion';

const AnimatedHeadline = () => {
  return (
    <>
      <style>{`
        @keyframes zoomIn {
          0%, 100% {
            transform: translateZ(-100px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateZ(0) scale(1.2);
            opacity: 1;
          }
        }

        .animated-headline {
          display: flex;
          justify-content: center;
          font-weight: bold;
          font-family: 'Poppins', sans-serif;
          perspective: 1000px;
          margin-top: 50px;
          font-size: 10vw; /* responsive font size */
        }

        .animated-headline span {
          display: inline-block;
          transform: translateZ(-100px);
          animation: zoomIn 2s ease-in-out infinite;
          color: #FAAE17;
          /* animation-delay set inline in React */
        }

        /* Smaller devices */
        @media (max-width: 600px) {
          .animated-headline {
            font-size: 15vw;
            margin-top: 30px;
          }
        }

        @media (max-width: 400px) {
          .animated-headline {
            font-size: 18vw;
            margin-top: 20px;
          }
        }
      `}</style>

      <div className="animated-headline">
        {headline.split('').map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.3}s`, // shorter delay for smaller screens
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  );
};

export default AnimatedHeadline;
