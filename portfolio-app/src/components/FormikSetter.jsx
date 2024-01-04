import * as yup from 'yup';
import { useFormik } from 'formik';

export const FormikSetter = () => {
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    }

    const validationSchema = yup.object({
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        email: yup.string().required('Email Address is required'),
        phone: yup.string().required('Phone Number is required'),
        message: yup.string().required('Message is required'),
    })

    const formik = useFormik ({
        initialValues,
        validationSchema,
        validateOnBlur: true,
        enableReinitialize: false,
        onSubmit: () => {}
    });

    const {
        values,
        touched,
        errors,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit
    } = formik;

    return {
        values,
        touched,
        errors,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit
    }
}