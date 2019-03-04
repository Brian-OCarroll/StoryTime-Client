export const TYPING_MESSAGE = 'TYPING_MESSAGE'
export const typing = (typing) => ({
    type: TYPING_MESSAGE,
    typing
});
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const loadMessages = (messArray, index) => ({
    type: LOAD_MESSAGES,
    messArray,
    //not sure about index yet
    index
});
export const USER_TYPING = 'USER_TYPING';
export const userTyping = (currUser) => ({
    type: USER_TYPING,
    currUser
});
export const TIMER = 'TIMER';
export const timer = (timer) => ({
    type: TIMER,
    timer
})
