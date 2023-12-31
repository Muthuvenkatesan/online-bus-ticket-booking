import React from "react";
import '../Assets/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Nav from "./Nav";
import Footer from "./Footer";

function Home()
{
    return(
        <div className="Home_back"> 
        <Nav/>
        <br></br>
        <Card style={{ width: '20rem' ,marginLeft:"35%"}}>
      <Card.Body>
        <Card.Title>Book Here</Card.Title>
        <Card.Text>
        <Form>
            <Row>
              <Col>
                <Form.Control placeholder="From" />
                </Col>
                <Col>
                  <Form.Control placeholder="To" />
                </Col>
            </Row>
        </Form>
              <br></br>
              <center>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker />
              </LocalizationProvider>
              <br></br>
              <br></br>
              <Button variant="light">Search</Button>{' '}
              </center>
        </Card.Text>
      </Card.Body>
    </Card>
      <br />
      <br></br>
      {/* <div className="container" style={{marginLeft:"15%"}}>
        <div className="row">
          <div className="col-md-3">
            <div className="cards" >
              <Card.Img  src="https://fastui.cltpstatic.com/image/upload/offermgmt/images/banner/BSB_FEDCC_FEDDC_B_0211.jpg" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="cards">
              <Card.Img  src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/marketingBanner/mobile/BB_BUS_CANARACC.jpg" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="cards">
              <Card.Img  src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/banner/BSB_B_SBICC_0811.jpg" />
            </div>
          </div>
        </div>
      </div>
      <br/> */}


            <div className="para">
                <h3>Enjoy your journey</h3>
                <br></br>
                <p>Looking for a safe, secure and trustworthy platform to book your bus tickets? 
                    Your search for a reliable bus journey ends here, with over 10 lakh buses, from 
                    non A/C sleeper to Volvo buses - Cleartrip has made online bus booking easier and faster
                    Cleartrip is a customer-centric platform and we always put our customers first. With your 
                    bus reservation - there is total transparency and no hidden charges. That’s not all - 
                    now you can book bus tickets with zero convenience fees and raise your concerns (if any) 
                    to our 24x7 customer support, which puts you through to a customer support agent instead of an 
                    IVR. There’s more - you can get huge discounts on your bus fare while booking your seat only on the Cleartrip app.
                    Do we need to say more? When booking bus tickets - Choose Cleartrip!
                </p>
            </div>
            <br></br>
            <div className="para1">
                <h3>We always supported to you</h3>
                <br></br>
                <p>Bus travel in itself is a hectic affair, and we believe bus reservations and 
                    cancellations shouldn’t be. Seamless online bus bookings, cheap bus fares, zero 
                    convenience fees and a 24x7 customer helpline all account for a pleasant experience 
                    when you book a bus seat with us. To ensure the best customer experience we provide a 
                    helpline service where travellers don’t have to wait in queue or talk to a bot to raise 
                    their concerns, they can get in line with an agent directly to address their concerns.</p>
            </div>
            <br></br>
            <div className="para2">
                <h3>Bus ticket on MyBus</h3>
                <br></br>
                <p>Bus ticket booking on your App/mWeb is now as easy as it gets -<br></br>
                    .Open the MyBus website<br></br>
                    .Click on the ‘Bus’ section<br></br>
                    .Enter your specifications - Source, destination & date of travel<br></br>
                    .Choose from a range of sleeper, A/C & Volvo buses
                </p>
            </div>
            <br></br>
            {/* <div className="para3">
                <h3>How to cancel your bus ticket?</h3>
                <br></br>
                <p>
                    .Cancel your bus ticket by logging in to Cleartrip's mobile application or by calling on the 24x7 helpline number<br></br>
                    .Any cancellation is subject to charges as mentioned on the bus ticket<br></br>
                    .Partial cancellation of bus tickets is not possible, you can call customer care to cancel your bus reservation and make a new bus booking<br></br>
                    .Modification (i.e. changing the travel date/changing the boarding/dropping point) of the tickets is not possible, please call customer care to cancel the bus ticket and make a new booking<br></br>
                </p>
            </div>
            <br></br>
            <div className="para4">
                <h3>Is it safe to book bus tickets online?</h3>
                <p>
                Booking a bus ticket online is now easy. Download the Cleartrip app and follow the steps mentioned in
                 “How to book an online bus ticket on Cleartrip?” Booking a bus ticket online is as safe as it gets. In fact,
                  there are certain benefits you can enjoy when booking a bus ticket online on Cleartrip. Extra discounts, zero 
                  convenience fees & much more.
                </p>
            </div>
            <br></br>
            <div className="para5">
                <h3>Is there any discount offers available for bus booking ?</h3>
                <br></br>
                <p>
                    Yes, explore all the bus ticket booking offers with Cleartrip. 
                    In addition, Cleartrip offers extra discounts, zero convenience fees & much more.
                </p>
            </div>
            
            <br></br> */}
            <Footer/>
        </div>
        
        )
}
export default Home