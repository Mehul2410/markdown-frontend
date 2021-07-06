import React from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import { API_URL } from "../../config";

const SignIn = ({ signup }) => {
  const [email, setEmail] = React.useState<string | number>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState("");

  const SignInForm = async (e) => {
    e.preventDefault();
    const signInInfo = {
      identifier: email,
      password: password,
    };
    try {
      const response = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInInfo),
      });
      const loginresponse = await response.json();
      if (loginresponse.jwt == undefined) {
        setError("You have entered invalid email or password");
      } else {
        setCookie(null, "jwt", loginresponse.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        Router.push("/");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setPassword("");
      setError("Something went wrong try again");
    }
  };

  return (
    <div className="w-5/6 h-5/6 bg-custom1 rounded-lg m-auto drop-shadow-x grid grid-cols-2 md:grid-cols-1 md:w-full md:h-full">
      <div className="h-full rounded-l-lg bg-gray-100 flex justify-center items-center md:hidden">
        <svg
          className="object-contain w-10/12"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M94.1 76.2998V83.3998"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M94.1 97.2997V90.1997"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M104.7 86.7998H97.5"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M83.6 86.7998H90.8"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M292.1 101.3V108.4"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M292.1 122.3V115.2"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M302.6 111.8H295.5"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M281.6 111.8H288.7"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M59.5 385.2V392.3"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M59.5 406.2V399.1"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M70 395.7H62.9"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M49 395.7H56.1"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.8 152.4C76.6719 152.4 79 150.072 79 147.2C79 144.328 76.6719 142 73.8 142C70.9281 142 68.6 144.328 68.6 147.2C68.6 150.072 70.9281 152.4 73.8 152.4Z"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M246.7 390.3C249.572 390.3 251.9 387.972 251.9 385.1C251.9 382.228 249.572 379.9 246.7 379.9C243.828 379.9 241.5 382.228 241.5 385.1C241.5 387.972 243.828 390.3 246.7 390.3Z"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M540.7 37.6001L551 42.6001L481.8 540.2H472.2L540.7 37.6001Z"
            fill="#ECBDBB"
          />
          <path
            d="M407 54.8002L374.9 540.3H472.2L540.6 37.7002L407 54.8002ZM470.8 86.3002C470 86.5002 469.3 86.7002 468.5 86.7002C461.6 87.4002 456.2 82.2002 456.6 75.1002C457 68.0002 462.9 61.8002 469.8 61.1002C471.4 60.9002 473 61.1002 474.4 61.5002C478.9 62.9002 482 67.2002 481.7 72.6002C481.4 79.0002 476.7 84.6002 470.8 86.3002Z"
            fill="#1D2538"
          />
          <path
            d="M470.8 86.2999C470 86.5 469.3 86.6999 468.5 86.6999C461.6 87.3999 456.2 82.1999 456.6 75.0999C457 67.9999 462.9 61.7999 469.8 61.0999C471.4 60.8999 473 61.0999 474.4 61.4999C468.5 63.1999 463.8 68.7999 463.5 74.9999C463.2 80.5999 466.3 84.9 470.8 86.2999Z"
            fill="#ECBDBB"
          />
          <path
            d="M435.9 71.7999C435.7 70.0999 434.2 68.8999 432.5 69.0999L405.8 72.1999L405.4 78.3999L433.2 75.1999C434.9 74.9999 436.1 73.3999 435.9 71.7999Z"
            fill="#ECBDBB"
          />
          <path
            d="M432 127.7C431.8 126 430.3 124.8 428.6 125L402.2 127.8L401.8 134L429.3 131.1C431 130.9 432.2 129.4 432 127.7Z"
            fill="#ECBDBB"
          />
          <path
            d="M428.1 183.6C427.9 181.9 426.4 180.7 424.7 180.8L398.5 183.3L398.1 189.5L425.3 186.9C427 186.8 428.2 185.3 428.1 183.6Z"
            fill="#ECBDBB"
          />
          <path
            d="M424.2 239.6C424.1 237.9 422.6 236.7 420.9 236.8L394.9 239L394.5 245.2L421.5 242.9C423.1 242.7 424.3 241.3 424.2 239.6Z"
            fill="#ECBDBB"
          />
          <path
            d="M420.3 295.5C420.2 293.8 418.7 292.5 417 292.7L391.2 294.6L390.8 300.8L417.5 298.9C419.1 298.7 420.4 297.2 420.3 295.5Z"
            fill="#ECBDBB"
          />
          <path
            d="M416.3 351.4C416.2 349.7 414.7 348.4 413 348.5L387.4 350.1L387 356.3L413.4 354.7C415.2 354.6 416.5 353.1 416.3 351.4Z"
            fill="#ECBDBB"
          />
          <path
            d="M412.4 407.4C412.3 405.7 410.9 404.4 409.2 404.5L383.8 405.8L383.4 412L409.5 410.7C411.2 410.5 412.5 409.1 412.4 407.4Z"
            fill="#ECBDBB"
          />
          <path
            d="M408.5 463.3C408.4 461.6 407 460.3 405.3 460.3L380.1 461.3L379.7 467.5L405.6 466.5C407.3 466.4 408.6 465 408.5 463.3Z"
            fill="#ECBDBB"
          />
          <path
            d="M404.6 519.2C404.6 517.5 403.1 516.2 401.4 516.2L376.4 516.9L376 523.1L401.6 522.4C403.3 522.4 404.7 520.9 404.6 519.2Z"
            fill="#ECBDBB"
          />
          <path
            d="M340.1 333.5C340.1 333.5 328.2 306.2 294.5 300.7C260.8 295.2 244.1 318.3 244.1 318.3C244.1 318.3 261.2 320.7 281.4 336.4C301.6 352 323 355.1 340.1 333.5Z"
            fill="#404B7C"
          />
          <path
            d="M380.7 220.1C380.7 220.1 359.8 186.8 318 206.6C318 206.6 331.5 214.2 348.9 226.6C366.2 238.9 380.7 220.1 380.7 220.1Z"
            fill="#404B7C"
          />
          <path
            d="M349.1 151.2C349.1 151.2 349.4 159.1 342.3 158.2C336.3 157.4 335.5 136.8 352.6 135.4C370.1 134 386.9 162 377.8 218C368.8 274.1 331.3 305.6 333.8 376.7C336.3 447.8 357.1 474.9 344.3 537.3H368.8C368.8 537.3 373.2 487.3 357 430.3C337.6 362 351.3 326.9 373 271C398 206.6 394.5 148.7 366.9 135.1C341.2 122.4 327.5 148.2 331 161.2C334.6 174.3 353 174.4 355.7 164.3C358.5 154.2 349.1 151.2 349.1 151.2Z"
            fill="#040844"
          />
          <path
            d="M347.7 338.5C347.7 338.5 355.3 299.3 393.8 280C432.3 260.7 468.7 286.2 468.7 286.2C468.7 286.2 452.8 330.2 411.9 332.5C377.5 334.5 358.6 333.5 347.7 338.5Z"
            fill="#404B7C"
          />
          <path
            d="M386.4 218.7C386.4 218.7 397.1 162.4 461.3 172.8C461.3 172.8 454.4 184.4 448.2 197.8C443.1 208.8 415.7 236.5 386.4 218.7Z"
            fill="#404B7C"
          />
          <path
            d="M333.4 541.2C333.4 541.2 329.1 522 315.1 510.3C315.1 510.3 332.9 513.5 340.5 537.3C340.5 537.3 339.9 528.7 339.7 526.7C339.5 524.7 345 531.2 346.8 536.8C346.8 536.8 347.5 517.1 337.5 505.6C337.5 505.6 356.3 509.3 362.3 535.9C362.3 535.9 363.8 521.7 373.4 514.1C373.4 514.1 370.5 525.5 370.4 534.9C370.4 534.9 379 510.3 400.4 497.5C400.4 497.5 388.6 516.5 385.8 534.5C385.8 534.5 387.5 531.4 394.4 528.1C394.4 528.1 390.6 532.9 388 541.3H333.4V541.2Z"
            fill="#404B7C"
          />
          <path
            d="M195.7 562.4H348.2"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M168.9 562.4H184.9"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M363.8 562.4H379.7"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M321.4 541.2H496"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M269.4 541.2H300.4"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M129.7 541.2H233.8"
            stroke="#404B7C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M268.9 188.9C268.9 188.9 261.9 184.3 258.6 183.6C255.3 182.9 247.3 198.5 247.3 198.5L242.8 194.2C242.8 194.2 251.9 177.3 257.8 177.3C263.7 177.3 271.5 183.1 271.5 183.1L268.9 188.9Z"
            fill="#404B7C"
          />
          <path
            d="M200.2 175.3C209.2 182.3 221.3 220.5 221.3 220.5C221.3 220.5 227.6 216.8 236.1 221.2C244.5 225.6 251.3 235.7 241.5 260.8C231.7 285.9 216 289.9 201.4 281C186.7 272 177.4 235.2 176.6 210.1C175.2 169.2 200.2 175.3 200.2 175.3Z"
            fill="#1D2538"
          />
          <path
            d="M221.3 220.5C221.3 220.5 216 224.4 210.9 238.8"
            stroke="#ECBDBB"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M227.7 210.8C227.3 210.7 221.9 222.5 221.9 222.5C221.9 222.5 224.6 227.3 234.4 230.8C242.2 233.6 244.5 232.9 244.5 232.9L248.7 221.1C248.6 221 243.9 213.5 227.7 210.8Z"
            fill="#404B7C"
          />
          <path
            d="M229 213.2L233.8 197.1C233.8 197.1 238.8 179.4 240.2 177.3C241.6 175.2 252.2 174.1 254.7 175.1C257.2 176.1 255 180.5 249.3 182.6C249.3 182.6 257.5 183.9 260.3 186.8C263.1 189.7 260.6 192.7 258.9 194.1C258.9 194.1 260.9 197.8 256.4 200.6C256.4 200.6 258.1 204.3 253.9 207C253.9 207 254.7 211.6 248.1 211.3L245.3 220.3C245.2 220.2 235.4 219.7 229 213.2Z"
            fill="#ECBDBB"
          />
          <path
            d="M247.9 184.2C247.9 184.2 243.5 185.3 245.7 189.6C245.7 189.6 241.7 192.4 244.4 196C244.4 196 240.1 199.3 244.1 202.7C244.1 202.7 239.9 205.1 243.6 208.7"
            stroke="#404B7C"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M301.3 208.3L277.3 259.2C277.3 259.2 270.2 267.8 249.3 261.8C228.4 255.9 229.7 229.2 229.7 229.2L271.8 172C271.8 172 282.3 164.5 295 177.5C307.5 190.2 301.5 207.7 301.3 208.3Z"
            fill="#404B7C"
          />
          <path
            d="M239 255.9C228.9 246 229.7 229.2 229.7 229.2L267.2 178.2"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M270.2 235.3C270.2 235.3 262.4 238.2 260.9 246.2C259.5 254.2 266.8 256.7 266.8 256.7L299.1 248.7L312.8 256.7L302.6 231L296.9 238L270.2 235.3Z"
            fill="#404B7C"
          />
          <path
            d="M296.8 239.2C296.8 239.2 295.6 242.9 298.3 246.6"
            stroke="#404B7C"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M302.6 231C302.6 231 300.6 235.6 301.7 242.1C302.9 248.6 312.7 256.6 312.7 256.6C312.7 256.6 315.6 251 314.7 242.8C313.8 234.7 302.6 231 302.6 231Z"
            fill="#404B7C"
          />
          <path
            d="M305.431 237.142C305.747 237.045 305.859 236.495 305.681 235.914C305.502 235.334 305.101 234.942 304.784 235.039C304.467 235.137 304.355 235.687 304.534 236.267C304.712 236.848 305.114 237.24 305.431 237.142Z"
            fill="#404B7C"
          />
          <path
            d="M311.386 250.906C311.684 250.761 311.71 250.201 311.444 249.655C311.179 249.108 310.722 248.783 310.424 248.928C310.126 249.072 310.1 249.633 310.365 250.179C310.631 250.726 311.088 251.051 311.386 250.906Z"
            fill="#404B7C"
          />
          <path
            d="M305.289 244.411C305.587 244.266 305.613 243.705 305.348 243.159C305.082 242.613 304.625 242.287 304.327 242.432C304.029 242.577 304.003 243.137 304.268 243.684C304.534 244.23 304.991 244.556 305.289 244.411Z"
            fill="#404B7C"
          />
          <path
            d="M312.311 241.896C312.609 241.751 312.635 241.191 312.369 240.644C312.104 240.098 311.647 239.773 311.349 239.917C311.051 240.062 311.025 240.623 311.29 241.169C311.556 241.715 312.013 242.041 312.311 241.896Z"
            fill="#404B7C"
          />
          <path
            d="M308.887 243.381C309.185 243.236 309.211 242.676 308.945 242.129C308.68 241.583 308.223 241.257 307.925 241.402C307.627 241.547 307.6 242.107 307.866 242.654C308.132 243.2 308.589 243.526 308.887 243.381Z"
            fill="#404B7C"
          />
          <path
            d="M301.3 208.3C300.2 208.6 287.1 211.2 276.3 197.4C275.6 196.5 274.9 195.6 274.4 194.7C266.3 182.2 271.3 172.8 271.8 172C271.8 172 282.3 164.5 295 177.5C296.2 178.7 297.2 179.9 298.1 181.2C306.5 193.3 301.5 207.8 301.3 208.3Z"
            fill="#404B7C"
          />
          <path
            d="M301.3 208.3C300.2 208.6 287.1 211.2 276.3 197.4C275.6 196.5 274.9 195.6 274.4 194.7C274.4 194.7 282.1 181.6 298.1 181.1C299.8 181 301.7 181.1 303.6 181.4C303.6 181.4 308 194.2 301.3 208.3Z"
            fill="#404B7C"
          />
          <path
            d="M299.8 208.5C295.9 208.9 285.3 208.9 276.4 197.4C275.7 196.5 275 195.6 274.5 194.7"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M311.8 233C311.8 233 352.1 230.3 367.1 271.1"
            stroke="#040844"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="9 9"
          />
          <path
            d="M315.6 255.9C315.6 255.9 338.6 276.1 343.2 319.5"
            stroke="#040844"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="9 9"
          />
          <path
            d="M318 245.1C318 245.1 350 254.7 357.4 290.7"
            stroke="#040844"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="9 9"
          />
          <path
            d="M158.3 483.7C158.3 483.7 168.6 489.3 168.8 489C168.9 488.8 174.3 480.7 177.2 476.4C178.3 474.8 179 473.7 179 473.7L166.3 467.2L162 476L158.3 483.7Z"
            fill="#ECBDBB"
          />
          <path
            d="M166.2 467.2L162 476C169.2 477.7 174.4 477 177.2 476.4C178.3 474.8 179 473.7 179 473.7L166.2 467.2Z"
            fill="#404B7C"
          />
          <path
            d="M175.8 481.2C175.8 481.2 191.3 497.6 193.7 497.9C196 498.3 206.7 500.5 206.7 500.5L210.9 517.7C210.9 517.7 170.5 518.4 149.6 514C149.8 502.5 152.8 489.2 158.4 480.4C163.5 482.1 169.4 482.4 175.8 481.2Z"
            fill="#404B7C"
          />
          <path
            d="M188.2 503.7C188.4 503.7 188.6 503.6 188.8 503.4C189 503.1 188.9 502.7 188.6 502.5C175.1 494.7 168.5 483.7 168.4 483.6C168.2 483.3 167.8 483.2 167.5 483.4C167.2 483.6 167.1 484 167.3 484.3C167.4 484.4 174.2 495.8 188 503.7C188 503.6 188.1 503.7 188.2 503.7Z"
            fill="#040844"
          />
          <path
            d="M197.3 497.1C197.3 497.1 221.4 496.7 215.4 526.2C215.4 526.2 174.4 526.3 147.9 521.3L148.3 512.3C148.3 512.3 170.4 515.5 185.5 515.3C185.4 515.3 188.6 501.6 197.3 497.1Z"
            fill="#1D2538"
          />
          <path
            d="M162.1 507.7C165.855 507.7 168.9 504.029 168.9 499.5C168.9 494.972 165.855 491.3 162.1 491.3C158.344 491.3 155.3 494.972 155.3 499.5C155.3 504.029 158.344 507.7 162.1 507.7Z"
            fill="#EEEEEE"
          />
          <path
            d="M193.7 458.9C193.7 458.9 188.3 470.3 181.1 477.5C181.1 477.5 173.2 475.6 166.9 471.9C160.6 468.2 158.5 464.4 158.5 464.4L166.3 446.6C176.9 447.3 186.1 451.2 193.7 458.9Z"
            fill="#040844"
          />
          <path
            d="M219.2 409.1C203.6 435.5 188 460.8 188 460.8C188 460.8 174.3 459 168 451.3C168 451.3 174.1 423.5 182.2 400.2C174.5 394 170.7 391.1 162.9 384.9C157.2 380.4 151.9 376.3 147.7 373C141.7 368.4 137.9 365.4 137.9 365.4L109.8 332.2C84.8 302.3 121.4 262.8 141.7 282.7C141.7 282.7 191.7 340.6 212.7 368.5C214.2 370.5 215.9 372.8 217.6 375.1C224.9 385 225.5 398.4 219.2 409.1Z"
            fill="#404B7C"
          />
          <path
            d="M144.1 353.8L193.7 398.7L175 450.3"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M207.9 374.8C219.6 373.8 226.4 405.8 209.1 409.8C191.8 413.8 192.5 376.1 207.9 374.8Z"
            fill="#040844"
          />
          <path
            d="M78.1 501L89.8 505.8L97.2 494.5L100.2 490L85.2 484.2L81.4 493.1L78.1 501Z"
            fill="#ECBDBB"
          />
          <path
            d="M81.4 493.1C86.9 494.6 92.3 494.9 97.2 494.4L100.1 489.9L85.1 484.1L81.4 493.1Z"
            fill="#404B7C"
          />
          <path
            d="M95.8 498.9C95.8 498.9 86 494.2 77.2 497.8C77.2 497.8 72.3 506.6 70.6 521.9C70.6 521.9 76.7 541.3 90.1 542.8C103.5 544.3 114.2 541 114.2 541C114.2 541 105.3 520.1 103.8 516.1C102.4 512.2 95.8 498.9 95.8 498.9Z"
            fill="#404B7C"
          />
          <path
            d="M90.7 526.1C93.8 526.1 100 525.7 101.9 522.9C102.6 521.8 102.7 520.5 102 518.9C98.8 512 95.2 501.3 95.1 501.2C95 500.9 94.6 500.7 94.3 500.8C94 500.9 93.8 501.3 93.9 501.6C93.9 501.7 97.6 512.5 100.8 519.4C101.3 520.5 101.3 521.4 100.8 522.1C99.2 524.5 92.4 524.8 89.5 524.7C88.6 522.7 84.1 512.2 82.5 501.5C82.4 501.1 82.1 500.9 81.8 501C81.4 501.1 81.2 501.4 81.3 501.7C83.2 513.7 88.5 525.5 88.6 525.6C88.7 525.8 88.9 526 89.2 526C89.3 526.1 89.9 526.1 90.7 526.1Z"
            fill="#040844"
          />
          <path
            d="M79.075 512.775C79.8882 508.938 79.3649 505.578 77.9061 505.269C76.4473 504.959 74.6054 507.819 73.7921 511.655C72.9789 515.491 73.5022 518.851 74.961 519.161C76.4198 519.47 78.2617 516.611 79.075 512.775Z"
            fill="#EEEEEE"
          />
          <path
            d="M106.6 516.3C106.6 516.3 125.8 528.1 116.8 551.8C116.8 551.8 93.3 555.3 84.2 551.1C75.1 546.9 69.1 529.1 69.1 529.1C69.1 529.1 69.4 523.9 70.5 520.6C70.5 520.6 75.7 530.4 82.6 536.4C82.7 536.5 84 513 106.6 516.3Z"
            fill="#1D2538"
          />
          <path
            d="M115.9 476.6C115.9 476.6 104.5 465.2 87.0999 465.5L79.7999 484.5C79.7999 484.5 89.0999 492.3 101.6 493.2L115.9 476.6Z"
            fill="#040844"
          />
          <path
            d="M145.3 436C130.8 454.4 117 471.3 111.8 477.8C108.8 477.6 97.6 476.2 88.3 468.7C92.5 459.5 102.3 430.8 110 413.3C94.3 384.8 61.8 333.3 61.8 333.3C48.3 280.3 97.3 255.8 115.5 281.2C115.5 281.2 134.3 319.6 144.8 356.5C147.7 366.7 151 381.6 154.4 398C157.1 411.3 153.8 425.2 145.3 436Z"
            fill="#404B7C"
          />
          <path
            d="M76.4 301.1L74 319C73.1 325.4 74.7 332 78.4 337.3C88.6 352.3 110.2 385.2 121.2 411.2L97 468.9"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M115.6 281.1C115.6 281.1 134.4 319.5 144.9 356.4C146.2 360.9 147.6 366.5 149 372.6"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M142.2 319.4L148.1 338.7C148.9 341.2 148.4 343.9 146.8 346L143.2 350.8"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M143.1 395.7C155 396.9 155.9 430 137.9 430.8C119.9 431.6 127.4 394.2 143.1 395.7Z"
            fill="#040844"
          />
          <path
            d="M169 155.5C169 155.5 184.3 162.4 200.2 175.3C180.6 221.5 172.7 269.9 178.5 318.7C178.5 318.7 160 334.5 115.5 329C73.2001 323.8 56.3 298.1 56.3 298.1C56.3 298.1 67.3001 186.5 117.3 158.1C117.3 158.2 146.8 147.5 169 155.5Z"
            fill="#1D2538"
          />
          <path
            d="M198.6 179.2C190.9 198 185.1 217.3 181.4 236.7"
            stroke="#ECBDBB"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M157.6 165.1L149.8 191.6C149.4 193.1 150.2 194.7 151.7 195.2L154.6 196.2C156.2 196.8 158 195.8 158.4 194.2L165.4 167.5L157.6 165.1Z"
            stroke="#ECBDBB"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M64.2001 293.5C64.2001 293.5 112.2 337.6 172.8 311.7"
            stroke="#ECBDBB"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M169.3 147.9C173 149 177 152.2 179 154C179.8 154.7 180.1 155.9 179.7 156.9L175.1 168C175.1 168 168.3 172.2 160.6 169C152.9 165.8 150.9 159.4 150.9 159.4L153.6 148C153.8 147 154.7 146.2 155.8 146.1C158.1 145.8 162.5 145.9 169.3 147.9Z"
            fill="#404B7C"
          />
          <path
            d="M168.1 136.5L165.9 141.2L160.7 152.4C160.9 152.6 161.1 152.7 161.4 152.9C165.3 155.6 169.4 156.6 172.5 156.8L173.9 150.2L175.8 141L168.1 136.5Z"
            fill="#ECBDBB"
          />
          <path
            d="M168.1 136.5L165.9 141.2C167 143.9 169.3 147.1 173.8 150.2L175.7 141L168.1 136.5Z"
            fill="#404B7C"
          />
          <path
            d="M164 155.1C167.2 156.6 170.2 157.2 172.5 157.4C172.9 157.4 173.3 157.4 173.6 157.5C176 157.6 177.7 157.3 177.7 157.3C178.1 157.2 178.3 156.9 178.2 156.5C178.1 156.2 177.8 155.9 177.4 156C177.4 156 175.9 156.3 173.6 156.2C173.3 156.2 172.9 156.2 172.5 156.1C169.7 155.9 165.6 155.1 161.7 152.3C161.5 152.1 161.3 152 161.1 151.8C159.5 150.6 158 149.1 156.7 147.4C156.5 147.1 156.1 147.1 155.8 147.3C155.5 147.5 155.5 147.9 155.7 148.2C157.1 150 158.6 151.6 160.3 152.9C160.5 153.1 160.7 153.2 161 153.4C162 154.1 163 154.6 164 155.1Z"
            fill="#040844"
          />
          <path
            d="M189.9 108C201.4 114.9 191.2 144.2 187.4 147.7C183.6 151.2 167.6 140.8 165.5 138.1C163.4 135.4 164.8 124.1 166.9 117.3C169 110.5 176.5 100 189.9 108Z"
            fill="#ECBDBB"
          />
          <path
            d="M183.3 136.4H183.4C183.5 136.4 186.3 137.1 187.8 135C188 134.8 188 134.5 187.8 134.2C186.4 132.2 186 128.1 186 128.1C186 127.7 185.7 127.5 185.3 127.5C184.9 127.5 184.7 127.8 184.7 128.2C184.7 128.4 185.1 132.2 186.5 134.6C185.4 135.6 183.7 135.2 183.7 135.2C183.4 135.1 183 135.3 182.9 135.7C182.9 136 183 136.3 183.3 136.4Z"
            fill="#404B7C"
          />
          <path
            d="M178 139.6C181.4 141.2 184.1 140.9 184.3 140.9C184.7 140.9 184.9 140.5 184.9 140.2C184.9 139.8 184.5 139.6 184.2 139.6C184.2 139.6 180.5 140.1 176.7 137.3C176.4 137.1 176 137.2 175.8 137.4C175.6 137.7 175.7 138.1 175.9 138.3C176.6 138.8 177.3 139.2 178 139.6Z"
            fill="#404B7C"
          />
          <path
            d="M182.2 122.9C182.2 122.9 182.5 120.3 182 119.7C181.5 119.1 181.2 120.3 181.2 120.3C181.2 120.3 176.3 118.3 174.8 123.3C174.6 123.3 177.4 121 182.2 122.9Z"
            fill="#404B7C"
          />
          <path
            d="M188.1 124C188.1 124 188.5 121.4 189 120.9C189.5 120.4 189.5 121.6 189.5 121.6C189.5 121.6 193.5 120.3 193.6 125.4C193.6 125.4 192.1 122.7 188.1 124Z"
            fill="#404B7C"
          />
          <path
            d="M181.48 128.197C181.716 126.836 181.026 125.58 179.938 125.391C178.85 125.202 177.776 126.151 177.539 127.511C177.302 128.871 177.993 130.128 179.081 130.317C180.169 130.506 181.243 129.557 181.48 128.197Z"
            fill="#404B7C"
          />
          <path
            d="M180.5 128.1C180.887 128.1 181.2 127.787 181.2 127.4C181.2 127.014 180.887 126.7 180.5 126.7C180.113 126.7 179.8 127.014 179.8 127.4C179.8 127.787 180.113 128.1 180.5 128.1Z"
            fill="white"
          />
          <path
            d="M191.91 129.536C192.147 128.176 191.457 126.92 190.368 126.73C189.28 126.541 188.206 127.49 187.97 128.85C187.733 130.211 188.423 131.467 189.511 131.656C190.6 131.846 191.674 130.896 191.91 129.536Z"
            fill="#404B7C"
          />
          <path
            d="M190.9 129.5C191.287 129.5 191.6 129.187 191.6 128.8C191.6 128.413 191.287 128.1 190.9 128.1C190.513 128.1 190.2 128.413 190.2 128.8C190.2 129.187 190.513 129.5 190.9 129.5Z"
            fill="white"
          />
          <path
            d="M167.2 126.4L169 122.4C169 122.4 174.7 120.6 175.6 115.6C175.6 115.6 188.4 129.9 203.4 126.4C203.4 126.4 202.6 122.5 200.7 120.3C200.7 120.3 214.3 116.3 218.2 103.2C219.7 98.4001 205.4 98.6001 199.2 102.5C199.2 102.5 208 92.0001 205.1 82.8001C204.2 80.1001 192.2 86.2001 185.8 94.2001C185.8 94.2001 187.8 86.4001 186 82.4001C185.4 81.0001 178.3 86.1001 173.2 96.4001C173.2 96.4001 163 97.4001 156.3 104.1C149.6 110.8 149.1 123.9 164.8 132.4L167.2 126.4Z"
            fill="#404B7C"
          />
          <path
            d="M167.2 126.4C167.2 126.4 166.9 115.2 159.9 115.7C153 116.1 154.8 130.2 165.5 133.6L167.2 126.4Z"
            fill="#ECBDBB"
          />
          <path
            d="M163.3 130.201C163.4 130.201 163.4 130.301 163.3 130.201C163.7 130.301 164.1 130.201 164.2 129.801C164.2 129.701 166.7 121.701 160.5 118.601C160.2 118.401 159.8 118.601 159.6 118.901C159.4 119.201 159.6 119.601 159.9 119.801C165.1 122.401 163 129.401 163 129.401C162.9 129.801 163 130.101 163.3 130.201Z"
            fill="#404B7C"
          />
          <path
            d="M159.7 127.101C160 127.201 160.3 127.201 160.5 126.901C160.5 126.901 162.1 124.601 163.9 123.601C164.2 123.401 164.3 123.001 164.1 122.701C163.9 122.401 163.5 122.301 163.2 122.501C161.2 123.601 159.5 126.101 159.4 126.201C159.2 126.401 159.3 126.801 159.7 127.101C159.6 127.001 159.7 127.101 159.7 127.101Z"
            fill="#404B7C"
          />
          <path
            d="M118.5 346.1C118.5 346.1 122.2 359.1 122.8 364C123.4 369 123.4 379.7 125.7 380.3C128 380.9 130 379.2 130 379.2C130 379.2 132.3 381 133.9 380.5C135.6 380 136.6 379.1 136.6 379.1C136.6 379.1 139.6 380.2 141.1 379.9C142.6 379.6 144.1 377.9 144.1 377.9C144.1 377.9 147 379.6 149.4 377.3C151.9 375 150.8 360.1 148.4 356.8C146.1 353.5 135.7 343.4 135.7 343.4L118.5 346.1Z"
            fill="#ECBDBB"
          />
          <path
            d="M129 365.2C129 365.2 129.6 372.7 129.8 377.3"
            stroke="#404B7C"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M135.6 364.6C135.6 364.6 136.6 373.4 136.5 377.3"
            stroke="#404B7C"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M142.2 363.4C142.2 363.4 143.7 371.6 143.8 375.6"
            stroke="#404B7C"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M114.5 334.4L117 347.8C117 347.8 121.3 353 129.8 350.8C138.4 348.7 139.5 342.9 139.5 342.9V330.3L114.5 334.4Z"
            fill="#404B7C"
          />
          <path
            d="M114.5 334.4L117 347.8C117 347.8 121.3 353 129.8 350.8C138.4 348.7 139.5 342.9 139.5 342.9V330.3L114.5 334.4Z"
            stroke="#040844"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M115.6 159.3C87.4 162.1 88 200.9 91 231.2C94 261.5 108.7 332.7 108.7 332.7C108.7 332.7 115.3 343.5 127.3 341.4C139.3 339.2 142.1 329.2 142.1 329.2C142.1 329.2 139.7 231.4 139.5 205.5C139.3 179.6 132.8 157.5 115.6 159.3Z"
            fill="#1D2538"
          />
          <path
            d="M89.6 205.4C89.5 214 90.2 222.9 91 231.2C94 261.5 108.7 332.7 108.7 332.7C108.7 332.7 115.3 343.5 127.3 341.4C139.3 339.2 142.1 329.2 142.1 329.2C142.1 329.2 139.7 231.4 139.5 205.5C139.3 182.6 134.2 162.8 121.1 159.7"
            stroke="#ECBDBB"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className=" relative space-y-3 h-full rounded-r-lg flex justify-center flex-col items-center bg-card  md:rounded-lg md:p-6">
        <h2 className="font-sans text-4xl text-gray-900 font-extrabold uppercase ">
          Sign In
        </h2>
        <p className="flex flex-wrap justify-center text-center font-sans text-xl text-gray-800">
          New here Create an Account?
          <span
            className="text-black cursor-pointer underline ml-3 "
            onClick={signup}
          >
            Sign up
          </span>
        </p>
        <form
          className="space-y-3 flex justify-center flex-col items-start "
          onSubmit={(e) => SignInForm(e)}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-red-800 animate-pulse">{error}</p>
          <input
            className="w-full px-4 py-2 rounded-md bg-custom2 text-white cursor-pointer"
            type="submit"
            value="Sign in"
            onClick={(e) => SignInForm(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
