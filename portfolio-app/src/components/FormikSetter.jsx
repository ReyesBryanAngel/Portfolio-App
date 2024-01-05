import * as yup from 'yup';
import { useFormik } from 'formik';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useData } from '../context/globalDataProvider';

export const FormikSetter = () => {
    const { setFormSubmit } = useData();
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

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: true,
        enableReinitialize: false,
        onSubmit: async (values, { setSubmitting }) => {
          try {                                                            
            const res = await addDoc(collection(db, 'contacts'), values);
            setFormSubmit(res?.id);
            setSubmitting(false);
          } catch (error) {
            alert(error);
            setSubmitting(false);
          }
        },
      });                                                                                                               

    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        handleReset,
    } = formik;

    return {
        values,
        touched,
        errors,
        isSubmitting,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        handleReset
    }
}