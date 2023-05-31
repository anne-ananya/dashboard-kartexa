import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        top: "1750px",
        left: '0px',
        right: '0px',
        backgroundColor: '#B4D5FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        width: '1510px',
        height: '70px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'Medium',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#0E1A45',
            marginRight: '20px',

          }}
        >
          © copyright 2022-2023
        </span>
        <img
          src="images\Frame 1000003850.png"
          alt="Company Logo"
          style={{
            left: '600px',
            width: '140px',
            height: '50px',
            position: "absolute",
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="https://www.linkedin.com/in/ananya-de-5552a4205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#0E1A45"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '31.14px',
              height: '31.14px',
              marginRight: '20px',
            }}
          >
        <path d="M15.5714 0C6.97239 0 0 6.97239 0 15.5714C0 24.1705 6.97239 31.1429 15.5714 31.1429C24.1705 31.1429 31.1429 24.1705 31.1429 15.5714C31.1429 6.97239 24.1705 0 15.5714 0ZM23.0547 11.7377C23.0652 11.901 23.0652 12.0713 23.0652 12.2382C23.0652 17.3406 19.1793 23.2181 12.0783 23.2181C9.88855 23.2181 7.8587 22.582 6.14863 21.4872C6.46145 21.5219 6.76036 21.5358 7.08013 21.5358C8.88753 21.5358 10.5489 20.9241 11.8732 19.8883C10.177 19.8536 8.75198 18.7413 8.26537 17.212C8.85972 17.2989 9.39499 17.2989 10.0067 17.1425C9.13336 16.965 8.34835 16.4907 7.78508 15.8001C7.2218 15.1094 6.91499 14.2451 6.91677 13.3539V13.3052C7.42771 13.5937 8.02902 13.771 8.65813 13.7953C8.12927 13.4429 7.69555 12.9653 7.39542 12.4051C7.0953 11.8449 6.93806 11.2193 6.93763 10.5837C6.93763 9.86422 7.12532 9.2073 7.46247 8.63728C8.43187 9.83063 9.64153 10.8066 11.0128 11.5019C12.3841 12.1971 13.8864 12.596 15.422 12.6726C14.8763 10.0484 16.8366 7.92474 19.1932 7.92474C20.3054 7.92474 21.3064 8.3905 22.012 9.14126C22.8844 8.9779 23.7186 8.65118 24.4624 8.21323C24.1739 9.1065 23.5692 9.86075 22.7663 10.3369C23.5448 10.2535 24.2956 10.038 24.9908 9.73562C24.4659 10.5072 23.809 11.192 23.0547 11.7377Z" fill="#0E1A45"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ananya-de-5552a4205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#0E1A45"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '31.14px',
              height: '31.14px',
              marginRight: '20px',
            }}
          >
        <path d="M15.7143 0C12.6345 0 9.62394 0.913248 7.06323 2.62426C4.50253 4.33527 2.5067 6.76719 1.32813 9.6125C0.149569 12.4578 -0.158797 15.5887 0.44203 18.6093C1.04286 21.6298 2.52589 24.4044 4.70359 26.5821C6.8813 28.7598 9.65586 30.2428 12.6764 30.8436C15.697 31.4445 18.8279 31.1361 21.6732 29.9575C24.5185 28.779 26.9504 26.7832 28.6614 24.2224C30.3724 21.6617 31.2857 18.6512 31.2857 15.5714C31.2813 11.443 29.6394 7.48484 26.7201 4.56558C23.8008 1.64632 19.8427 0.00435973 15.7143 0ZM26.6786 21.8988C25.8357 23.2463 24.5331 23.956 22.9115 23.956C19.8077 23.956 17.6996 20.1665 15.4672 16.1539C13.8382 13.2252 11.8109 9.58242 10.116 9.58242C8.25494 9.58242 6.13184 13.9065 6.13184 17.699C6.13184 18.9358 6.35643 19.9449 6.78165 20.6276C7.17991 21.261 7.7309 21.5604 8.51696 21.5604C9.42729 21.5604 10.5412 20.5124 11.9217 18.3398C12.0968 18.0823 12.3654 17.9031 12.6704 17.8402C12.9754 17.7773 13.2929 17.8357 13.5556 18.003C13.8183 18.1702 14.0055 18.4333 14.0776 18.7362C14.1496 19.0392 14.1008 19.3584 13.9415 19.626C11.498 23.4634 9.75818 23.956 8.51696 23.956C6.89544 23.956 5.59283 23.2448 4.74988 21.8988C4.08659 20.8388 3.73623 19.3864 3.73623 17.7065C3.76264 15.3547 4.32596 13.0399 5.38321 10.9389C6.63192 8.51937 8.31334 7.18681 10.116 7.18681C13.2198 7.18681 15.328 10.9764 17.5604 14.989C19.1894 17.9161 21.2167 21.5604 22.9115 21.5604C23.6976 21.5604 24.2486 21.261 24.6469 20.6276C25.0721 19.9494 25.2967 18.9358 25.2967 17.699C25.2967 13.9065 23.1736 9.58242 21.3125 9.58242C20.8034 9.58242 20.212 9.92828 19.5547 10.6125C19.4457 10.726 19.3154 10.8168 19.1712 10.8799C19.0271 10.943 18.8719 10.9771 18.7146 10.9802C18.5573 10.9834 18.4009 10.9555 18.2544 10.8982C18.1078 10.8409 17.974 10.7552 17.8606 10.6462C17.7471 10.5372 17.6562 10.4069 17.5932 10.2627C17.5301 10.1186 17.496 9.96344 17.4929 9.80612C17.4897 9.6488 17.5176 9.49241 17.5749 9.34588C17.6322 9.19934 17.7179 9.06552 17.8269 8.95207C18.9693 7.76475 20.1087 7.18681 21.3125 7.18681C23.1092 7.18681 24.7966 8.51937 26.0468 10.9389C27.1029 13.0376 27.6662 15.3497 27.6938 17.699C27.6923 19.3864 27.3419 20.8388 26.6786 21.8988Z" fill="#0E1A45"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ananya-de-5552a4205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#0E1A45"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '31.14px',
              height: '31.14px',
              marginRight: '20px',
            }}
          >
       <path d="M31.4285 15.6105C31.4285 6.99348 24.4525 0 15.8571 0C7.26164 0 0.285645 6.99348 0.285645 15.6105C0.285645 23.1659 5.64222 29.4569 12.7428 30.9087V20.2936H9.6285V15.6105H12.7428V11.7078C12.7428 8.69502 15.1875 6.24418 18.1928 6.24418H22.0856V10.9273H18.9714C18.1149 10.9273 17.4142 11.6298 17.4142 12.4884V15.6105H22.0856V20.2936H17.4142V31.1429C25.2778 30.3623 31.4285 23.7123 31.4285 15.6105Z" fill="#0E1A45"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ananya-de-5552a4205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#0E1A45"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '31.14px',
              height: '31.14px',
              marginRight: '20px',
            }}
          >
        <path d="M26.9609 26.5389H22.3491V19.3125C22.3491 17.5892 22.3141 15.3716 19.946 15.3716C17.5415 15.3716 17.1742 17.2467 17.1742 19.1853V26.5389H12.5625V11.6786H16.9926V13.7042H17.0523C17.6712 12.5363 19.1765 11.3036 21.4252 11.3036C26.098 11.3036 26.9622 14.3789 26.9622 18.3821L26.9609 26.5389ZM7.35386 9.6452C7.00205 9.64537 6.65365 9.57616 6.32862 9.44153C6.00358 9.3069 5.70829 9.10948 5.45964 8.86059C5.21099 8.6117 5.01387 8.31622 4.87955 7.99106C4.74523 7.66589 4.67636 7.31743 4.67687 6.96562C4.67713 6.4359 4.83446 5.91816 5.12896 5.47786C5.42347 5.03756 5.84193 4.69448 6.33142 4.49201C6.82091 4.28953 7.35945 4.23675 7.87894 4.34035C8.39842 4.44394 8.87552 4.69925 9.24991 5.074C9.62429 5.44875 9.87914 5.9261 9.98223 6.44568C10.0853 6.96527 10.032 7.50376 9.82907 7.99305C9.62612 8.48234 9.28264 8.90047 8.84205 9.19455C8.40147 9.48863 7.88357 9.64546 7.35386 9.6452ZM9.66622 26.5389H5.0415V11.6786H9.66622V26.5389ZM29.268 0H2.72655C1.45618 0 0.428467 1.00436 0.428467 2.24358V28.8993C0.428467 30.1398 1.45618 31.1429 2.72655 31.1429H29.2642C30.5332 31.1429 31.5713 30.1398 31.5713 28.8993V2.24358C31.5713 1.00436 30.5332 0 29.2642 0H29.268Z" fill="#0E1A45"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ananya-de-5552a4205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#0E1A45"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '31.14px',
              height: '31.14px',
              marginRight: '20px',
            }}
          >
        <path d="M16.143 0C7.54753 0 0.571533 6.976 0.571533 15.5714C0.571533 24.1669 7.54753 31.1429 16.143 31.1429C24.7384 31.1429 31.7144 24.1669 31.7144 15.5714C31.7144 6.976 24.7384 0 16.143 0ZM23.3681 10.5886C23.1345 13.0489 22.1224 19.0283 21.6085 21.7844C21.3905 22.9523 20.9545 23.3416 20.5497 23.3883C19.6465 23.4661 18.9614 22.7966 18.0894 22.2204C16.7191 21.3173 15.9405 20.7567 14.617 19.8847C13.0754 18.8726 14.072 18.312 14.9595 17.4089C15.1931 17.1753 19.1794 13.5471 19.2572 13.2201C19.2681 13.1706 19.2666 13.1192 19.2531 13.0704C19.2395 13.0215 19.2142 12.9767 19.1794 12.9399C19.086 12.862 18.9614 12.8931 18.8524 12.9087C18.7122 12.9399 16.5322 14.388 12.2812 17.2531C11.6584 17.6736 11.0978 17.8916 10.5995 17.876C10.039 17.8604 8.9801 17.5646 8.18596 17.2999C7.20496 16.9884 6.44196 16.8171 6.50425 16.2721C6.53539 15.9919 6.92468 15.7116 7.65653 15.4157C12.2034 13.4381 15.2242 12.1301 16.7347 11.5073C21.0635 9.701 21.9511 9.38957 22.5428 9.38957C22.6674 9.38957 22.9632 9.42071 23.1501 9.57643C23.3058 9.701 23.3525 9.87229 23.3681 9.99686C23.3525 10.0903 23.3837 10.3706 23.3681 10.5886Z" fill="#0E1A45"/>
          </svg>
        </a>
        {/* Add the rest of the social media icons with anchor tags */}
      </div>
    </footer>
  );
};

export default Footer;