import React from 'react'

export default function ({ slice }) {
  switch (slice.primary.type.toLowerCase()) {
    case 'info':
      return (
        <div className="p-4 text-blue-700 bg-blue-100 border-l-4 border-blue-500" role="alert">
          <p className="font-bold">{slice.primary.alert_title.richText[0].text}</p>
          <p>{slice.primary.alert.richText[0].text}</p>
        </div>
      )
    case 'success':
      return (
        <div className="p-4 text-green-700 bg-green-100 border-l-4 border-green-500" role="alert">
          <p className="font-bold">{slice.primary.alert_title.richText[0].text}</p>
          <p>{slice.primary.alert.richText[0].text}</p>
        </div>
      )
    case 'warning':
      return (
        <div className="p-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500" role="alert">
          <p className="font-bold">{slice.primary.alert_title.richText[0].text}</p>
          <p>{slice.primary.alert.richText[0].text}</p>
        </div>
      )
    case 'danger':
      return (
        <div className="p-4 text-red-700 bg-red-100 border-l-4 border-red-500" role="alert">
          <p className="font-bold">{slice.primary.alert_title.richText[0].text}</p>
          <p>{slice.primary.alert.richText[0].text}</p>
        </div>
      )
    default:
      return (
        <div className="p-4 text-red-700 bg-red-100 border-l-4 border-red-500" role="alert">
          <p className="font-bold">{slice.primary.alert_title.richText[0].text}</p>
          <p>{slice.primary.alert.richText[0].text}</p>
        </div>
      )
  }
}
