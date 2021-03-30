import React from 'react';
export default ({slice}) => {
    switch(slice.primary.type.toLowerCase()) {
        case 'info':
            return (
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                    <p className="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                    <p>{slice.primary.alert.raw[0].text}</p>
                </div>
            )
            case 'success':
                return (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                      <p className="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            case 'warning':
                return (
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                      <p className="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            case 'danger':
                return (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                      <p className="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            default:
                return (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                      <p className="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div> 
                )
    }
}