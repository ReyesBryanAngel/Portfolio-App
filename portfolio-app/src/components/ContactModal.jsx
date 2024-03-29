import { FormikSetter } from './FormikSetter';
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { LoadingButton } from "@mui/lab";
import { 
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Typography,
    IconButton
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

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
                        <Typography variant='h6' className='whitespace-nowrap text-left pb-5'>Leave a message</Typography>
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
                        <form 
                            name="message"  
                            onSubmit={clientForm.handleSubmit}
                            onReset={clientForm.handleReset}
                        >
                            <div className='lg:grid grid-cols-2 gap-5'>
                                <div className='mb-5'>
                                    <TextField
                                        type='text'
                                        name='first_name'
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
                                        type='text'
                                        name='last_name'
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
                                        type='text'
                                        name='email'
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
                                        type='text'
                                        name='phone'
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
                                    type='text'
                                    name='message'
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
                                    <LoadingButton
                                        loading={clientForm.isSubmitting}
                                        type="submit"
                                        variant='contained'
                                    >
                                        <SendIcon />
                                    </LoadingButton>
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