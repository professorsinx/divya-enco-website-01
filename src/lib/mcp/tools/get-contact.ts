import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

/**
 * Public tool: returns Divya Enco's contact details (Trichy office).
 */
export default defineTool({
  name: "get_contact",
  title: "Get Divya Enco contact info",
  description:
    "Returns Divya Enco's public contact details: email, phone, and Trichy office address.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      company: "Divya Enco",
      email: "divyaenco@gmail.com",
      operationsEmail: "operations@divyaenco.com",
      city: "Trichy, Tamil Nadu, India",
      careersEmail: "divyaenco@gmail.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
