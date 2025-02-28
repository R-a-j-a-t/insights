import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";

import { sampleData } from "./sample.js";
import { SAFEDEP_API_KEY, SAFEDEP_TENANT_ID } from "@/secrets.js";

function authenticationInterceptor(token, tenant) {
  return (next) => async (req) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return await next(req);
  };
}

async function main() {
  const token = process.env.SAFEDEP_API_KEY || SAFEDEP_API_KEY; // Unable to add .env file to sandbox
  if (!token) {
    console.error("SAFEDEP_API_KEY is required");
    process.exit(1);
  }

  const tenantId = process.env.SAFEDEP_TENANT_ID || SAFEDEP_TENANT_ID;
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
  try {
    const res = await client.getPackageVersionInsight({
      packageVersion: {
        package: {
          ecosystem: Ecosystem.GO,
          name: "github.com/safedep/vet",
        },
        version: "v1.8.0",
      },
    });

    return res;
  } catch (err) {
    return [sampleData];
  }

  // console.log(JSON.stringify(res.toJson(), null, 2));
}

export default main;
