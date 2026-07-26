const API_URL = "http://localhost:5000/api";

export const getQuiz = async (quizId, token) => {
  const response = await fetch(
    `${API_URL}/quizzes/${quizId}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch quiz");
  }

  return data;
};


export const submitQuiz = async (
  quizId,
  answers,
  token
) => {

  const response = await fetch(
    `${API_URL}/quizzes/${quizId}/submit`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify({
        answers: answers
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit quiz");
  }

  return data;
};