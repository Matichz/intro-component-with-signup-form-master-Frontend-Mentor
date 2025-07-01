const form = document.getElementById('form');

const validForm = () => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        const inputs = {
            "input-first-name": {
                valueInput: form.name.value,
                claseMsgError: 'msg-error-name',
                claseIcorError: 'icon-error-name'
            },
            "input-last-name": {
                valueInput: form.lastName.value,
                claseMsgError: 'msg-error-lastname',
                claseIcorError: 'icon-error-lastname'
            },
            "input-email": {
                valueInput: form.email.value,
                claseMsgError: 'msg-error-email',
                claseIcorError: 'icon-error-email'
            },
            "input-password": {
                valueInput: form.password.value,
                claseMsgError: 'msg-error-password',
                claseIcorError: 'icon-error-password'
            }  
        }
    
        Object.entries(inputs).forEach((input) => {
            const emptyInput = input[1].valueInput === ''

            document.querySelector(`.${input[0]}`).style.border = emptyInput ? '1px solid red' : '1px solid hsl(246, 25%, 77%)';

            document.querySelector(`.${input[1].claseMsgError}`).style.display = emptyInput ? 'block' : 'none';

            document.querySelector(`.${input[1].claseIcorError}`).style.display = emptyInput ? 'flex' : 'none';
        })  
    })
}

validForm();