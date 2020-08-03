import React from 'react';
import { withFirebase } from '../firebase';

import { Card, Form, Input, Button, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";


const SignOutButton = ({ firebase }) => (
    <Button
        type="primary"
        onClick={firebase.doSignOut}
        className="logout-button"
        size="large"
    >
        로그아웃
    </Button>
);
 
export default withFirebase(SignOutButton);