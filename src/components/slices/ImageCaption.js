import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

// Default Image
const DefaultImage = ({ slice }) => (
  <div className="my-4">
    <figcaption className="italic">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="font-light">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </div>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <div className="my-4">
    <figcaption className="italic">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="font-light">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </div>
)

// Full Width Image
const FullWidthImage = ({ slice }) => (
  <div
    className="my-4"
    style={{ backgroundImage: `url(${slice.primary.image.url})` }}
  >
    <div className="wrapper">
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <span className="font-light text-gray-700">
          {RichText.asText(slice.primary.caption.raw)}
        </span>
        ) : null}
    </div>
  </div>
)

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

export default ({ slice }) => <>{renderSwitch(slice)}</>
