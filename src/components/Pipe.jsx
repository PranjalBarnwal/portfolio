    import React, { useState } from "react";
    import pipe from "./../assets/img/pipe.png";
    import flower from "./../assets/img/flower.png";
    import linkedin from "./../assets/img/linkedin.png";
    import github from "./../assets/img/github.png";
    import leetcode from "./../assets/img/leetcode.png";
    import bricks from "./../assets/img/bricks.png";

    const Pipe = () => {
    const [show, setShow] = useState(false);

    return (
        <>
        <div className="container flex flex-col items-end sm:static absolute bottom-0 overflow-hidden">
        {show && (
            <>
            <a className="leetcode flex justify-center sm:p-1 m-2 sm:m-0" target="_blank" href="https://leetcode.com/happybarnwal007/">
                <img className="sm:w-14 w-10" src={leetcode} alt="" />
            </a>

            <a className="github flex justify-center sm:p-2 m-2 sm:m-0" target="_blank" href="https://github.com/PranjalBarnwal">
                <img className="sm:w-14 w-10" src={github} alt="" />
            </a>
            <a className="linkedin flex justify-center p-2 m-2 sm:m-1" target="_blank" href="https://www.linkedin.com/in/pranjal-barnwal-dev/">
                <img className="sm:w-10 w-7" src={linkedin} alt="" />
            </a>
            <div className="flower flex justify-center relative top-2">
                <img className="sm:w-[5rem] w-[4rem]" src={flower} alt="" />
            </div>
            </>
        )}
        <div className="pipe flex justify-center cursor-pointer" onClick={()=>setShow(!show)}>
            <img className="sm:w-[5rem] w-[4rem]" src={pipe} alt="" />
        </div>
        {/* <div className="pipe absolute bottom-[-150px]" onClick={()=>setShow(!show)}>
            <img className="sm:w-[10rem]" src={bricks} alt="" />
        </div> */}
        </div>
        </>
    );
    };

    export default Pipe;
