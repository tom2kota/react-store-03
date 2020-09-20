import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menu-item/MenuItem"
import './Directory.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(
            ({id, ...restProps}) => <MenuItem key={id} {...restProps} />
        )}
    </div>
)

const mapStateToProps = ({directory: {sections}}) => ({
    sections
})

export default connect(mapStateToProps)(Directory)