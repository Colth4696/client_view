import React from 'react';
import DummyContent from '../Dummy';
import RequestForm from '../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const AccordionMenu = () => {
    return (
      <div className="DropMenu">
        <Accordion atomic={true}>

          <AccordionItem title="Create a Task ">
            <RequestForm />
          </AccordionItem>

          <AccordionItem title="Tasks Im Helping With">
            <DummyContent />
          </AccordionItem>

          <AccordionItem title="My Tasks">
            <DummyContent />
          </AccordionItem>
            
        </Accordion>
      </div>
    );
  }

export default AccordionMenu