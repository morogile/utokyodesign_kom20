export const onClientEntry = () => { //eslint-disable-line
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) { //eslint-disable-line
    import(`intersection-observer`) //eslint-disable-line
    console.log(`# IntersectionObserver is polyfilled!`) //eslint-disable-line
  }
}