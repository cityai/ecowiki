const ExtError = require( './error/extError');

class Validation {
    containsRequiredFields(object, fields){
        const fieldsRequired =[];

        Object.keys(object).forEach(key => {
            if(fields.includes(key))  fieldsRequired.push(key)
        })

        return fieldsRequired
    }

    fieldsRequired(object, fields){
        const fieldsEntered = this.containsRequiredFields(object, fields);
        for(let i = 0; i<fieldsEntered.length; i++){
            
            for(let z = 0; z<fields.length; z++){
                
                if(fieldsEntered[i]==fields[z]){
                    fields.splice(z, 1);
                    z--;
                }
            }
        }
        if(fields.length) throw new ExtError(400, `You need to enter ${fields} fields`);
    }
 
    containsForbiddenFields(object, fields) {
        const fieldsFailedValidation = [];

        Object.keys(object).forEach(key => {
            if(fields.includes(key)) fieldsFailedValidation.push(key);
        });

        return fieldsFailedValidation;
    }

    fieldValidation(object, forbidenFields){
        const filedsFaildeValidation= this.containsForbiddenFields(object, forbidenFields);
        
        if(filedsFaildeValidation.length) throw new ExtError(400, `You can't change your ${filedsFaildeValidation}.`);
        
    }

    newValidation(object, forbidenFields){
        const filedsFaildeValidation= this.containsForbiddenFields(object, forbidenFields);
        if(filedsFaildeValidation.length) throw new ExtError(400, `You can't create ${filedsFaildeValidation} field.`);
    }    
}

module.exports = new Validation();