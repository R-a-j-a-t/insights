export const getHasData = (dataConfig = []) => dataConfig.length > 0;

export const getDependencyGraphData = (dependencyGraph) => {
  const { dependencies: packageDeps, dependencyRelations } = dependencyGraph,
    selfPackage = packageDeps.find((e) => e.relation === "RELATION_SELF"),
    {
      package: { name: selfPackageName },
      version: selfPackageVersion,
    } = selfPackage.packageVersion,
    graphData = dependencyRelations.reduce((res, e) => {
      const {
        package: { name: packageDepsName },
        version: packageDepsVersion,
      } = packageDeps[e.to].packageVersion;

      if (!e.from || !res.some((el) => el._name === packageDepsName)) {
        res.push({
          _name: packageDepsName,
          _deps: [selfPackageName],
          Title: packageDepsName + " v-" + packageDepsVersion,
        });
      } else {
        res.forEach((el) => {
          const fromPackageDepsName =
            packageDeps[e.from].packageVersion.package.name;
          if (el._name === packageDepsName) {
            el._deps.push(fromPackageDepsName);
          }
        });
      }

      return res;
    }, []);

  graphData.unshift({
    _name: selfPackageName,
    Title: selfPackageName + " v-" + selfPackageVersion,
  });

  return graphData;
};
