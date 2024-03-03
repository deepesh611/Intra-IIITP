import React from 'react';
"../styles/Page2.css"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function () {
  return (
    // <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    <MDBRow className='t'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://voicetrustmadurai.org/wp-content/uploads/2022/03/Blood-Donation-1.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Data Entry</MDBCardTitle>
            <MDBCardText>
              Enter data if you are donating blood
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://www.friends2support.org/imgs/landingpage/blood_drop_search.gif'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Data Retrival</MDBCardTitle>
            <MDBCardText>
              Get Data if you require blood
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      {/* <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  ); */}


</MDBRow>
  ); 
}