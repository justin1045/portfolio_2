  import React, { useEffect, useState } from 'react'

  function Loading({onComplete}) {

    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(()=>{
      let i = 0;
      const interval = setInterval(()=> {
        setText(fullText.substring(0, i));
        i++;

        if (i > fullText.length) {
          clearInterval(interval);

          setTimeout(()=> {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsUnmounted(true);
              onComplete();
            }, 700); // Wait for fade-out transition to complete
          }, 1000);
        }
      }, 100)

      return () => clearInterval(interval);
    },[onComplete])

    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isUnmounted, setIsUnmounted] = useState(false);

    if (isUnmounted) return null;

    return (
      <>
      <div className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-700 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
          <div className='mb-4 text-4xl font-mono font-bold'>
              {text} <span className='animate-blink ml-1'> | </span>
          </div>
          <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
              <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'>
                  {" "}
              </div>

          </div>
      </div>
      </>
    )
  }

  export default Loading