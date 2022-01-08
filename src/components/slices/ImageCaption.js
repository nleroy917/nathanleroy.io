import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

// Default Image
function DefaultImage({ slice }) {
  return (
    <div className="m-4">
      <figcaption className="italic">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        {slice.primary.caption
      && RichText.asText(slice.primary.caption.richText) !== '' ? (
        <figcaption className="m-2 text-sm font-light text-gray-700">
          {RichText.asText(slice.primary.caption.richText)}
        </figcaption>
          ) : null}
      </figcaption>
    </div>
  )
}

// Emphasized Image
function EmphasizedImage({ slice }) {
  return (
    <div className="m-4">
      <figcaption className="italic">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        {slice.primary.caption
      && RichText.asText(slice.primary.caption.richText) !== '' ? (
        <figcaption className="m-2 text-sm font-light text-gray-700">
          {RichText.asText(slice.primary.caption.richText)}
        </figcaption>
          ) : null}
      </figcaption>
    </div>
  )
}

// Full Width Image
function FullWidthImage({ slice }) {
  return (
    <div
      className="m-4"
      style={{ backgroundImage: `url(${slice.primary.image.url})` }}
    >
      <div className="wrapper">
        {slice.primary.caption
      && RichText.asText(slice.primary.caption.richText) !== '' ? (
        <span className="m-2 text-sm font-light text-gray-700">
          {RichText.asText(slice.primary.caption.richText)}
        </span>
          ) : null}
      </div>
    </div>
  )
}

// Function to determine the image type
const renderSwitch = (slice) => {
  switch (slice.slice_label) {
    case 'image-full-width':
      return <FullWidthImage slice={slice} />
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export default function ({ slice }) {
  return <>{renderSwitch(slice)}</>
}
