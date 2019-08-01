
export const fetchMarkup = url => {
  return fetch(url)
    .then(data => {
      return data.text()
    })
};
