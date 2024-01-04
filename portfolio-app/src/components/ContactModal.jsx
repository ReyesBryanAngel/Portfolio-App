import { useState, useEffect } from 'react';
import { FormikSetter } from './FormikSetter';
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { 
    Button,
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Typography,
    IconButton
} from "@mui/material";

const ContactModal = ({ closeModal }) => {
    const clientForm = FormikSetter();
    
    return (
        <>
            <Dialog
                open={true}
                onClose={closeModal}
            >
                <DialogContent className='w-full md:w-full'>
                    <div className='my-10'>
                        <Typography variant='h5' className='whitespace-nowrap text-center pb-5'>Send your inquiry</Typography>
                        <IconButton
                            aria-label="close"
                            onClick={closeModal}
                            sx={{
                            position: "absolute",
                            right: 6,
                            top: 4,
                            color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <HighlightOffRoundedIcon />
                        </IconButton>
                        <form data-netlify="true" onSubmit={clientForm.handleSubmit}>
                            <div className='lg:grid grid-cols-2 gap-5'>
                                <div className='mb-5'>
                                    <TextField
                                        size="small"
                                        className='w-full'
                                        label="First Name"
                                        id="first_name"
                                        onChange={clientForm.handleChange}
                                        onBlur={clientForm.handleBlur}
                                        value={clientForm.values.first_name}
                                        error={
                                            clientForm.touched.first_name &&
                                            Boolean(clientForm.errors.first_name)
                                        }
                                        helperText={
                                            clientForm.touched.first_name &&
                                            (clientForm.errors.first_name)
                                        } 
                                        variant="outlined" 
                                    />
                                </div>
                                <div className='mb-5'>
                                    <TextField
                                        size="small"
                                        className='w-full'
                                        label="Last Name"
                                        id="last_name"
                                        onChange={clientForm.handleChange}
                                        onBlur={clientForm.handleBlur}
                                        value={clientForm.values.last_name}
                                        error={
                                            clientForm.touched.last_name &&
                                            Boolean(clientForm.errors.last_name)
                                        }
                                        helperText={
                                            clientForm.touched.last_name &&
                                            (clientForm.errors.last_name)
                                        } 
                                        variant="outlined" 
                                    />
                                </div>
                                <div className='mb-5'>
                                    <TextField
                                        size="small"
                                        className='w-full'
                                        label="Email Address"
                                        id="email"
                                        onChange={clientForm.handleChange}
                                        onBlur={clientForm.handleBlur}
                                        value={clientForm.values.email}
                                        error={
                                            clientForm.touched.email &&
                                            Boolean(clientForm.errors.email)
                                        }
                                        helperText={
                                            clientForm.touched.email &&
                                            (clientForm.errors.email)
                                        } 
                                        variant="outlined" 
                                    />
                                </div>
                                <div className='mb-5'>
                                    <TextField 
                                        size="small"
                                        className='w-full'
                                        label="Phone Number"
                                        id="phone"
                                        variant="outlined"
                                        onChange={clientForm.handleChange}
                                        onBlur={clientForm.handleBlur}
                                        value={clientForm.values.phone}
                                        error={
                                            clientForm.touched.phone &&
                                            Boolean(clientForm.errors.phone)
                                        }
                                        helperText={
                                            clientForm.touched.phone &&
                                            (clientForm.errors.phone)
                                        } 
                                    />
                                </div>
                            </div>  
                            <div className='mt-5'>
                                <TextField
                                    className='w-full'
                                    label="Your Message..."
                                    id="message"
                                    onChange={clientForm.handleChange}
                                        onBlur={clientForm.handleBlur}
                                        value={clientForm.values.message}
                                        error={
                                            clientForm.touched.message &&
                                            Boolean(clientForm.errors.message)
                                        }
                                        helperText={
                                            clientForm.touched.message &&
                                            (clientForm.errors.message)
                                        } 
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <div className='mt-5'>
                                <DialogActions>
                                    <Button type='submit' variant='contained'>Submit</Button>
                                </DialogActions>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ContactModal;