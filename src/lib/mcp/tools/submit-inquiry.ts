import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

/**
 * Public tool: accepts a project inquiry and returns a mailto: link the caller
 * (or an assistant relaying to a human) can use to reach Divya Enco. The site
 * has no backend inbox, so this deliberately does not persist anything.
 */
export default defineTool({
  name: "submit_inquiry",
  title: "Prepare a project inquiry",
  description:
    "Formats a project inquiry to Divya Enco and returns a mailto: link that opens a pre-filled email to divyaenco@gmail.com.",
  inputSchema: {
    name: z.string().min(1).describe("Contact name of the person or company inquiring."),
    email: z.string().describe("Reply-to email address."),
    company: z.string().optional().describe("Company or organization name."),
    message: z.string().min(1).describe("Details of the project or inquiry."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name, email, company, message }) => {
    const subject = `Project inquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "-"}\n\n${message}`;
    const mailto = `mailto:divyaenco@gmail.com,operations@divyaenco.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    return {
      content: [
        {
          type: "text",
          text: `Inquiry prepared. Open this link to send the email:\n${mailto}`,
        },
      ],
      structuredContent: { mailto, subject },
    };
  },
});
