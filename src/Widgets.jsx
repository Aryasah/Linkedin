import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NewsArticle from './NewsArticle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets_top">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon style={{color:'#0a66c2'}} />
            </div>
            <NewsArticle Icon={FiberManualRecordIcon} heading="The Internet wasn't build to last..." subtitle="1d ago ~ 46,850 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Burn the midnight oil,get burned out..." subtitle="1d ago ~ 15,789 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="WFH and price we pay" subtitle="16h ago ~ 12,146 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Take time OFf without feeloing guilty" subtitle="1d ago ~ 32,989 Readers"/>
            <Accordion  style={{outline:'none',border:'none'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                Show More...
            </AccordionSummary>
            <AccordionDetails style={{display :'flex',flexDirection:'column'}}>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Zomato,Paytm.IPOs Should you buy? " subtitle="20h ago ~ 2,274 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Self-taught! Cyber-securities needs you..." subtitle="8h ago ~ 1,345 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Putting Things Off! Join the club..." subtitle="14h ago ~ 3,334 Readers"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="When Interviews are Endless..." subtitle="3d ago ~ 9,993 Readers"/>
            </AccordionDetails>
            </Accordion>
        </div>
        <div className="widgets_bottom">
        <div className="widgets_header">
                <h2>Today's Top Course</h2>
                <TurnedInNotIcon style={{color:'#0a66c2'}}/>

        </div>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Discussion on Racism..." subtitle="Dr.Kellly Simpson"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Communicating with Confident" subtitle="Dr.Arya Sah"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Design Priciples " subtitle="Sayan Das"/>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        Show More...
        </AccordionSummary>
        <AccordionDetails style={{display :'flex',flexDirection:'column'}}>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Master FrontEnd..." subtitle="Dr.Rishav Jha"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Adobe Illustrations" subtitle="Saikat Sarkar"/>
            <NewsArticle Icon={FiberManualRecordIcon} heading="Financial Advertising" subtitle="Dr.Ria Rao"/>
        </AccordionDetails>
      </Accordion>
            

        </div>
        </div>
    )
}
export default Widgets