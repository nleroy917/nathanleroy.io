import React from 'react'
import { useCookies } from 'react-cookie'

function LandingBanner({ landingbanner }) {
  // cookies to store banner dismissed state
  const [cookies, setCookie, _] = useCookies(['banner-dismissed'])

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
        landingbanner.data.live
          ? (
            <div
              className="absolute w-11/12 px-4 py-3 mx-4 bg-indigo-200 border border-indigo-600 rounded"
              style={{ display: closed ? 'none' : '' }}
            >
              <div className="mx-1 text-lg font-bold text-indigo-700">
                {landingbanner.data.title[0].text}
              </div>
              <div className="flex flex-col justify-between lg:flex-row xl:flex-row">
                <div className="mx-1 text-base font-light text-indigo-700">
                  {landingbanner.data.text[0].text}
                </div>
                <div>
                  <span className="mx-1 text-indigo-700 underline cursor-pointer hover:opacity-50">
                    <a href={landingbanner.data.link.url}>More</a>
                  </span>
                  <span
                    className="mx-1 text-indigo-700 underline cursor-pointer hover:opacity-50"
                    onClick={() => {
                      setClosed(true)
                      setCookie(
                        'banner-dismissed',
                        true,
                        {
                          maxAge: 3 * 60 * 60, // 3 hours
                        },
                      )
                    }}
                  >
                    Dismiss
                  </span>
                </div>
              </div>
            </div>
          )
          : <div />
     }
    </>
  )
}

export default LandingBanner
