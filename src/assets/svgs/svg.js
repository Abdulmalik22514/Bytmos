import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const GetStartedArrow = () => {
  return (
    <Svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502ZM19.1187 6.98486L12.478 0.344238C12.019 -0.114746 11.2769 -0.114746 10.8228 0.344238L9.71924 1.44775C9.26025 1.90674 9.26025 2.64893 9.71924 3.10303L14.4263 7.81006L9.71924 12.5171C9.26025 12.9761 9.26025 13.7183 9.71924 14.1724L10.8228 15.2759C11.2817 15.7349 12.0239 15.7349 12.478 15.2759L19.1187 8.63525C19.5776 8.18604 19.5776 7.44385 19.1187 6.98486Z"
        fill="white"
      />
    </Svg>
  );
};

export const BackArrow = () => {
  return (
    <Svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.34363 6.98486L6.98426 0.344238C7.44324 -0.114746 8.18543 -0.114746 8.63953 0.344238L9.74304 1.44775C10.202 1.90674 10.202 2.64893 9.74304 3.10303L5.0409 7.81494L9.74793 12.522C10.2069 12.981 10.2069 13.7231 9.74793 14.1772L8.64441 15.2856C8.18543 15.7446 7.44324 15.7446 6.98914 15.2856L0.348513 8.64502C-0.115354 8.18604 -0.115354 7.44385 0.34363 6.98486Z"
        fill="black"
      />
    </Svg>
  );
};

export const MenuIcon = props => {
  return (
    <Svg
      width={props.width || '22'}
      height={props.height || '24'}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0.78125 4.86794H21.0938C21.5252 4.86794 21.875 4.45797 21.875 3.95219V1.66282C21.875 1.15704 21.5252 0.74707 21.0938 0.74707H0.78125C0.349756 0.74707 0 1.15704 0 1.66282V3.95219C0 4.45797 0.349756 4.86794 0.78125 4.86794ZM0.78125 14.0254H21.0938C21.5252 14.0254 21.875 13.6155 21.875 13.1097V10.8203C21.875 10.3145 21.5252 9.90456 21.0938 9.90456H0.78125C0.349756 9.90456 0 10.3145 0 10.8203V13.1097C0 13.6155 0.349756 14.0254 0.78125 14.0254ZM0.78125 23.1829H21.0938C21.5252 23.1829 21.875 22.7729 21.875 22.2672V19.9778C21.875 19.472 21.5252 19.062 21.0938 19.062H0.78125C0.349756 19.062 0 19.472 0 19.9778V22.2672C0 22.7729 0.349756 23.1829 0.78125 23.1829Z"
        fill="#919293"
      />
    </Svg>
  );
};

export const SearchIcon = props => {
  return (
    <Svg
      width={props.width || '27'}
      height={props.height || '32'}
      viewBox="0 0 27 32"
      fill="none"
      {...props}>
      <Path
        d="M26.6328 27.4251L21.3748 21.2619C21.1375 20.9837 20.8158 20.8292 20.4783 20.8292H19.6186C21.0742 18.647 21.9391 15.9023 21.9391 12.9165C21.9391 5.81369 17.0292 0.0584717 10.9696 0.0584717C4.90993 0.0584717 0 5.81369 0 12.9165C0 20.0194 4.90993 25.7746 10.9696 25.7746C13.5168 25.7746 15.8584 24.7608 17.72 23.0546V24.0622C17.72 24.4579 17.8519 24.8349 18.0892 25.1131L23.3472 31.2763C23.843 31.8574 24.6446 31.8574 25.135 31.2763L26.6275 29.5269C27.1233 28.9458 27.1233 28.0062 26.6328 27.4251ZM10.9696 20.8292C7.24096 20.8292 4.21906 17.2932 4.21906 12.9165C4.21906 8.54602 7.23568 5.00388 10.9696 5.00388C14.6981 5.00388 17.72 8.53984 17.72 12.9165C17.72 17.287 14.7034 20.8292 10.9696 20.8292Z"
        fill="#919293"
      />
    </Svg>
  );
};

export const BellIcon = props => {
  return (
    <Svg
      width={props.width || '25'}
      height={props.width || '35'}
      viewBox="0 0 25 35"
      fill="none"
      {...props}>
      <Path
        d="M12.5 34.3765C14.471 34.3765 16.0697 32.5025 16.0697 30.1902H8.93026C8.93026 32.5025 10.529 34.3765 12.5 34.3765ZM24.5195 24.5839C23.4414 23.226 21.4241 21.1832 21.4241 14.4917C21.4241 9.40933 18.3839 5.3408 14.2846 4.34264V2.97949C14.2846 1.82368 13.4855 0.886353 12.5 0.886353C11.5145 0.886353 10.7154 1.82368 10.7154 2.97949V4.34264C6.61609 5.3408 3.57592 9.40933 3.57592 14.4917C3.57592 21.1832 1.55863 23.226 0.480506 24.5839C0.145685 25.0058 -0.00275159 25.5101 3.85818e-05 26.004C0.00617696 27.0767 0.724367 28.0971 1.79133 28.0971H23.2087C24.2756 28.0971 24.9944 27.0767 25 26.004C25.0028 25.5101 24.8543 25.0051 24.5195 24.5839Z"
        fill="#B0B1B1"
      />
    </Svg>
  );
};

export const AccountIcon = () => {
  return (
    <Svg
      width="35"
      height="33"
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M34.125 13.3333H30.625V9.23075C30.625 8.66664 30.2313 8.20511 29.75 8.20511H28C27.5187 8.20511 27.125 8.66664 27.125 9.23075V13.3333H23.625C23.1437 13.3333 22.75 13.7948 22.75 14.3589V16.4102C22.75 16.9743 23.1437 17.4359 23.625 17.4359H27.125V21.5384C27.125 22.1025 27.5187 22.564 28 22.564H29.75C30.2313 22.564 30.625 22.1025 30.625 21.5384V17.4359H34.125C34.6063 17.4359 35 16.9743 35 16.4102V14.3589C35 13.7948 34.6063 13.3333 34.125 13.3333ZM12.25 16.4102C16.1164 16.4102 19.25 12.7371 19.25 8.20511C19.25 3.67307 16.1164 0 12.25 0C8.38359 0 5.25 3.67307 5.25 8.20511C5.25 12.7371 8.38359 16.4102 12.25 16.4102ZM17.15 18.4615H16.2367C15.0227 19.1153 13.6719 19.4871 12.25 19.4871C10.8281 19.4871 9.48281 19.1153 8.26328 18.4615H7.35C3.29219 18.4615 0 22.3205 0 27.0769V29.7435C0 31.4422 1.17578 32.8204 2.625 32.8204H21.875C23.3242 32.8204 24.5 31.4422 24.5 29.7435V27.0769C24.5 22.3205 21.2078 18.4615 17.15 18.4615Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const PackagesIcon = () => {
  return (
    <Svg
      width="33"
      height="29"
      viewBox="0 0 33 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.0625 26.8125C2.0625 27.9533 2.98418 28.875 4.125 28.875H14.4375V18.5625H2.0625V26.8125ZM18.5625 28.875H28.875C30.0158 28.875 30.9375 27.9533 30.9375 26.8125V18.5625H18.5625V28.875ZM30.9375 8.25H28.224C28.6236 7.47012 28.875 6.60645 28.875 5.67188C28.875 2.5459 26.3291 0 23.2031 0C20.5219 0 18.7881 1.37285 16.5645 4.40215C14.3408 1.37285 12.607 0 9.92578 0C6.7998 0 4.25391 2.5459 4.25391 5.67188C4.25391 6.60645 4.49883 7.47012 4.90488 8.25H2.0625C0.92168 8.25 0 9.17168 0 10.3125V15.4688C0 16.0359 0.464062 16.5 1.03125 16.5H31.9688C32.5359 16.5 33 16.0359 33 15.4688V10.3125C33 9.17168 32.0783 8.25 30.9375 8.25ZM9.91934 8.25C8.49492 8.25 7.34121 7.09629 7.34121 5.67188C7.34121 4.24746 8.49492 3.09375 9.91934 3.09375C11.202 3.09375 12.1494 3.30645 15.4688 8.25H9.91934ZM23.2031 8.25H17.6537C20.9666 3.31934 21.8883 3.09375 23.2031 3.09375C24.6275 3.09375 25.7812 4.24746 25.7812 5.67188C25.7812 7.09629 24.6275 8.25 23.2031 8.25Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const ServicesIcon = () => {
  return (
    <Svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17 0.594727C7.60887 0.594727 0 8.2036 0 17.5947C0 26.9859 7.60887 34.5947 17 34.5947C26.3911 34.5947 34 26.9859 34 17.5947C34 8.2036 26.3911 0.594727 17 0.594727ZM26.871 19.5141C26.871 19.9665 26.5008 20.3367 26.0484 20.3367H19.7419V26.6431C19.7419 27.0955 19.3718 27.4657 18.9194 27.4657H15.0806C14.6282 27.4657 14.2581 27.0955 14.2581 26.6431V20.3367H7.95161C7.49919 20.3367 7.12903 19.9665 7.12903 19.5141V15.6754C7.12903 15.223 7.49919 14.8528 7.95161 14.8528H14.2581V8.54634C14.2581 8.09392 14.6282 7.72376 15.0806 7.72376H18.9194C19.3718 7.72376 19.7419 8.09392 19.7419 8.54634V14.8528H26.0484C26.5008 14.8528 26.871 15.223 26.871 15.6754V19.5141Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const OrdersIcon = () => {
  return (
    <Svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M26.2873 19.536H11.0194L11.3603 21.4896H25.3404C26.1425 21.4896 26.737 22.3626 26.5593 23.2795L26.2719 24.7615C27.2454 25.3154 27.9167 26.4852 27.9167 27.8388C27.9167 29.7436 26.5876 31.2847 24.9571 31.2572C23.4038 31.231 22.1264 29.7535 22.0844 27.9332C22.0615 26.9389 22.4014 26.0377 22.9596 25.3967H12.0404C12.5809 26.0173 12.9167 26.8819 12.9167 27.8388C12.9167 29.7809 11.535 31.3449 9.86094 31.2538C8.37448 31.1729 7.16557 29.7651 7.08745 28.0232C7.02714 26.678 7.63099 25.4924 8.54844 24.8739L4.88974 3.90719H1.25C0.559636 3.90719 0 3.25121 0 2.442V1.4652C0 0.655981 0.559636 0 1.25 0H6.59005C7.18386 0 7.69568 0.489681 7.81469 1.17155L8.29208 3.90719H28.7495C29.5516 3.90719 30.1462 4.78027 29.9684 5.69712L27.5063 18.3955C27.3769 19.0626 26.871 19.536 26.2873 19.536ZM20.9911 11.7216H18.75V8.05859C18.75 7.65401 18.4702 7.32599 18.125 7.32599H16.875C16.5298 7.32599 16.25 7.65401 16.25 8.05859V11.7216H14.0089C13.4521 11.7216 13.1732 12.5107 13.567 12.9722L17.0581 17.0643C17.3021 17.3504 17.6979 17.3504 17.942 17.0643L21.4331 12.9722C21.8268 12.5107 21.5479 11.7216 20.9911 11.7216Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const ManageIcon = () => {
  return (
    <Svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.7 0H1.3C0.580357 0 0 0.669643 0 1.5V28.5C0 29.3304 0.580357 30 1.3 30H24.7C25.4196 30 26 29.3304 26 28.5V1.5C26 0.669643 25.4196 0 24.7 0ZM9.53527 21.6629H7.22545V8.33705H9.53527V21.6629ZM18.7804 21.6629H11.8451V18.9978H18.7804V21.6629ZM18.7804 16.3326H11.8451V13.6674H18.7804V16.3326ZM18.7804 10.9955H11.8451V8.33036H18.7804V10.9955Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const WorksIcon = () => {
  return (
    <Svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 19.2327C20 19.7919 19.5525 20.2449 19 20.2449H13C12.4475 20.2449 12 19.7919 12 19.2327V16.1959H0V25.3061C0 26.9257 1.4 28.3429 3 28.3429H29C30.6 28.3429 32 26.9257 32 25.3061V16.1959H20V19.2327ZM29 6.07347H24V3.03673C24 1.41714 22.6 0 21 0H11C9.4 0 8 1.41714 8 3.03673V6.07347H3C1.4 6.07347 0 7.49061 0 9.1102V14.1714H32V9.1102C32 7.49061 30.6 6.07347 29 6.07347ZM20 6.07347H12V4.04898H20V6.07347Z"
        fill="#444343"
      />
    </Svg>
  );
};

export const PencilIcon = props => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.1968 4.55237L20.4478 10.8033L6.87407 24.3771L1.30082 24.9923C0.554729 25.0748 -0.0756416 24.444 0.00736623 23.6979L0.627483 18.1207L14.1968 4.55237ZM24.314 3.6217L21.3789 0.686646C20.4634 -0.228882 18.9786 -0.228882 18.063 0.686646L15.3018 3.44788L21.5528 9.69885L24.314 6.93762C25.2295 6.02161 25.2295 4.53723 24.314 3.6217Z"
        fill={props.color || 'black'}
      />
    </Svg>
  );
};

export const InviteIcon = () => {
  return (
    <Svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.8107 1.66995L18.5099 17.2364C18.2609 18.335 17.6115 18.6084 16.6887 18.0908L11.6594 14.3848L9.2326 16.7188C8.96405 16.9873 8.73944 17.2119 8.22186 17.2119L8.58319 12.0899L17.9045 3.66702C18.3097 3.30569 17.8166 3.1055 17.2746 3.46683L5.75116 10.7227L0.790218 9.16995C-0.288883 8.83304 -0.308415 8.09085 1.01483 7.57327L20.4191 0.0976854C21.3176 -0.239229 22.1037 0.297881 21.8107 1.66995Z"
        fill="black"
      />
    </Svg>
  );
};

export const SettingsIcon = () => {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.8885 15.0196L20.8084 13.8184C21.0184 12.6856 21.0184 11.5235 20.8084 10.3907L22.8885 9.1895C23.1277 9.05278 23.2352 8.76958 23.157 8.50591C22.615 6.76762 21.6922 5.19536 20.4861 3.88676C20.3006 3.68657 19.9979 3.63774 19.7635 3.77446L17.6834 4.97563C16.8094 4.22368 15.8035 3.64262 14.7147 3.26176V0.864303C14.7147 0.590866 14.5242 0.351608 14.2557 0.293014C12.4637 -0.107376 10.6277 -0.0878449 8.92364 0.293014C8.65508 0.351608 8.46465 0.590866 8.46465 0.864303V3.26665C7.38067 3.65239 6.37481 4.23344 5.4959 4.98051L3.42071 3.77934C3.18145 3.64262 2.8836 3.68657 2.69805 3.89165C1.492 5.19536 0.569146 6.76762 0.0271543 8.51079C-0.0558535 8.77446 0.0564511 9.05766 0.295709 9.19438L2.37579 10.3956C2.16583 11.5284 2.16583 12.6905 2.37579 13.8233L0.295709 15.0245C0.0564511 15.1612 -0.0509707 15.4444 0.0271543 15.7081C0.569146 17.4463 1.492 19.0186 2.69805 20.3272C2.8836 20.5274 3.18633 20.5762 3.42071 20.4395L5.50079 19.2383C6.37481 19.9903 7.38067 20.5713 8.46954 20.9522V23.3545C8.46954 23.628 8.65997 23.8672 8.92852 23.9258C10.7205 24.3262 12.5565 24.3067 14.2606 23.9258C14.5291 23.8672 14.7195 23.628 14.7195 23.3545V20.9522C15.8035 20.5665 16.8094 19.9854 17.6883 19.2383L19.7684 20.4395C20.0076 20.5762 20.3055 20.5323 20.491 20.3272C21.6971 19.0235 22.6199 17.4512 23.1619 15.7081C23.2352 15.4395 23.1277 15.1563 22.8885 15.0196ZM11.5897 16.0108C9.43633 16.0108 7.6834 14.2579 7.6834 12.1045C7.6834 9.95122 9.43633 8.19829 11.5897 8.19829C13.743 8.19829 15.4959 9.95122 15.4959 12.1045C15.4959 14.2579 13.743 16.0108 11.5897 16.0108Z"
        fill="black"
      />
    </Svg>
  );
};

export const HelpIcon = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.2188 12.1094C24.2188 18.7987 18.7967 24.2188 12.1094 24.2188C5.42202 24.2188 0 18.7987 0 12.1094C0 5.42397 5.42202 0 12.1094 0C18.7967 0 24.2188 5.42397 24.2188 12.1094ZM12.1094 14.5508C10.8689 14.5508 9.86328 15.5564 9.86328 16.7969C9.86328 18.0374 10.8689 19.043 12.1094 19.043C13.3499 19.043 14.3555 18.0374 14.3555 16.7969C14.3555 15.5564 13.3499 14.5508 12.1094 14.5508ZM9.9769 6.47725L10.3391 13.1179C10.3561 13.4286 10.613 13.6719 10.9242 13.6719H13.2946C13.6058 13.6719 13.8627 13.4286 13.8796 13.1179L14.2418 6.47725C14.2602 6.1416 13.9929 5.85938 13.6568 5.85938H10.5619C10.2258 5.85938 9.95859 6.1416 9.9769 6.47725Z"
        fill="black"
      />
    </Svg>
  );
};

export const LogoutIcon = () => {
  return (
    <Svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.2676 10.2061L16.0645 18.4092C15.332 19.1417 14.0625 18.629 14.0625 17.5792V12.8917H7.42188C6.77246 12.8917 6.25 12.3692 6.25 11.7198V7.03229C6.25 6.38287 6.77246 5.86041 7.42188 5.86041H14.0625V1.17291C14.0625 0.127992 15.3271 -0.389587 16.0645 0.342835L24.2676 8.54596C24.7217 9.00494 24.7217 9.74713 24.2676 10.2061ZM9.375 18.1651V16.212C9.375 15.8897 9.11133 15.626 8.78906 15.626H4.6875C3.82324 15.626 3.125 14.9278 3.125 14.0635V4.68854C3.125 3.82428 3.82324 3.12604 4.6875 3.12604H8.78906C9.11133 3.12604 9.375 2.86237 9.375 2.5401V0.586976C9.375 0.26471 9.11133 0.0010385 8.78906 0.0010385H4.6875C2.09961 0.0010385 0 2.10065 0 4.68854V14.0635C0 16.6514 2.09961 18.751 4.6875 18.751H8.78906C9.11133 18.751 9.375 18.4874 9.375 18.1651Z"
        fill="black"
      />
    </Svg>
  );
};

export const HomeIcon = () => {
  return (
    <Svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.142 6.94886L4.50036 15.2916V24.2958C4.50036 24.529 4.57937 24.7526 4.72001 24.9174C4.86065 25.0823 5.0514 25.1749 5.2503 25.1749L10.5027 25.159C10.701 25.1578 10.8907 25.0647 11.0306 24.8999C11.1704 24.7352 11.2489 24.5123 11.2489 24.2799V19.0215C11.2489 18.7884 11.3279 18.5648 11.4686 18.3999C11.6092 18.2351 11.7999 18.1425 11.9988 18.1425H14.9986C15.1975 18.1425 15.3883 18.2351 15.5289 18.3999C15.6695 18.5648 15.7486 18.7884 15.7486 19.0215V24.2761C15.7482 24.3917 15.7674 24.5063 15.805 24.6133C15.8425 24.7203 15.8977 24.8175 15.9674 24.8994C16.037 24.9813 16.1198 25.0463 16.211 25.0907C16.3021 25.135 16.3998 25.1579 16.4985 25.1579L21.749 25.1749C21.9479 25.1749 22.1387 25.0823 22.2793 24.9174C22.42 24.7526 22.499 24.529 22.499 24.2958V15.2856L13.8592 6.94886C13.7576 6.8529 13.6311 6.80056 13.5006 6.80056C13.3701 6.80056 13.2436 6.8529 13.142 6.94886ZM26.7924 12.6193L22.8739 8.83333V1.2235C22.8739 1.04864 22.8147 0.880951 22.7092 0.75731C22.6037 0.63367 22.4607 0.564209 22.3115 0.564209H19.6867C19.5375 0.564209 19.3944 0.63367 19.289 0.75731C19.1835 0.880951 19.1242 1.04864 19.1242 1.2235V5.21274L14.9278 1.16581C14.5251 0.777367 14.0198 0.564985 13.4983 0.564985C12.9767 0.564985 12.4714 0.777367 12.0687 1.16581L0.204124 12.6193C0.14717 12.6745 0.100049 12.7423 0.065454 12.8188C0.0308591 12.8953 0.00946838 12.9791 0.00250394 13.0653C-0.00446049 13.1516 0.00313788 13.2385 0.0248649 13.3213C0.0465919 13.4041 0.0820218 13.4811 0.12913 13.5478L1.32435 15.251C1.37133 15.3179 1.42912 15.3734 1.4944 15.4141C1.55968 15.4549 1.63118 15.4801 1.7048 15.4884C1.77842 15.4967 1.85272 15.488 1.92344 15.4626C1.99416 15.4372 2.05992 15.3957 2.11695 15.3405L13.142 4.6963C13.2436 4.60033 13.3701 4.548 13.5006 4.548C13.6311 4.548 13.7576 4.60033 13.8592 4.6963L24.8847 15.3405C24.9417 15.3957 25.0073 15.4373 25.0779 15.4627C25.1486 15.4882 25.2228 15.4971 25.2963 15.4889C25.3699 15.4808 25.4414 15.4557 25.5067 15.4151C25.5719 15.3746 25.6298 15.3194 25.6769 15.2526L26.8721 13.5494C26.9191 13.4823 26.9544 13.405 26.9759 13.3218C26.9974 13.2387 27.0046 13.1514 26.9972 13.0649C26.9898 12.9785 26.9679 12.8946 26.9327 12.8182C26.8976 12.7417 26.8499 12.6741 26.7924 12.6193Z"
        fill="black"
      />
    </Svg>
  );
};

export const BackIcon = props => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.5757 19.895L11.4917 20.979C11.0327 21.438 10.2905 21.438 9.83643 20.979L0.344238 11.4917C-0.114746 11.0327 -0.114746 10.2905 0.344238 9.83643L9.83643 0.344238C10.2954 -0.114746 11.0376 -0.114746 11.4917 0.344238L12.5757 1.42822C13.0395 1.89209 13.0298 2.64893 12.5562 3.10303L6.67236 8.7085H20.7056C21.355 8.7085 21.8774 9.23096 21.8774 9.88037V11.4429C21.8774 12.0923 21.355 12.6147 20.7056 12.6147H6.67236L12.5562 18.2202C13.0347 18.6743 13.0444 19.4312 12.5757 19.895Z"
        fill="#919293"
      />
    </Svg>
  );
};

export const CameraIcon = props => {
  return (
    <Svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="23" cy="23" r="23" fill="white" />
      <Circle cx="23.5" cy="22.5" r="20.5" fill="#F4F2F2" />
      <Path
        d="M36 16.6875V31.3125C36 32.6582 34.9082 33.75 33.5625 33.75H12.4375C11.0918 33.75 10 32.6582 10 31.3125V16.6875C10 15.3418 11.0918 14.25 12.4375 14.25H16.9062L17.5309 12.5793C17.8863 11.6297 18.7953 11 19.8109 11H26.184C27.1996 11 28.1086 11.6297 28.4641 12.5793L29.0938 14.25H33.5625C34.9082 14.25 36 15.3418 36 16.6875ZM29.0938 24C29.0938 20.6383 26.3617 17.9062 23 17.9062C19.6383 17.9062 16.9062 20.6383 16.9062 24C16.9062 27.3617 19.6383 30.0938 23 30.0938C26.3617 30.0938 29.0938 27.3617 29.0938 24ZM27.4688 24C27.4688 26.4629 25.4629 28.4688 23 28.4688C20.5371 28.4688 18.5312 26.4629 18.5312 24C18.5312 21.5371 20.5371 19.5312 23 19.5312C25.4629 19.5312 27.4688 21.5371 27.4688 24Z"
        fill="#00709E"
      />
    </Svg>
  );
};

export const DropDown = () => {
  return (
    <Svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z"
        fill="#969595"
      />
    </Svg>
  );
};
