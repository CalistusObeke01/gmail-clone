import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mail/mailSlice'
import  { db } from './firebase'
import firebase from 'firebase'
import './SendMail.css'


const SendMail = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.toRequired,
            subject: formData.subjectRequired,
            message: formData.messageRequired,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    }

    return (
        <div className='sendMail'>
            <div className='sendMail_header'>
                <h3>New Message</h3>
                <CloseIcon
                    className='sendMail_close'
                    onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    type='email'
                    placeholder='To'
                    {...register("toRequired", { required: true })}
                    />
                {errors.toRequired && <span className='sendMail_error'>To is required</span>}
                <input
                    name='subject'
                    type='text'
                    placeholder='Subject'
                    {...register("subjectRequired", { required: true })}
                    />
                {errors.subjectRequired && <span className='sendMail_error'>Subject is required</span>}
                <input
                    name='message'
                    type='text'
                    placeholder='Message...'
                    className='sendMail_message'
                    {...register("messageRequired", { required: true })}
                    />
                {errors.messageRequired && <span className='sendMail_error'>Message is required</span>}
                <div className='sendMail_option'>
                    <Button
                        className='sendMail_send'
                        variant='contained'
                        color='primary'
                        type='submit'
                        >Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail