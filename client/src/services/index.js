export const questionsBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/questions`
export const commentsBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/comments`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

// remember after  URL you have to add /questions or /comments
// consider whether useful to export two baseURLs for comments and questions
// remember to export in front of each element 