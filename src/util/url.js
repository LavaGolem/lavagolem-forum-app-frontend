const baseApiURL = process.env.REACT_APP_API_URL

export const questionsUrl = baseApiURL + 'questions'
export const userDataUrl = baseApiURL + 'users/me'
export const userRegisterUrl = baseApiURL + 'users/register'
export const userLoginDataUrl = baseApiURL + 'users/login'
export const addNewQuestionUrl = baseApiURL + 'questions/new'
export const addNewAnswerUrl = baseApiURL + 'answers/new'
export const answersDataUrl = (questionId) => {
    return `${baseApiURL}answers?questionId=${questionId}`
}