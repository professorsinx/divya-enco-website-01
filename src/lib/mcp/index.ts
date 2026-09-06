import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listClients from "./tools/list-clients";
import getContact from "./tools/get-contact";
import submitInquiry from "./tools/submit-inquiry";

export default defineMcp({
  name: "divya-enco-mcp",
  title: "Divya Enco",
  version: "0.1.0",
  instructions:
    "Public tools for Divya Enco, an engineering and construction firm. Use `list_services` to see offerings, `list_clients` for reference clients, `get_contact` for contact info, and `submit_inquiry` to prepare a pre-filled project inquiry email.",
  tools: [listServices, listClients, getContact, submitInquiry],
});
