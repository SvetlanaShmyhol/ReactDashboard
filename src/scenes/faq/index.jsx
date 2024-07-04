import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5" >
                How can I track my order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once your order has shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website under the 'Track Your Order' section or directly on the carriers website to see the status of your shipment.
              </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5" >
                What are your shipping options and delivery times?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer several shipping options including standard, expedited, and next-day delivery. Standard shipping typically takes 5-7 business days, expedited takes 2-3 business days, and next-day delivery arrives the following business day. Delivery times may vary based on your location and the time of year.
              </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5" >
                What is your return policy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept returns within 30 days of purchase. Items must be in their original condition with all tags attached. To initiate a return, please visit our 'Returns & Exchanges' page, fill out the return form, and follow the provided instructions. Refunds will be processed within 5-7 business days after we receive the returned item.
              </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5" >
                How can I contact customer support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact our customer support team via email at support@example.com, by phone at 1-800-123-4567, or through our live chat feature available on the website. Our support hours are Monday to Friday, 9 AM to 6 PM EST.
              </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5" >
                Do you offer gift cards?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we offer both physical and digital gift cards. You can purchase them directly from our website under the 'Gift Cards' section. Digital gift cards are delivered via email immediately after purchase, while physical gift cards are shipped to the recipient and arrive within standard delivery times.
              </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  );
}

export default FAQ;
