export const SPINNER_HANDLE = 'SPINNER_HANDLE';

export const spinnerHandle = (spinner) => {
    return (dispatch) => {
        dispatch({
            type: SPINNER_HANDLE,
            payload: spinner
        })
    }
}