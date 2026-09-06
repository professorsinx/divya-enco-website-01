import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

/**
 * Public tool: lists notable industrial clients Divya Enco has delivered for.
 */
export default defineTool({
  name: "list_clients",
  title: "List trusted clients",
  description: "Returns the list of well-known industrial clients Divya Enco has worked with.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const clients = ["BHEL", "Adani", "Jindal Power", "L&T"];
    return {
      content: [{ type: "text", text: clients.join(", ") }],
      structuredContent: { clients },
    };
  },
});
