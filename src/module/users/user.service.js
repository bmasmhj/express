export const register = (userData)=>{
    try {
        return userData;
    } catch (err) {
        throw err;
    }
};
export const login = (userName, password)=>{
    try {
        console.log(userName, password);
    } catch (err) {
        throw err;
    }
};

