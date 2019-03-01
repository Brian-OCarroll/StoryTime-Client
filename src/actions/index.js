export const TYPING_MESSAGE = 'TYPING_MESSAGE'
export const typing = (text) => ({
    type: TYPING_MESSAGE,
    text
});
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const loadMessages = (mess, index) => ({
    type: LOAD_MESSAGES,
    mess,
    //not sure about index yet
    index
})