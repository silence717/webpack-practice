/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
let login = (username, password) => {
    if(username !== 'admin' || password !== '123') {
        console.log('incorrect login');
    }
};

export {login}