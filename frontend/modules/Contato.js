import validator from 'validator';

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        let error = false;

        if (!nomeInput){
            alert('Nome é um campo requerido')
            error = true;  
        } 

        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if (!this.body.email && !this.body.telefone) {
            alert('Pelo menos um contato precisa ser enviado: e-mail ou telefone.')
            error = true; 
        }

        if (!error) el.submit();
    }

}