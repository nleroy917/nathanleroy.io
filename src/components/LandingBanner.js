import React from 'react';
import { useCookies } from 'react-cookie';

const LandingBanner = ({landing_banner}) => {
    // cookies to store banner dismissed state
    const [cookies, setCookie, removeCookie] = useCookies(['banner-dismissed']);

    /**
     * it would be annoying to show the banner each time someone visits the landing
     * page of the site, only to dismiss it each time. So I store the "dismissed"
     * state as a cookie. This way it gets initialized from the cookie state - 
     * and if it is true, it never displays in the first place. This cookie
     * expires after 3 hours and the banner will display again.
    */
    const [closed, setClosed] = React.useState(cookies['banner-dismissed'])

    return (
     <>
      {
        landing_banner.data.live ? 
        <div 
          className="mx-4 px-4 py-3 absolute bg-indigo-200 border border-indigo-600 rounded w-11/12"
          style={{display: closed ? 'none' : ''}}
        >
         <div className="font-bold mx-1 text-lg text-indigo-700">
            {landing_banner.data.title[0].text}
         </div>
         <div className="flex flex-col lg:flex-row xl:flex-row justify-between">
         <div className="font-light text-base mx-1 text-indigo-700">
            {landing_banner.data.text[0].text}
         </div>
         <div>
         <span className="underline mx-1 cursor-pointer hover:opacity-50 text-indigo-700">
            <a href={landing_banner.data.link.url}>More</a>
         </span>
         <span
           className="underline mx-1 cursor-pointer hover:opacity-50 text-indigo-700"
           onClick={()=>{
               setClosed(true)
               setCookie(
                   'banner-dismissed',
                   true,
                   {
                       maxAge: 3*60*60 // 3 hours
                   }
               )
            }}
         >
            Dismiss
         </span>
         </div>
         </div>
        </div>
        : <div></div>
     }
    </>
    )
}

export default LandingBanner;