import React from "react";

export const useOnClickOutside = (ref: any, handler: any) => {
  React.useEffect(() => {
    const listener = (event: any) => {     
               
      if (!ref.current || event.path?.includes(ref.current)) {
        return;
      }
      
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

   }, [ref, handler]);
}