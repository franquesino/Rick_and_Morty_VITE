const validation = (input) => {
    const errors = {}

    if(!input.email.includes("@")){
        errors.email = "Debe contener un @"
    }

    if(!input.email.includes(".")){
        errors.email = "No es un email valido"
    }

    if(!input.password.includes("7")){
        errors.password = "Deberia contener un 7"
    }

    if(input.password.length < 6){
        errors.password = "Debe ser mayor a 6 caracteres"
    }

    return errors

}

export default validation