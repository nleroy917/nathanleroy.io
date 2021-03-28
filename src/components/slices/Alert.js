import React from 'react';
export default ({slice}) => {
    switch(slice.primary.type.toLowerCase()) {
        case 'info':
            return (
                <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                    <p class="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                    <p>{slice.primary.alert.raw[0].text}</p>
                </div>
            )
            case 'success':
                return (
                    <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                      <p class="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            case 'warning':
                return (
                    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                      <p class="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            case 'danger':
                return (
                    <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                      <p class="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div>
                )
            default:
                return (
                    <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                      <p class="font-bold">{slice.primary.alert_title.raw[0].text}</p>
                      <p>{slice.primary.alert.raw[0].text}</p>
                    </div> 
                )
    }
}