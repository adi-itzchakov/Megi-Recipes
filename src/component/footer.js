import React, { Component } from 'react';
import {Input,TextArea,Form,Button} from 'semantic-ui-react';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <br/>
                <span className="writeUse">:כתבו לנו</span>
                <hr />
                <div className="Name">    
                    <Input type="text" placeholder="שם פרטי" style={{direction:'rtl'}} />
                    <br/>
                    <Input type="text" placeholder="שם משפחה" />
                </div>
                <Form className="massage">
                    <TextArea placeholder="...כתוב הודעה" style={{direction:'rtl'}}/> 
                </Form>
                <div className="sendButton">
                    <Button inverted color='pink'>
                        שלח
                    </Button>
                </div>
                <div className="icon">
                    <Button circular color='facebook' icon='facebook' />
                    <Button circular color='twitter' icon='twitter' />
                    <Button circular color='instagram' icon='instagram' />
                    <Button circular color='youtube' icon='youtube' />
                </div>
            </div>
        )
    }
}
export default Footer;