import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import moment from 'moment';
import { getGravatarImage } from '../../lib/img';

const UserComment = ({ comment }) => {
    const { email, message, createdAt } = comment;
    const src = getGravatarImage(email);

    const popover = (
        <Popover id="popover-positioned-right" title={email}>
            <strong>Last Update: {moment(createdAt).format('DD.MM.YYYY HH:mm:ss')}</strong>
        </Popover>
    );

    return (
        <div className="userCommentDiv" >
            <OverlayTrigger  id="asfas" trigger={['hover', 'focus']} placement="top" overlay={popover}>
                <div>
                    <img  width="80" height="80" src={src} alt="" />
                </div>
            </OverlayTrigger>
            <div>
                <div className="userEmail">{email}</div>
                <div className="userMsg">{message}</div>
            </div>
        </div>
    );
};

export default UserComment;
