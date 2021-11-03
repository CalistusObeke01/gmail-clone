import React from 'react'
import { useHistory } from 'react-router-dom'
import  Checkbox from '@material-ui/core/Checkbox'
import { IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import './EmailRow.css'

import { useDispatch } from 'react-redux'
import { selectMail } from './features/mail/mailSlice'
import { selectOpenMail } from './features/mail/mailSlice'
import { useSelector } from 'react-redux'


const EmailRow = ({id, title, subject, description, time}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const selectedMail = useSelector(selectOpenMail)

    const openMail = () => {
        dispatch(
            selectMail({
                id, title, subject, description, time
            })
        )
        history.push('/mail')
    }
    console.log(selectMail, '', selectedMail)

    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow_options'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h4 className='emailRow_title'>{title}</h4>

            <div className='emailRow_message'>
                <p><span style={{fontWeight: 'bold'}}>{subject}</span> - {description}</p>
            </div>
            
            <div className='emailRow_description'>
                {time}
            </div>
        </div>
    )
}

export default EmailRow