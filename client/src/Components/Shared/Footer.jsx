import React from "react";
import logo from "../../assets/logo-static.svg";
const Footer = () => {
  return (
    // <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
    //   <div className="grid grid-flow-col gap-4">
    //     <a className="link link-hover">About</a>
    //     <a className="link link-hover">Contact</a>
    //     <a className="link link-hover">Events</a>
    //     <a className="link link-hover">Workshops</a>
    //     <a className="link link-hover">Sponsors</a>
    //   </div>
    //   <div>
    //     <div className="grid grid-flow-col gap-4">
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    //         </svg>
    //       </a>
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    //         </svg>
    //       </a>
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div>
    //     <p>Copyright © 2022 - All right reserved by Instruo 2k22</p>
    //   </div>
    // </footer>
    <>
      <footer className="footer p-16 pb-12 bg-neutral text-base-content">
        <div className="max-w-md">
          <img src={logo} width="50" height="50" className="mx-4" />
          <p className="text-lg">
            Instruo 2k23
            <br />
            The Largest Technical Fest in Kolkata
          </p>
        </div>
        <div>
          <span className="footer-title">Explore</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Sponsors</a>
          <a className="link link-hover">Contacts</a>
          <a className="link link-hover">Our Team</a>
        </div>
        <div>
          <span className="footer-title">Join Us</span>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Workshops</a>
          <a className="link link-hover">Register</a>
          <a className="link link-hover">Sign In</a>
        </div>
        <div>
          <span className="footer-title">Get in Touch with us</span>
          <a
            className="link link-hover flex gap-2 items-center justify-center"
            href="mailto:instruo@iiests.ac.in"
          >
            <svg
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
            instruo@iiests.ac.in
          </a>
          <a
            className="link link-hover flex gap-2 items-center justify-center"
            href="tel:9124245678"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>
            +91 9123476835
          </a>
        </div>
        <div>
          <span className="footer-title">Socials</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.002 21.041C9.54195 21.041 9.25195 21.028 8.29195 20.986C7.54332 20.9614 6.80439 20.8092 6.10695 20.536C4.90026 20.0664 3.94609 19.1119 3.47695 17.905C3.21426 17.205 3.07257 16.4655 3.05795 15.718C3.00195 14.76 3.00195 14.446 3.00195 12.005C3.00195 9.538 3.01495 9.25 3.05795 8.295C3.07289 7.54853 3.21457 6.81001 3.47695 6.111C3.94558 4.90253 4.9013 3.94718 6.10995 3.479C6.8086 3.21521 7.5473 3.07315 8.29395 3.059C9.24895 3.005 9.56295 3.005 12.002 3.005C14.482 3.005 14.767 3.018 15.712 3.059C16.4605 3.07327 17.2012 3.21531 17.902 3.479C19.1103 3.94771 20.0658 4.90288 20.535 6.111C20.8021 6.8202 20.9445 7.57026 20.956 8.328C21.012 9.286 21.012 9.59901 21.012 12.039C21.012 14.479 20.998 14.799 20.956 15.746C20.9411 16.4942 20.799 17.2344 20.536 17.935C20.0656 19.1427 19.11 20.0976 17.902 20.567C17.2022 20.8292 16.4631 20.9709 15.716 20.986C14.761 21.041 14.448 21.041 12.002 21.041ZM11.968 4.588C9.52195 4.588 9.26795 4.6 8.31295 4.643C7.74294 4.65056 7.17843 4.75575 6.64395 4.954C5.85471 5.25601 5.23018 5.878 4.92495 6.666C4.72517 7.2063 4.61996 7.77698 4.61395 8.353C4.56095 9.322 4.56095 9.576 4.56095 12.005C4.56095 14.405 4.56995 14.696 4.61395 15.659C4.62291 16.2292 4.72805 16.7938 4.92495 17.329C5.23063 18.1165 5.85505 18.738 6.64395 19.04C7.17807 19.2396 7.7428 19.3448 8.31295 19.351C9.28095 19.407 9.53595 19.407 11.968 19.407C14.421 19.407 14.675 19.395 15.622 19.351C16.1924 19.3441 16.7573 19.2389 17.292 19.04C18.0764 18.7354 18.6969 18.1153 19.002 17.331C19.2014 16.7903 19.3065 16.2193 19.313 15.643H19.324C19.367 14.687 19.367 14.432 19.367 11.989C19.367 9.54601 19.356 9.289 19.313 8.334C19.304 7.76446 19.1988 7.20052 19.002 6.666C18.6976 5.88058 18.077 5.2593 17.292 4.954C16.7574 4.75475 16.1924 4.64953 15.622 4.643C14.655 4.588 14.402 4.588 11.968 4.588ZM12.002 16.624C10.1319 16.6252 8.44537 15.4997 7.72882 13.7725C7.01226 12.0452 7.40686 10.0563 8.72858 8.73347C10.0503 7.4106 12.0388 7.01428 13.7667 7.72934C15.4946 8.4444 16.6215 10.13 16.622 12C16.6192 14.5511 14.553 16.619 12.002 16.624ZM12.002 8.998C10.3451 8.998 9.00195 10.3412 9.00195 11.998C9.00195 13.6549 10.3451 14.998 12.002 14.998C13.6588 14.998 15.002 13.6549 15.002 11.998C14.9981 10.3427 13.6572 9.00185 12.002 8.998ZM16.802 8.28501C16.2074 8.2828 15.7269 7.79959 15.728 7.20501C15.7291 6.61043 16.2114 6.12901 16.806 6.12901C17.4005 6.12901 17.8828 6.61042 17.884 7.205C17.8842 7.49187 17.7702 7.76703 17.5672 7.96968C17.3642 8.17234 17.0888 8.2858 16.802 8.28501Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-neutral border-t border-base-200 text-base-content">
        <div>
          <p>Copyright © 2023 - All rights reserved by Instruo</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
