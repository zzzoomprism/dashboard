export default function validation(values){
    let errors = {};
    //"select" field "from" validation

    if(!values.from){
        errors.from = "Required!";
    }

    //select field "to" validation
    if(!values.to){
        errors.to = "Required!";
    }

    return errors;
}