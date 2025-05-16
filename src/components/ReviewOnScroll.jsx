import React, { useEffect, useRef } from 'react'

function ReviewOnScroll({children}) {

    const ref = useRef(null);

    useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); //stop observing after visible
      }
    });

        },{threshold:0.2, rootMargin: "0px 0px -50px 0px"});

        if (ref.current) observer.observe(ref.current);

      return ()=> observer.disconnect();

    },[])
  return (
    <>
    <div ref={ref} className='reveal'>{children}</div>
    </>
  )
}

export default ReviewOnScroll