/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
console.log('login in');
let login = (username, password) => {
    if(username !== 'admin' || password !== '123') {
        console.log('incorrect login');
    }
};

login('admin', '456');