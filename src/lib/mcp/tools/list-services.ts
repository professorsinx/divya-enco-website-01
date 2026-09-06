import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

/**
 * Public tool: lists the engineering & construction services Divya Enco offers.
 * Static company info — safe to expose without auth.
 */
export default defineTool({
  name: "list_services",
  title: "List Divya Enco services",
  description:
    "Returns the engineering, fabrication, and construction services Divya Enco delivers to industrial clients.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      {
        name: "Heavy Fabrication",
        description:
          "Precision heavy structural fabrication for power, refinery, and process plants.",
      },
      {
        name: "Precision Machining",
        description:
          "CNC and conventional machining of critical components with tight tolerances.",
      },
      {
        name: "Industrial Construction",
        description:
          "Turnkey site construction, erection, and commissioning for industrial infrastructure.",
      },
      {
        name: "Piping & Pipeline Systems",
        description:
          "Design, fabrication, and installation of high-pressure piping and pipelines.",
      },
      {
        name: "Plant Maintenance & Shutdowns",
        description:
          "Planned maintenance, overhauls, and shutdown execution for continuous-process plants.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
