import React from "react";

import Github from '../../assets/github.svg';
import Email from '../../assets/email2.svg';
import Linkedin from '../../assets/linkedin2.svg';

export const Contact = () => {
  return (
    <div id='contact_div' className='w-80 center justify-around'>
      <a href='mailto:walter.k.jenkins@gmail.com' className='icon flex w-20'>
        <Email/>
      </a>
      <a href='git.walterkjenkins.com' className='icon flex w-20'>
        <Github/>
      </a>
      <a href='linkedin.walterkjenkins.com' className='icon flex w-20'>
        <Linkedin/>
      </a>
    </div>
  );
};

