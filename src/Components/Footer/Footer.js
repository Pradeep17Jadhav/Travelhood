import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './Footer.css';
import CallIcon from '@material-ui/icons/Call';
import ContactForm from '../../Components/ContactForm/ContactForm'


export default function Footer(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="footer">
            <Grid className="footer-content" container spacing={3}>
                <Grid className="footer-row-one" item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Need Help?
                    </div>
                    <div className="footer-row-items">
                        <div className="footer-contact-item">
                            <div className="footer-contact-item-name">
                                Contact
                            </div>
                            <div className="footer-contact-item-number">
                                +91 81081 73150
                            </div>
                        </div>
                    </div>
                    <div className="footer-row-items">
                        <div className="footer-contact-item">
                            <div className="footer-contact-item-name">
                                Email
                            </div>
                            <div className="footer-contact-item-email">
                                <a href="mailto:pradeep@gmail.com">pr88dp@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-row-items">
                        <Button
                            className="footer-contact-us-btn"
                            variant="outlined"
                            color="primary"
                            onClick={handleClickOpen}
                        >
                            Contact Us
                        </Button>
                        <ContactForm open={open} handleClose={handleClose} />
                    </div>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Policies
                    </div>
                    <div>
                        <a href="#">
                            {"Refund & Cancellation Policy"}
                        </a>
                        <a href="#">
                            {"Privacy and Cookies"}
                        </a>
                        <a href="#">
                            {"Terms of Service"}
                        </a>
                        <a href="#">
                            {"General Terms & Conditions"}
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Hello
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        About Us
                    </div>
                    <div>
                        <a href="#">
                            {"Our Team"}
                        </a>
                        <a href="#">
                            {"Our History"}
                        </a>
                        <a href="#">
                            {"Contact Us"}
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}