import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content ed-grid s-grid-1 lg-grid-12">
        <div className="footer__logo lg-cols-2 s-mb-4">
          <img className="from-lg" src="./assets/img/Wordmark.png" alt="" />
          <div className="s-center to-lg">
            <img src="./assets/img/Lettermark.png" alt="" />
          </div>
        </div>
        <div className="footer__menu lg-x-10 lg-cols-3">
          <ul className="ed-grid s-grid-2 s-pl-0">
            <li className="s-mb-2 s-center">
              <Link to="/">Inicio</Link>
            </li>
            <li className="s-mb-2 s-center">
              <Link to="/projects">Acerca de</Link>
            </li>
            <li className="s-mb-2 s-center">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="s-mb-2 s-center">
              <a href="/aboutme">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer__social lg-cols-3">
          <ul className="s-pl-0 ed-grid s-grid-5 lg-grid-5 s-center">
            <li>
              <a href="https://www.linkedin.com/in/jonathan-alexis-bello-l%C3%B3pez-a4b3391b9/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.829 0H2.17099C0.972 0 0 0.972 0 2.17099V21.8289C0 23.028 0.972 24 2.17099 24H21.8289C23.028 24 24 23.028 24 21.8289V2.17099C24 0.972 23.028 0 21.829 0ZM7.42662 20.7232C7.42662 21.0721 7.14377 21.355 6.79483 21.355H4.10544C3.7565 21.355 3.47365 21.0721 3.47365 20.7232V9.4494C3.47365 9.10046 3.7565 8.81761 4.10544 8.81761H6.79483C7.14377 8.81761 7.42662 9.10046 7.42662 9.4494V20.7232ZM5.45014 7.75489C4.0391 7.75489 2.8952 6.61099 2.8952 5.19996C2.8952 3.78892 4.0391 2.64503 5.45014 2.64503C6.86117 2.64503 8.00507 3.78892 8.00507 5.19996C8.00507 6.61099 6.86124 7.75489 5.45014 7.75489ZM21.4813 20.7741C21.4813 21.0949 21.2212 21.355 20.9004 21.355H18.0145C17.6937 21.355 17.4335 21.0949 17.4335 20.7741V15.486C17.4335 14.6972 17.6649 12.0292 15.372 12.0292C13.5934 12.0292 13.2327 13.8553 13.1602 14.6749V20.7741C13.1602 21.0949 12.9002 21.355 12.5793 21.355H9.78817C9.46737 21.355 9.20727 21.0949 9.20727 20.7741V9.39851C9.20727 9.07772 9.46737 8.81761 9.78817 8.81761H12.5793C12.9001 8.81761 13.1602 9.07772 13.1602 9.39851V10.3821C13.8197 9.39236 14.7998 8.62844 16.8866 8.62844C21.5077 8.62844 21.4813 12.9457 21.4813 15.3178V20.7741Z"
                    fill="#A1A0A8"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Jonathan-Bello">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6798 1.32019C21.7993 0.439662 20.7398 0 19.5001 0H4.49992C3.26022 0 2.20071 0.439662 1.32019 1.32019C0.439662 2.20071 0 3.26022 0 4.49992V19.5001C0 20.7398 0.439662 21.7993 1.32019 22.6798C2.20071 23.5603 3.26022 24 4.49992 24H8.0004C8.22864 24 8.40042 23.9916 8.51574 23.976C8.64991 23.9491 8.77102 23.8775 8.8593 23.773C8.97342 23.6528 9.03108 23.4787 9.03108 23.2504L9.02267 22.1873C9.01787 21.5098 9.01547 20.974 9.01547 20.5776L8.65509 20.6401C8.42685 20.6821 8.13855 20.7001 7.78898 20.6953C7.42462 20.6886 7.06143 20.652 6.70304 20.586C6.32152 20.5156 5.96237 20.3549 5.65554 20.1175C5.33419 19.8744 5.09452 19.5392 4.96842 19.1565L4.81225 18.7961C4.68063 18.5119 4.51527 18.2445 4.31974 17.9997C4.0963 17.7078 3.86926 17.5108 3.63982 17.4063L3.53171 17.3282C3.45632 17.2742 3.38775 17.2113 3.32749 17.1408C3.26994 17.0754 3.22256 17.0017 3.18695 16.9222C3.15571 16.8489 3.18214 16.7888 3.26503 16.742C3.34912 16.6939 3.49927 16.6711 3.7191 16.6711L4.03143 16.7192C4.23925 16.76 4.49752 16.8849 4.80384 17.0927C5.11384 17.3041 5.3728 17.5819 5.56184 17.906C5.80209 18.3324 6.09039 18.658 6.42915 18.8826C6.76791 19.1061 7.10906 19.219 7.45262 19.219C7.79619 19.219 8.0929 19.1926 8.34396 19.1409C8.58675 19.0907 8.82267 19.0117 9.0467 18.9055C9.1404 18.2087 9.39506 17.6706 9.8119 17.2958C9.27179 17.2428 8.73648 17.1488 8.21062 17.0147C7.69743 16.8737 7.20389 16.6691 6.74148 16.4056C6.25766 16.1422 5.83033 15.7863 5.48376 15.3581C5.15101 14.9413 4.87712 14.3947 4.6633 13.7184C4.45067 13.0409 4.34376 12.2589 4.34376 11.3735C4.34376 10.1134 4.75459 9.04069 5.57746 8.15416C5.19305 7.20757 5.22909 6.14445 5.68677 4.96842C5.98949 4.87352 6.43756 4.94439 7.03098 5.17864C7.62441 5.41288 8.05926 5.61349 8.33555 5.77927C8.61184 5.94744 8.83287 6.08799 8.99985 6.20211C9.97645 5.93033 10.9857 5.79372 11.9994 5.79609C13.0313 5.79609 14.0307 5.93183 15.0001 6.20211L15.5936 5.82732C16.05 5.55325 16.5315 5.32318 17.0315 5.1402C17.5841 4.93118 18.0045 4.87472 18.2976 4.96842C18.7661 6.14565 18.8069 7.20757 18.4213 8.15536C19.2442 9.04069 19.6562 10.1134 19.6562 11.3747C19.6562 12.2601 19.5493 13.0445 19.3355 13.7256C19.1229 14.4079 18.8466 14.9545 18.5078 15.3665C18.1691 15.7786 17.7474 16.1233 17.2429 16.4056C16.7384 16.6867 16.2483 16.8897 15.7738 17.0147C15.2479 17.1493 14.7126 17.2436 14.1725 17.297C14.713 17.7655 14.9845 18.5042 14.9845 19.5145V23.2504C14.9845 23.427 15.0098 23.5699 15.0626 23.6793C15.0869 23.7319 15.1216 23.7792 15.1645 23.8182C15.2074 23.8572 15.2577 23.8871 15.3125 23.9063C15.4278 23.9471 15.5287 23.9736 15.6176 23.9832C15.7065 23.9952 15.8338 23.9988 15.9996 23.9988H19.5001C20.7398 23.9988 21.7993 23.5591 22.6798 22.6786C23.5591 21.7993 24 20.7386 24 19.4989V4.49992C24 3.26022 23.5591 2.20071 22.6786 1.32019H22.6798Z"
                    fill="#A1A0A8"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jonathanbe110/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.16221C15.2041 2.16221 15.5836 2.1744 16.849 2.23213C18.019 2.28553 18.6544 2.48102 19.0773 2.64531C19.6373 2.863 20.0371 3.12308 20.457 3.54297C20.8769 3.96287 21.137 4.36266 21.3546 4.92274C21.519 5.34564 21.7145 5.98103 21.7679 7.15097C21.8256 8.41637 21.8378 8.79587 21.8378 12C21.8378 15.2042 21.8256 15.5837 21.7679 16.849C21.7145 18.019 21.519 18.6544 21.3546 19.0773C21.137 19.6374 20.8769 20.0372 20.457 20.4571C20.0371 20.877 19.6373 21.137 19.0773 21.3547C18.6544 21.519 18.019 21.7145 16.849 21.7679C15.5838 21.8256 15.2043 21.8378 12 21.8378C8.79563 21.8378 8.41613 21.8256 7.15097 21.7679C5.98098 21.7145 5.34559 21.519 4.92274 21.3547C4.36261 21.137 3.96282 20.877 3.54293 20.4571C3.12303 20.0372 2.86295 19.6374 2.64531 19.0773C2.48097 18.6544 2.28548 18.019 2.23209 16.8491C2.17435 15.5837 2.16216 15.2042 2.16216 12C2.16216 8.79587 2.17435 8.41637 2.23209 7.15102C2.28548 5.98103 2.48097 5.34564 2.64531 4.92274C2.86295 4.36266 3.12303 3.96287 3.54293 3.54297C3.96282 3.12308 4.36261 2.863 4.92274 2.64531C5.34559 2.48102 5.98098 2.28553 7.15092 2.23213C8.41632 2.1744 8.79582 2.16221 12 2.16221ZM12 0C8.74095 0 8.33234 0.0138139 7.05241 0.0722133C5.77511 0.130517 4.90283 0.333343 4.1395 0.630008C3.35039 0.936677 2.68118 1.347 2.01406 2.01411C1.34695 2.68123 0.936629 3.35044 0.629961 4.13954C0.333296 4.90288 0.13047 5.77516 0.0721656 7.05246C0.0137662 8.33234 0 8.741 0 12C0 15.2591 0.0137662 15.6677 0.0721656 16.9476C0.13047 18.2249 0.333296 19.0972 0.629961 19.8605C0.936629 20.6496 1.34695 21.3188 2.01406 21.9859C2.68118 22.6531 3.35039 23.0634 4.1395 23.37C4.90283 23.6667 5.77511 23.8695 7.05241 23.9278C8.33234 23.9862 8.74095 24 12 24C15.259 24 15.6677 23.9862 16.9475 23.9278C18.2248 23.8695 19.0971 23.6667 19.8605 23.37C20.6496 23.0634 21.3188 22.6531 21.9859 21.9859C22.653 21.3188 23.0633 20.6496 23.37 19.8605C23.6667 19.0972 23.8695 18.2249 23.9278 16.9476C23.9862 15.6677 24 15.2591 24 12C24 8.741 23.9862 8.33234 23.9278 7.05246C23.8695 5.77516 23.6667 4.90288 23.37 4.13954C23.0633 3.35044 22.653 2.68123 21.9859 2.01411C21.3188 1.347 20.6496 0.936677 19.8605 0.630008C19.0971 0.333343 18.2248 0.130517 16.9475 0.0722133C15.6677 0.0138139 15.259 0 12 0ZM12 5.83784C8.59671 5.83784 5.83779 8.59676 5.83779 12C5.83779 15.4033 8.59671 18.1622 12 18.1622C15.4032 18.1622 18.1622 15.4033 18.1622 12C18.1622 8.59676 15.4032 5.83784 12 5.83784ZM12 16C9.79085 16 7.99995 14.2091 7.99995 12C7.99995 9.7909 9.79085 8 12 8C14.2091 8 16 9.7909 16 12C16 14.2091 14.2091 16 12 16ZM19.8456 5.59438C19.8456 6.38968 19.2009 7.03441 18.4056 7.03441C17.6103 7.03441 16.9656 6.38968 16.9656 5.59438C16.9656 4.79909 17.6103 4.15441 18.4056 4.15441C19.2009 4.15441 19.8456 4.79909 19.8456 5.59438Z"
                    fill="#A1A0A8"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/JonathanBe110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3437 4.95195 17.3437 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z"
                    fill="#A1A0A8"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Jonathan_Be110">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 2.24678C23.1005 2.63554 22.1477 2.89044 21.1728 3.00321C22.1961 2.40855 22.9657 1.46553 23.3376 0.350344C22.368 0.908857 21.3105 1.30225 20.2092 1.51409C19.7455 1.0334 19.1876 0.651241 18.5697 0.390931C17.9518 0.13062 17.2868 -0.00238372 16.6152 3.23348e-05C13.896 3.23348e-05 11.6916 2.1494 11.6916 4.79752C11.6916 5.17277 11.7348 5.53971 11.8188 5.89002C9.86829 5.79822 7.95854 5.30507 6.2114 4.44203C4.46426 3.57899 2.91811 2.36503 1.6716 0.877593C1.23459 1.60719 1.0049 2.44008 1.0068 3.28821C1.0068 4.95427 1.8756 6.4232 3.1956 7.28176C2.41498 7.25683 1.65123 7.05059 0.966 6.6797V6.73908C0.966 9.0642 2.664 11.0034 4.914 11.4451C4.49113 11.5562 4.0555 11.6124 3.618 11.6126C3.3 11.6126 2.9916 11.5829 2.6904 11.5235C3.0121 12.4829 3.62773 13.3194 4.45178 13.9167C5.27584 14.5141 6.26741 14.8426 7.2888 14.8568C5.53688 16.1922 3.38618 16.9136 1.1748 16.9076C0.7764 16.9076 0.3852 16.8839 0 16.8411C2.2575 18.2551 4.87511 19.0039 7.5468 19C16.6032 19 21.5544 11.6886 21.5544 5.34852L21.5376 4.72746C22.5034 4.05494 23.3378 3.2144 24 2.24678Z"
                    fill="#A1A0A8"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__contact s-center lg-x-10 lg-cols-3">
          <h4 className="footer__contact__title">Contactame por aquí</h4>
          <div className="footer__contact__item">
            <PhoneIcon width={24} className="s-mr-2" />
            <span>+52 231 325 3031</span>
          </div>
          <div className="footer__contact__item">
            <MailIcon width={24} className="s-mr-2" />
            <span>
              <a href="mailto:jonathan.bellofg@gmail.com">
                jonathan.bellofg@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
