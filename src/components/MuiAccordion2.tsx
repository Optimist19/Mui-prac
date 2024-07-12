// The convention for accordionActionsClasses, when one opens, the others get closed. So we achieved that Headers.

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

function MuiAccordion2() {
  const [expanded, setExpanded] = useState<string | false>(false);

  function handleChange(isExpanded: boolean, panel: string) {
    setExpanded(isExpanded ? panel : false);
  }
  return (
    <Box my="3vh">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}>
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
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}>
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
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}>
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
    </Box>
  );
}

export default MuiAccordion2;
