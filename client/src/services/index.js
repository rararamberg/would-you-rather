export const questionsBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/questions`
export const commentsBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/comments`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
export const lastWord = (words) => {
  const newArr = words.split(" ");
  return  (newArr[newArr.length - 1]);
}
export const findEmoji = (category) => {
  if (category === "deep") {
      return "🧐"
  } else if (category === "funny") {
    return '😂'
  } else if (category === "hard") {
    return '😬'
  } else {
    return '😊'
  }
}

// remember after  URL you have to add /questions or /comments
// consider whether useful to export two baseURLs for comments and questions
// remember to export in front of each element 