export const sampleData = {
  packageVersion: {
    package: {
      ecosystem: "ECOSYSTEM_NPM",
      name: "express",
    },
    version: "4.10.5",
  },
  insight: {
    dependencies: [
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "accepts",
        },
        version: "1.1.4",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "content-disposition",
        },
        version: "0.5.0",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "cookie",
        },
        version: "0.1.2",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "cookie-signature",
        },
        version: "1.0.5",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "debug",
        },
        version: "2.1.3",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "depd",
        },
        version: "1.0.1",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "escape-html",
        },
        version: "1.0.1",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "etag",
        },
        version: "1.5.1",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "finalhandler",
        },
        version: "0.3.2",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "fresh",
        },
        version: "0.2.4",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "media-typer",
        },
        version: "0.3.0",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "merge-descriptors",
        },
        version: "0.0.2",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "methods",
        },
        version: "1.1.0",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "on-finished",
        },
        version: "2.1.1",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "parseurl",
        },
        version: "1.3.3",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "path-to-regexp",
        },
        version: "0.1.3",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "proxy-addr",
        },
        version: "1.0.10",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "qs",
        },
        version: "2.3.3",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "range-parser",
        },
        version: "1.0.3",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "send",
        },
        version: "0.10.1",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "serve-static",
        },
        version: "1.7.2",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "type-is",
        },
        version: "1.5.7",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "utils-merge",
        },
        version: "1.0.0",
      },
      {
        package: {
          ecosystem: "ECOSYSTEM_NPM",
          name: "vary",
        },
        version: "1.0.1",
      },
    ],
    vulnerabilities: [
      {
        id: {
          type: "VULNERABILITY_IDENTIFIER_TYPE_GHSA",
          value: "GHSA-rv95-896h-c2vc",
        },
        summary: "Express.js Open Redirect in malformed URLs",
        aliases: [
          {
            type: "VULNERABILITY_IDENTIFIER_TYPE_CVE",
            value: "CVE-2024-29041",
          },
        ],
        related: [
          {
            value: "CGA-5389-98xc-vr78",
          },
          {
            value: "CGA-w26h-h47r-f6rx",
          },
        ],
        severities: [
          {
            type: "TYPE_CVSS_V3",
            score: "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
            risk: "RISK_MEDIUM",
          },
        ],
        publishedAt: "2024-03-25T19:40:26Z",
        modifiedAt: "2024-03-25T22:24:57Z",
      },
      {
        id: {
          type: "VULNERABILITY_IDENTIFIER_TYPE_GHSA",
          value: "GHSA-qw6h-vgh9-j6wx",
        },
        summary: "express vulnerable to XSS via response.redirect()",
        aliases: [
          {
            type: "VULNERABILITY_IDENTIFIER_TYPE_CVE",
            value: "CVE-2024-43796",
          },
        ],
        related: [
          {
            value: "CGA-8w92-879x-f9wc",
          },
          {
            value: "CGA-jq8v-jx6x-3fpc",
          },
        ],
        severities: [
          {
            type: "TYPE_CVSS_V3",
            score: "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L",
            risk: "RISK_MEDIUM",
          },
          {
            type: "TYPE_CVSS_V4",
            score:
              "CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L",
          },
        ],
        publishedAt: "2024-09-10T19:41:04Z",
        modifiedAt: "2024-11-18T16:27:11Z",
      },
    ],
    projectInsights: [
      {
        project: {
          type: "PROJECT_SOURCE_TYPE_GITHUB",
          name: "github.com/strongloop/express",
          url: "https://github.com/strongloop/express",
        },
        stars: "66020",
        forks: "16984",
        issues: {
          open: "215",
        },
        scorecard: {
          date: "seconds:1735516800",
          score: 7.199999809265137,
          repo: {
            name: "github.com/strongloop/express",
            commit: "b11122be85377375465b2aa103da43301e56f128",
          },
          checks: [
            {
              name: "Packaging",
              score: -1,
              reason: "packaging workflow not detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#packaging",
                description:
                  "Determines if the project is published as a package that others can easily download, install, easily update, and uninstall.",
              },
            },
            {
              name: "Code-Review",
              score: 10,
              reason: "all changesets reviewed",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#code-review",
                description:
                  "Determines if the project requires human code review before pull requests (aka merge requests) are merged.",
              },
            },
            {
              name: "Maintained",
              score: 10,
              reason:
                "24 commit(s) and 12 issue activity found in the last 90 days -- score normalized to 10",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#maintained",
                description:
                  'Determines if the project is "actively maintained".',
              },
            },
            {
              name: "Security-Policy",
              score: 10,
              reason: "security policy file detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#security-policy",
                description:
                  "Determines if the project has published a security policy.",
              },
            },
            {
              name: "Dangerous-Workflow",
              score: 10,
              reason: "no dangerous workflow patterns detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#dangerous-workflow",
                description:
                  "Determines if the project's GitHub Action workflows avoid dangerous patterns.",
              },
            },
            {
              name: "Token-Permissions",
              reason:
                "detected GitHub workflow tokens with excessive permissions",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#token-permissions",
                description:
                  "Determines if the project's workflows follow the principle of least privilege.",
              },
            },
            {
              name: "CII-Best-Practices",
              reason:
                "no effort to earn an OpenSSF best practices badge detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#cii-best-practices",
                description:
                  "Determines if the project has an OpenSSF (formerly CII) Best Practices Badge.",
              },
            },
            {
              name: "Binary-Artifacts",
              score: 10,
              reason: "no binaries found in the repo",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#binary-artifacts",
                description:
                  "Determines if the project has generated executable (binary) artifacts in the source repository.",
              },
            },
            {
              name: "Pinned-Dependencies",
              reason:
                "dependency not pinned by hash detected -- score normalized to 0",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#pinned-dependencies",
                description:
                  "Determines if the project has declared and pinned the dependencies of its build process.",
              },
            },
            {
              name: "Vulnerabilities",
              score: 10,
              reason: "0 existing vulnerabilities detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#vulnerabilities",
                description:
                  "Determines if the project has open, known unfixed vulnerabilities.",
              },
            },
            {
              name: "License",
              score: 10,
              reason: "license file detected",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#license",
                description: "Determines if the project has defined a license.",
              },
            },
            {
              name: "Fuzzing",
              reason: "project is not fuzzed",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#fuzzing",
                description: "Determines if the project uses fuzzing.",
              },
            },
            {
              name: "Signed-Releases",
              score: -1,
              reason: "no releases found",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#signed-releases",
                description:
                  "Determines if the project cryptographically signs release artifacts.",
              },
            },
            {
              name: "Branch-Protection",
              score: -1,
              reason:
                "internal error: error during branchesHandler.setup: internal error: githubv4.Query: Resource not accessible by integration",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#branch-protection",
                description:
                  "Determines if the default and release branches are protected with GitHub's branch protection settings.",
              },
            },
            {
              name: "SAST",
              score: 9,
              reason: "SAST tool detected but not run on all commits",
              documentation: {
                url: "https://github.com/ossf/scorecard/blob/d65d151df8593c89430e014d7e77b6e431e8880c/docs/checks.md#sast",
                description:
                  "Determines if the project uses static code analysis.",
              },
            },
          ],
        },
      },
    ],
    licenses: {
      licenses: [
        {
          licenseId: "MIT",
        },
      ],
    },
    packagePublishedAt: "2014-12-11T05:08:02Z",
    registries: ["https://registry.npmjs.org/"],
    availableVersions: [
      {
        version: "0.14.0",
        publishedAt: "2010-12-29T19:38:25Z",
      },
      {
        version: "0.14.1",
        publishedAt: "2010-12-29T19:38:25Z",
      },
      {
        version: "1.0.0",
        publishedAt: "2010-12-29T19:38:25Z",
      },
      {
        version: "1.0.0-beta",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.0-beta2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.0-rc",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.0-rc2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.0-rc3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.0-rc4",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "1.0.1",
        publishedAt: "2010-12-29T19:38:25Z",
      },
      {
        version: "1.0.2",
        publishedAt: "2011-01-11T02:09:30Z",
      },
      {
        version: "1.0.3",
        publishedAt: "2011-01-13T22:09:07Z",
      },
      {
        version: "1.0.4",
        publishedAt: "2011-02-05T19:13:15Z",
      },
      {
        version: "1.0.5",
        publishedAt: "2011-02-05T19:16:30Z",
      },
      {
        version: "1.0.6",
        publishedAt: "2011-02-07T21:45:32Z",
      },
      {
        version: "1.0.7",
        publishedAt: "2011-02-07T22:26:51Z",
      },
      {
        version: "1.0.8",
        publishedAt: "2011-03-02T02:58:14Z",
      },
      {
        version: "2.0.0",
        publishedAt: "2011-03-18T01:06:40Z",
      },
      {
        version: "2.0.0-beta",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.0.0-beta2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.0.0-beta3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.0.0-rc",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.0.0-rc2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.0.0-rc3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "2.1.0",
        publishedAt: "2011-03-24T20:47:46Z",
      },
      {
        version: "2.1.1",
        publishedAt: "2011-03-29T17:40:33Z",
      },
      {
        version: "2.2.0",
        publishedAt: "2011-03-30T18:40:56Z",
      },
      {
        version: "2.2.1",
        publishedAt: "2011-04-04T19:23:50Z",
      },
      {
        version: "2.2.2",
        publishedAt: "2011-04-12T09:44:57Z",
      },
      {
        version: "2.3.0",
        publishedAt: "2011-04-25T16:50:01Z",
      },
      {
        version: "2.3.1",
        publishedAt: "2011-04-26T22:26:27Z",
      },
      {
        version: "2.3.10",
        publishedAt: "2011-05-27T16:20:13Z",
      },
      {
        version: "2.3.11",
        publishedAt: "2011-06-04T17:51:29Z",
      },
      {
        version: "2.3.12",
        publishedAt: "2011-06-22T20:56:29Z",
      },
      {
        version: "2.3.2",
        publishedAt: "2011-04-27T16:13:33Z",
      },
      {
        version: "2.3.3",
        publishedAt: "2011-05-03T18:31:39Z",
      },
      {
        version: "2.3.4",
        publishedAt: "2011-05-08T17:54:04Z",
      },
      {
        version: "2.3.5",
        publishedAt: "2011-05-20T02:07:37Z",
      },
      {
        version: "2.3.6",
        publishedAt: "2011-05-20T16:42:09Z",
      },
      {
        version: "2.3.7",
        publishedAt: "2011-05-23T22:54:25Z",
      },
      {
        version: "2.3.8",
        publishedAt: "2011-05-25T04:53:16Z",
      },
      {
        version: "2.3.9",
        publishedAt: "2011-05-25T17:18:34Z",
      },
      {
        version: "2.4.0",
        publishedAt: "2011-06-28T16:41:30Z",
      },
      {
        version: "2.4.1",
        publishedAt: "2011-07-06T16:57:15Z",
      },
      {
        version: "2.4.2",
        publishedAt: "2011-07-07T03:15:52Z",
      },
      {
        version: "2.4.3",
        publishedAt: "2011-07-14T19:58:45Z",
      },
      {
        version: "2.4.4",
        publishedAt: "2011-08-05T11:30:40Z",
      },
      {
        version: "2.4.5",
        publishedAt: "2011-08-19T17:13:10Z",
      },
      {
        version: "2.4.6",
        publishedAt: "2011-08-22T17:20:21Z",
      },
      {
        version: "2.4.7",
        publishedAt: "2011-10-05T22:42:01Z",
      },
      {
        version: "2.5.0",
        publishedAt: "2011-10-24T23:01:02Z",
      },
      {
        version: "2.5.1",
        publishedAt: "2011-11-18T16:04:40Z",
      },
      {
        version: "2.5.10",
        publishedAt: "2012-06-15T22:51:26Z",
      },
      {
        version: "2.5.11",
        publishedAt: "2012-07-04T18:24:06Z",
      },
      {
        version: "2.5.2",
        publishedAt: "2011-12-10T19:09:42Z",
      },
      {
        version: "2.5.3",
        publishedAt: "2011-12-30T23:31:24Z",
      },
      {
        version: "2.5.4",
        publishedAt: "2012-01-02T16:36:02Z",
      },
      {
        version: "2.5.5",
        publishedAt: "2012-01-08T20:31:55Z",
      },
      {
        version: "2.5.6",
        publishedAt: "2012-01-13T23:40:26Z",
      },
      {
        version: "2.5.7",
        publishedAt: "2012-02-06T18:06:55Z",
      },
      {
        version: "2.5.8",
        publishedAt: "2012-02-08T20:08:32Z",
      },
      {
        version: "2.5.9",
        publishedAt: "2012-04-03T02:21:28Z",
      },
      {
        version: "3.0.0",
        publishedAt: "2012-10-23T22:30:10Z",
      },
      {
        version: "3.0.0-alpha1",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-alpha2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-alpha3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-alpha4",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-alpha5",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta1",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta4",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta6",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-beta7",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-rc1",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-rc2",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-rc3",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-rc4",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.0-rc5",
        publishedAt: "2013-08-28T17:04:36Z",
      },
      {
        version: "3.0.1",
        publishedAt: "2012-11-02T00:27:52Z",
      },
      {
        version: "3.0.2",
        publishedAt: "2012-11-08T17:15:53Z",
      },
      {
        version: "3.0.3",
        publishedAt: "2012-11-13T17:13:59Z",
      },
      {
        version: "3.0.4",
        publishedAt: "2012-12-06T01:10:32Z",
      },
      {
        version: "3.0.5",
        publishedAt: "2012-12-19T21:45:36Z",
      },
      {
        version: "3.0.6",
        publishedAt: "2013-01-05T02:51:07Z",
      },
      {
        version: "3.1.0",
        publishedAt: "2013-01-26T04:27:35Z",
      },
      {
        version: "3.1.1",
        publishedAt: "2013-04-01T18:26:15Z",
      },
      {
        version: "3.1.2",
        publishedAt: "2013-04-12T19:14:26Z",
      },
      {
        version: "3.10.0",
        publishedAt: "2014-06-03T04:42:47Z",
      },
      {
        version: "3.10.1",
        publishedAt: "2014-06-03T21:19:53Z",
      },
      {
        version: "3.10.2",
        publishedAt: "2014-06-04T01:36:31Z",
      },
      {
        version: "3.10.3",
        publishedAt: "2014-06-06T03:41:14Z",
      },
      {
        version: "3.10.4",
        publishedAt: "2014-06-09T22:56:08Z",
      },
      {
        version: "3.10.5",
        publishedAt: "2014-06-12T04:36:07Z",
      },
      {
        version: "3.11.0",
        publishedAt: "2014-06-20T03:43:59Z",
      },
      {
        version: "3.12.0",
        publishedAt: "2014-06-22T02:35:24Z",
      },
      {
        version: "3.12.1",
        publishedAt: "2014-06-27T00:19:58Z",
      },
      {
        version: "3.13.0",
        publishedAt: "2014-07-04T05:08:17Z",
      },
      {
        version: "3.14.0",
        publishedAt: "2014-07-11T17:31:04Z",
      },
      {
        version: "3.15.0",
        publishedAt: "2014-07-23T05:08:16Z",
      },
      {
        version: "3.15.1",
        publishedAt: "2014-07-26T21:50:06Z",
      },
      {
        version: "3.15.2",
        publishedAt: "2014-07-27T19:55:02Z",
      },
      {
        version: "3.15.3",
        publishedAt: "2014-08-04T22:25:19Z",
      },
      {
        version: "3.16.0",
        publishedAt: "2014-08-06T05:39:52Z",
      },
      {
        version: "3.16.1",
        publishedAt: "2014-08-06T22:06:59Z",
      },
      {
        version: "3.16.10",
        publishedAt: "2014-09-05T06:16:49Z",
      },
      {
        version: "3.16.2",
        publishedAt: "2014-08-07T15:58:53Z",
      },
      {
        version: "3.16.3",
        publishedAt: "2014-08-08T02:31:12Z",
      },
      {
        version: "3.16.4",
        publishedAt: "2014-08-11T02:22:05Z",
      },
      {
        version: "3.16.5",
        publishedAt: "2014-08-12T02:29:20Z",
      },
      {
        version: "3.16.6",
        publishedAt: "2014-08-15T03:52:36Z",
      },
      {
        version: "3.16.7",
        publishedAt: "2014-08-19T02:45:51Z",
      },
      {
        version: "3.16.8",
        publishedAt: "2014-08-28T01:17:12Z",
      },
      {
        version: "3.16.9",
        publishedAt: "2014-08-30T05:23:37Z",
      },
      {
        version: "3.17.0",
        publishedAt: "2014-09-09T03:22:41Z",
      },
      {
        version: "3.17.1",
        publishedAt: "2014-09-09T03:48:36Z",
      },
      {
        version: "3.17.2",
        publishedAt: "2014-09-16T07:18:56Z",
      },
      {
        version: "3.17.3",
        publishedAt: "2014-09-18T17:40:22Z",
      },
      {
        version: "3.17.4",
        publishedAt: "2014-09-20T06:02:17Z",
      },
      {
        version: "3.17.5",
        publishedAt: "2014-09-24T23:41:41Z",
      },
      {
        version: "3.17.6",
        publishedAt: "2014-10-03T04:05:10Z",
      },
      {
        version: "3.17.7",
        publishedAt: "2014-10-08T21:22:35Z",
      },
      {
        version: "3.17.8",
        publishedAt: "2014-10-16T04:36:53Z",
      },
      {
        version: "3.18.0",
        publishedAt: "2014-10-18T05:10:21Z",
      },
      {
        version: "3.18.1",
        publishedAt: "2014-10-23T05:30:25Z",
      },
      {
        version: "3.18.2",
        publishedAt: "2014-10-29T05:14:04Z",
      },
      {
        version: "3.18.3",
        publishedAt: "2014-11-09T23:38:00Z",
      },
      {
        version: "3.18.4",
        publishedAt: "2014-11-23T20:52:49Z",
      },
      {
        version: "3.18.5",
        publishedAt: "2014-12-12T04:24:32Z",
      },
      {
        version: "3.18.6",
        publishedAt: "2014-12-13T02:45:59Z",
      },
      {
        version: "3.19.0",
        publishedAt: "2015-01-09T06:36:21Z",
      },
      {
        version: "3.19.1",
        publishedAt: "2015-01-21T08:23:41Z",
      },
      {
        version: "3.19.2",
        publishedAt: "2015-02-01T20:24:05Z",
      },
      {
        version: "3.2.0",
        publishedAt: "2013-04-15T19:35:06Z",
      },
      {
        version: "3.2.1",
        publishedAt: "2013-04-30T02:17:29Z",
      },
      {
        version: "3.2.2",
        publishedAt: "2013-05-03T19:55:21Z",
      },
      {
        version: "3.2.3",
        publishedAt: "2013-05-07T14:55:36Z",
      },
      {
        version: "3.2.4",
        publishedAt: "2013-05-09T16:18:31Z",
      },
      {
        version: "3.2.5",
        publishedAt: "2013-05-22T04:02:26Z",
      },
      {
        version: "3.2.6",
        publishedAt: "2013-06-03T00:15:56Z",
      },
      {
        version: "3.20.0",
        publishedAt: "2015-02-19T02:53:28Z",
      },
      {
        version: "3.20.1",
        publishedAt: "2015-03-01T04:23:20Z",
      },
      {
        version: "3.20.2",
        publishedAt: "2015-03-17T05:06:28Z",
      },
      {
        version: "3.20.3",
        publishedAt: "2015-05-18T04:06:45Z",
      },
      {
        version: "3.21.0",
        publishedAt: "2015-06-19T01:42:28Z",
      },
      {
        version: "3.21.1",
        publishedAt: "2015-07-06T04:55:30Z",
      },
      {
        version: "3.21.2",
        publishedAt: "2015-07-31T20:17:34Z",
      },
      {
        version: "3.3.0",
        publishedAt: "2013-06-26T17:07:53Z",
      },
      {
        version: "3.3.1",
        publishedAt: "2013-06-27T15:32:58Z",
      },
      {
        version: "3.3.2",
        publishedAt: "2013-07-03T18:25:57Z",
      },
      {
        version: "3.3.3",
        publishedAt: "2013-07-04T20:40:14Z",
      },
      {
        version: "3.3.4",
        publishedAt: "2013-07-08T21:42:52Z",
      },
      {
        version: "3.3.5",
        publishedAt: "2013-08-10T21:51:21Z",
      },
      {
        version: "3.3.6",
        publishedAt: "2013-08-27T20:49:22Z",
      },
      {
        version: "3.3.7",
        publishedAt: "2013-08-28T17:04:42Z",
      },
      {
        version: "3.3.8",
        publishedAt: "2013-09-02T15:01:16Z",
      },
      {
        version: "3.4.0",
        publishedAt: "2013-09-07T19:25:10Z",
      },
      {
        version: "3.4.1",
        publishedAt: "2013-10-16T01:34:32Z",
      },
      {
        version: "3.4.2",
        publishedAt: "2013-10-19T02:04:44Z",
      },
      {
        version: "3.4.3",
        publishedAt: "2013-10-23T18:19:57Z",
      },
      {
        version: "3.4.4",
        publishedAt: "2013-10-29T17:34:18Z",
      },
      {
        version: "3.4.5",
        publishedAt: "2013-11-27T23:54:53Z",
      },
      {
        version: "3.4.6",
        publishedAt: "2013-12-01T20:21:22Z",
      },
      {
        version: "3.4.7",
        publishedAt: "2013-12-11T07:57:53Z",
      },
      {
        version: "3.4.8",
        publishedAt: "2014-01-14T04:51:15Z",
      },
      {
        version: "3.5.0",
        publishedAt: "2014-03-06T22:58:36Z",
      },
      {
        version: "3.5.1",
        publishedAt: "2014-03-25T20:59:05Z",
      },
      {
        version: "3.5.2",
        publishedAt: "2014-04-24T20:40:38Z",
      },
      {
        version: "3.5.3",
        publishedAt: "2014-05-08T17:53:16Z",
      },
      {
        version: "3.6.0",
        publishedAt: "2014-05-09T21:07:22Z",
      },
      {
        version: "3.7.0",
        publishedAt: "2014-05-18T14:42:22Z",
      },
      {
        version: "3.8.0",
        publishedAt: "2014-05-21T06:08:40Z",
      },
      {
        version: "3.8.1",
        publishedAt: "2014-05-28T03:43:39Z",
      },
      {
        version: "3.9.0",
        publishedAt: "2014-05-31T01:38:23Z",
      },
      {
        version: "4.0.0",
        publishedAt: "2014-04-09T20:39:26Z",
      },
      {
        version: "4.0.0-rc1",
        publishedAt: "2014-03-02T16:19:53Z",
      },
      {
        version: "4.0.0-rc2",
        publishedAt: "2014-03-05T06:34:13Z",
      },
      {
        version: "4.0.0-rc3",
        publishedAt: "2014-03-12T01:39:53Z",
      },
      {
        version: "4.0.0-rc4",
        publishedAt: "2014-03-25T02:54:51Z",
      },
      {
        version: "4.1.0",
        publishedAt: "2014-04-24T22:17:52Z",
      },
      {
        version: "4.1.1",
        publishedAt: "2014-04-27T23:50:27Z",
      },
      {
        version: "4.1.2",
        publishedAt: "2014-05-08T18:44:48Z",
      },
      {
        version: "4.10.0",
        publishedAt: "2014-10-24T02:36:30Z",
      },
      {
        version: "4.10.1",
        publishedAt: "2014-10-29T05:21:08Z",
      },
      {
        version: "4.10.2",
        publishedAt: "2014-11-10T00:10:27Z",
      },
      {
        version: "4.10.3",
        publishedAt: "2014-11-24T03:12:32Z",
      },
      {
        version: "4.10.4",
        publishedAt: "2014-11-25T05:19:30Z",
      },
      {
        version: "4.10.5",
        publishedAt: "2014-12-11T05:08:02Z",
      },
      {
        version: "4.10.6",
        publishedAt: "2014-12-13T04:17:13Z",
      },
      {
        version: "4.10.7",
        publishedAt: "2015-01-05T00:40:37Z",
      },
      {
        version: "4.10.8",
        publishedAt: "2015-01-13T17:48:23Z",
      },
      {
        version: "4.11.0",
        publishedAt: "2015-01-14T04:21:56Z",
      },
      {
        version: "4.11.1",
        publishedAt: "2015-01-21T08:34:52Z",
      },
      {
        version: "4.11.2",
        publishedAt: "2015-02-01T20:45:09Z",
      },
      {
        version: "4.12.0",
        publishedAt: "2015-02-23T06:58:39Z",
      },
      {
        version: "4.12.1",
        publishedAt: "2015-03-02T01:13:30Z",
      },
      {
        version: "4.12.2",
        publishedAt: "2015-03-03T05:46:29Z",
      },
      {
        version: "4.12.3",
        publishedAt: "2015-03-17T22:04:53Z",
      },
      {
        version: "4.12.4",
        publishedAt: "2015-05-18T04:41:14Z",
      },
      {
        version: "4.13.0",
        publishedAt: "2015-06-21T06:50:18Z",
      },
      {
        version: "4.13.1",
        publishedAt: "2015-07-06T05:42:59Z",
      },
      {
        version: "4.13.2",
        publishedAt: "2015-07-31T21:10:49Z",
      },
      {
        version: "4.13.3",
        publishedAt: "2015-08-03T05:04:40Z",
      },
      {
        version: "4.13.4",
        publishedAt: "2016-01-22T02:15:21Z",
      },
      {
        version: "4.14.0",
        publishedAt: "2016-06-16T16:43:30Z",
      },
      {
        version: "4.14.1",
        publishedAt: "2017-01-28T22:33:15Z",
      },
      {
        version: "4.15.0",
        publishedAt: "2017-03-01T22:28:55Z",
      },
      {
        version: "4.15.1",
        publishedAt: "2017-03-06T05:08:33Z",
      },
      {
        version: "4.15.2",
        publishedAt: "2017-03-06T13:42:44Z",
      },
      {
        version: "4.15.3",
        publishedAt: "2017-05-17T14:17:40Z",
      },
      {
        version: "4.15.4",
        publishedAt: "2017-08-07T02:12:12Z",
      },
      {
        version: "4.15.5",
        publishedAt: "2017-09-25T05:25:16Z",
      },
      {
        version: "4.16.0",
        publishedAt: "2017-09-28T18:22:30Z",
      },
      {
        version: "4.16.1",
        publishedAt: "2017-09-29T20:38:43Z",
      },
      {
        version: "4.16.2",
        publishedAt: "2017-10-10T03:13:46Z",
      },
      {
        version: "4.16.3",
        publishedAt: "2018-03-12T17:50:14Z",
      },
      {
        version: "4.16.4",
        publishedAt: "2018-10-11T03:59:14Z",
      },
      {
        version: "4.17.0",
        publishedAt: "2019-05-17T01:57:40Z",
      },
      {
        version: "4.17.1",
        publishedAt: "2019-05-26T04:25:34Z",
      },
      {
        version: "4.17.2",
        publishedAt: "2021-12-17T03:48:56Z",
      },
      {
        version: "4.17.3",
        publishedAt: "2022-02-17T02:06:13Z",
      },
      {
        version: "4.18.0",
        publishedAt: "2022-04-25T19:13:24Z",
      },
      {
        version: "4.18.1",
        publishedAt: "2022-04-29T19:33:40Z",
      },
      {
        version: "4.18.2",
        publishedAt: "2022-10-08T20:14:32Z",
      },
      {
        version: "4.18.3",
        publishedAt: "2024-02-29T11:50:55Z",
      },
      {
        version: "4.19.0",
        publishedAt: "2024-03-20T15:14:37Z",
      },
      {
        version: "4.19.1",
        publishedAt: "2024-03-20T22:19:45Z",
      },
      {
        version: "4.19.2",
        publishedAt: "2024-03-25T14:30:36Z",
      },
      {
        version: "4.2.0",
        publishedAt: "2014-05-12T02:04:12Z",
      },
      {
        version: "4.20.0",
        publishedAt: "2024-09-10T02:07:55Z",
      },
      {
        version: "4.21.0",
        publishedAt: "2024-09-11T22:33:36Z",
      },
      {
        version: "4.21.1",
        publishedAt: "2024-10-08T18:41:33Z",
      },
      {
        version: "4.21.2",
        defaultVersion: true,
        publishedAt: "2024-12-05T22:31:40Z",
      },
      {
        version: "4.3.0",
        publishedAt: "2014-05-21T06:14:40Z",
      },
      {
        version: "4.3.1",
        publishedAt: "2014-05-23T23:12:59Z",
      },
      {
        version: "4.3.2",
        publishedAt: "2014-05-29T04:20:38Z",
      },
      {
        version: "4.4.0",
        publishedAt: "2014-05-31T04:02:21Z",
      },
      {
        version: "4.4.1",
        publishedAt: "2014-06-03T01:27:48Z",
      },
      {
        version: "4.4.2",
        publishedAt: "2014-06-10T00:43:04Z",
      },
      {
        version: "4.4.3",
        publishedAt: "2014-06-12T04:42:49Z",
      },
      {
        version: "4.4.4",
        publishedAt: "2014-06-20T21:13:47Z",
      },
      {
        version: "4.4.5",
        publishedAt: "2014-06-27T03:54:22Z",
      },
      {
        version: "4.5.0",
        publishedAt: "2014-07-05T01:04:36Z",
      },
      {
        version: "4.5.1",
        publishedAt: "2014-07-06T23:47:58Z",
      },
      {
        version: "4.6.0",
        publishedAt: "2014-07-12T03:40:29Z",
      },
      {
        version: "4.6.1",
        publishedAt: "2014-07-13T02:19:51Z",
      },
      {
        version: "4.7.0",
        publishedAt: "2014-07-26T01:34:51Z",
      },
      {
        version: "4.7.1",
        publishedAt: "2014-07-26T23:02:44Z",
      },
      {
        version: "4.7.2",
        publishedAt: "2014-07-27T20:02:46Z",
      },
      {
        version: "4.7.3",
        publishedAt: "2014-08-04T20:13:29Z",
      },
      {
        version: "4.7.4",
        publishedAt: "2014-08-04T22:25:30Z",
      },
      {
        version: "4.8.0",
        publishedAt: "2014-08-06T06:50:05Z",
      },
      {
        version: "4.8.1",
        publishedAt: "2014-08-06T22:20:06Z",
      },
      {
        version: "4.8.2",
        publishedAt: "2014-08-07T16:04:06Z",
      },
      {
        version: "4.8.3",
        publishedAt: "2014-08-11T02:29:06Z",
      },
      {
        version: "4.8.4",
        publishedAt: "2014-08-15T04:25:24Z",
      },
      {
        version: "4.8.5",
        publishedAt: "2014-08-19T03:05:35Z",
      },
      {
        version: "4.8.6",
        publishedAt: "2014-08-28T01:52:46Z",
      },
      {
        version: "4.8.7",
        publishedAt: "2014-08-30T05:37:53Z",
      },
      {
        version: "4.8.8",
        publishedAt: "2014-09-05T06:25:37Z",
      },
      {
        version: "4.9.0",
        publishedAt: "2014-09-09T04:33:18Z",
      },
      {
        version: "4.9.1",
        publishedAt: "2014-09-17T06:54:31Z",
      },
      {
        version: "4.9.2",
        publishedAt: "2014-09-18T03:52:10Z",
      },
      {
        version: "4.9.3",
        publishedAt: "2014-09-18T17:45:34Z",
      },
      {
        version: "4.9.4",
        publishedAt: "2014-09-20T06:07:23Z",
      },
      {
        version: "4.9.5",
        publishedAt: "2014-09-25T00:24:49Z",
      },
      {
        version: "4.9.6",
        publishedAt: "2014-10-09T02:35:55Z",
      },
      {
        version: "4.9.7",
        publishedAt: "2014-10-10T20:43:34Z",
      },
      {
        version: "4.9.8",
        publishedAt: "2014-10-18T02:05:05Z",
      },
      {
        version: "5.0.0",
        publishedAt: "2024-09-10T04:40:34Z",
      },
      {
        version: "5.0.0-alpha.1",
        publishedAt: "2014-11-07T02:54:34Z",
      },
      {
        version: "5.0.0-alpha.2",
        publishedAt: "2015-07-07T05:46:20Z",
      },
      {
        version: "5.0.0-alpha.3",
        publishedAt: "2017-01-29T03:28:41Z",
      },
      {
        version: "5.0.0-alpha.4",
        publishedAt: "2017-03-02T00:30:07Z",
      },
      {
        version: "5.0.0-alpha.5",
        publishedAt: "2017-03-06T13:51:05Z",
      },
      {
        version: "5.0.0-alpha.6",
        publishedAt: "2017-09-25T05:32:38Z",
      },
      {
        version: "5.0.0-alpha.7",
        publishedAt: "2018-10-27T03:12:11Z",
      },
      {
        version: "5.0.0-alpha.8",
        publishedAt: "2020-03-26T00:57:02Z",
      },
      {
        version: "5.0.0-beta.1",
        publishedAt: "2022-02-15T01:11:25Z",
      },
      {
        version: "5.0.0-beta.2",
        publishedAt: "2024-03-21T03:01:22Z",
      },
      {
        version: "5.0.0-beta.3",
        publishedAt: "2024-03-25T14:42:32Z",
      },
      {
        version: "5.0.1",
        publishedAt: "2024-10-08T19:42:44Z",
      },
    ],
    dependencyGraph: {
      dependencies: [
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "express",
            },
            version: "4.10.5",
          },
          relation: "RELATION_SELF",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "accepts",
            },
            version: "1.1.4",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "content-disposition",
            },
            version: "0.5.0",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "cookie",
            },
            version: "0.1.2",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "cookie-signature",
            },
            version: "1.0.5",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "crc",
            },
            version: "3.2.1",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "debug",
            },
            version: "2.1.3",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "depd",
            },
            version: "1.0.1",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "destroy",
            },
            version: "1.0.3",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "ee-first",
            },
            version: "1.1.0",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "escape-html",
            },
            version: "1.0.1",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "etag",
            },
            version: "1.5.1",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "finalhandler",
            },
            version: "0.3.2",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "forwarded",
            },
            version: "0.1.2",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "fresh",
            },
            version: "0.2.4",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "ipaddr.js",
            },
            version: "1.0.5",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "media-typer",
            },
            version: "0.3.0",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "merge-descriptors",
            },
            version: "0.0.2",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "methods",
            },
            version: "1.1.0",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "mime",
            },
            version: "1.2.11",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "mime-db",
            },
            version: "1.12.0",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "mime-types",
            },
            version: "2.0.14",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "ms",
            },
            version: "0.6.2",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "ms",
            },
            version: "0.7.0",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "negotiator",
            },
            version: "0.4.9",
          },
          relation: "RELATION_INDIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "on-finished",
            },
            version: "2.1.1",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "parseurl",
            },
            version: "1.3.3",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "path-to-regexp",
            },
            version: "0.1.3",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "proxy-addr",
            },
            version: "1.0.10",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "qs",
            },
            version: "2.3.3",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "range-parser",
            },
            version: "1.0.3",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "send",
            },
            version: "0.10.1",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "serve-static",
            },
            version: "1.7.2",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "type-is",
            },
            version: "1.5.7",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "utils-merge",
            },
            version: "1.0.0",
          },
          relation: "RELATION_DIRECT",
        },
        {
          packageVersion: {
            package: {
              ecosystem: "ECOSYSTEM_NPM",
              name: "vary",
            },
            version: "1.0.1",
          },
          relation: "RELATION_DIRECT",
        },
      ],
      dependencyRelations: [
        {
          to: 1,
          requirement: "~1.1.4",
        },
        {
          to: 2,
          requirement: "0.5.0",
        },
        {
          to: 3,
          requirement: "0.1.2",
        },
        {
          to: 4,
          requirement: "1.0.5",
        },
        {
          to: 6,
          requirement: "~2.1.0",
        },
        {
          to: 7,
          requirement: "~1.0.0",
        },
        {
          to: 10,
          requirement: "1.0.1",
        },
        {
          to: 11,
          requirement: "~1.5.1",
        },
        {
          to: 12,
          requirement: "0.3.2",
        },
        {
          to: 14,
          requirement: "0.2.4",
        },
        {
          to: 16,
          requirement: "0.3.0",
        },
        {
          to: 17,
          requirement: "0.0.2",
        },
        {
          to: 18,
          requirement: "1.1.0",
        },
        {
          to: 25,
          requirement: "~2.1.1",
        },
        {
          to: 26,
          requirement: "~1.3.0",
        },
        {
          to: 27,
          requirement: "0.1.3",
        },
        {
          to: 28,
          requirement: "~1.0.4",
        },
        {
          to: 29,
          requirement: "2.3.3",
        },
        {
          to: 30,
          requirement: "~1.0.2",
        },
        {
          to: 31,
          requirement: "0.10.1",
        },
        {
          to: 32,
          requirement: "~1.7.1",
        },
        {
          to: 33,
          requirement: "~1.5.4",
        },
        {
          to: 34,
          requirement: "1.0.0",
        },
        {
          to: 35,
          requirement: "~1.0.0",
        },
        {
          from: 1,
          to: 21,
          requirement: "~2.0.4",
        },
        {
          from: 1,
          to: 24,
          requirement: "0.4.9",
        },
        {
          from: 6,
          to: 23,
          requirement: "0.7.0",
        },
        {
          from: 11,
          to: 5,
          requirement: "3.2.1",
        },
        {
          from: 12,
          to: 6,
          requirement: "~2.1.0",
        },
        {
          from: 12,
          to: 10,
          requirement: "1.0.1",
        },
        {
          from: 12,
          to: 25,
          requirement: "~2.1.1",
        },
        {
          from: 21,
          to: 20,
          requirement: "~1.12.0",
        },
        {
          from: 25,
          to: 9,
          requirement: "1.1.0",
        },
        {
          from: 28,
          to: 13,
          requirement: "~0.1.0",
        },
        {
          from: 28,
          to: 15,
          requirement: "1.0.5",
        },
        {
          from: 31,
          to: 6,
          requirement: "~2.1.0",
        },
        {
          from: 31,
          to: 7,
          requirement: "~1.0.0",
        },
        {
          from: 31,
          to: 8,
          requirement: "1.0.3",
        },
        {
          from: 31,
          to: 10,
          requirement: "1.0.1",
        },
        {
          from: 31,
          to: 11,
          requirement: "~1.5.0",
        },
        {
          from: 31,
          to: 14,
          requirement: "0.2.4",
        },
        {
          from: 31,
          to: 19,
          requirement: "1.2.11",
        },
        {
          from: 31,
          to: 22,
          requirement: "0.6.2",
        },
        {
          from: 31,
          to: 25,
          requirement: "~2.1.1",
        },
        {
          from: 31,
          to: 30,
          requirement: "~1.0.2",
        },
        {
          from: 32,
          to: 10,
          requirement: "1.0.1",
        },
        {
          from: 32,
          to: 26,
          requirement: "~1.3.0",
        },
        {
          from: 32,
          to: 31,
          requirement: "0.10.1",
        },
        {
          from: 32,
          to: 34,
          requirement: "1.0.0",
        },
        {
          from: 33,
          to: 16,
          requirement: "0.3.0",
        },
        {
          from: 33,
          to: 21,
          requirement: "~2.0.9",
        },
      ],
    },
  },
};
