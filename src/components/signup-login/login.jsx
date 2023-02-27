import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function LogIn() {
    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 95%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 text-center'>

                    <h2 className="fw-bold mb-5">Log In now</h2>

                    

                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                    </div>

                    <MDBBtn className='w-100 mb-4' size='md' style={{ background: '#009dff' }}>Log In</MDBBtn>

                    <div className="text-center">

                        <p>or LogIn with:</p>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#009dff' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#009dff' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#009dff' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#009dff' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default LogIn;