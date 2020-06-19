import {FormErrors} from "redux-form";

export const required = (value:FormProps) => {
    if(value)
        return undefined;
    return "Field is required";
};

type FormProps = {
    from : string
    to: string
}
// 'ConfigProps<FormProps, {}, string> | Partial<ConfigProps<FormProps, {}, string>>'
export const comparison = (values: FormProps): FormErrors<FormProps> => {
    const errors: FormErrors<FormProps> = {};
    if(values.from === values.to){
        errors.from = "Same field";
        errors.to = "Same field";
    }
        return errors;
}

