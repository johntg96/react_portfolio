import React from 'react';

export default function ContactEmail() {
    return (
        <>
            <p  className='mt-3'
                style={{fontFamily: 'Arial', textAlign: 'center'}}
            >
                <span style={{fontFamily: 'monospace', color: 'black', backgroundColor: 'darkorange',}}>john@caret.mailer.me</span><br/>
                <span style={{fontWeight: 'bold'}}>^</span>
                <span style={{color: 'GrayText'}}>&nbsp;&nbsp;Reach me here&nbsp;&nbsp;&#129365; </span>
            </p>
        </>
    )
}
