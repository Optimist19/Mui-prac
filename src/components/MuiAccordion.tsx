import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function MuiAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            odio eaque ex ut, dolore autem nihil at, nemo vel minima nisi
            excepturi fuga voluptatibus, repellendus consectetur optio expedita
            voluptatem! Recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            odio eaque ex ut, dolore autem nihil at, nemo vel minima nisi
            excepturi fuga voluptatibus, repellendus consectetur optio expedita
            voluptatem! Recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            odio eaque ex ut, dolore autem nihil at, nemo vel minima nisi
            excepturi fuga voluptatibus, repellendus consectetur optio expedita
            voluptatem! Recusandae?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordion;
