import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";

function authenticationInterceptor(token, tenant) {
  return (next) => async (req) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return await next(req);
  };
}

async function main() {
  const token =
    process.env.SAFEDEP_API_KEY ||
    "sfd_IvA16sAlas4vGSjUw322g3pbglHmLtcD0Ucwk5EupBUCYRiL-WROvfRm";
  if (!token) {
    console.error("SAFEDEP_API_KEY is required");
    process.exit(1);
  }

  const tenantId =
    process.env.SAFEDEP_TENANT_ID || "01JMWH8ZEJ4DYD2PYQYW23Q2EK";
  if (!tenantId) {
    console.error("SAFEDEP_TENANT_ID is required");
    process.exit(1);
  }

  const transport = createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)],
  });

  const client = createPromiseClient(InsightService, transport);
  const res = await client.getPackageVersionInsight({
    packageVersion: {
      package: {
        ecosystem: Ecosystem.GO,
        name: "github.com/safedep/vet",
      },
      version: "v1.8.0",
    },
  });

  console.log(JSON.stringify(res.toJson(), null, 2));
}

main();
