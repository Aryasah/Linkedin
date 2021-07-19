import React from 'react'
import './InputOption.css'
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'

const InputOption = ({title,Icon,color,handleOpen,check,countLike,like}) => {
    return (
        <div className="inputOption">
            {!handleOpen?<Icon onClick={countLike} style={{color:color}}/>:<Icon onClick={handleOpen} style={{color:color}}/>}
            <h4>{title}
            {check?<Checkbox
                className="check"
                checked={check}
                color="primary"
                size="small"
                
                
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />:""}
            &nbsp;
            {like? like:""}
        </h4>
        </div>
    )
}

export default InputOption
