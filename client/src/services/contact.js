import * as baseService from './base';

function sendContactEmail(name, email, message) {
    return baseService.post('/api/contact/message', {
        name,
        email,
        message
    });
};

export { sendContactEmail };