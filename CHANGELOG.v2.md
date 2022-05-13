# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.24.1](https://github.com/aws/aws-cdk/compare/v2.24.0...v2.24.1) (2022-05-12)

## [2.24.0](https://github.com/aws/aws-cdk/compare/v2.23.0...v2.24.0) (2022-05-11)


### Features

* **lambda:** nodejs16.x runtime ([#20261](https://github.com/aws/aws-cdk/issues/20261)) ([edf7c86](https://github.com/aws/aws-cdk/commit/edf7c864f90acc4f29ff78ff0de74e324f8b85ee))


### Bug Fixes

* **cognito:** UserPoolDomain.baseUrl() does not return FIPS-compliant url for gov cloud regions ([#20200](https://github.com/aws/aws-cdk/issues/20200)) ([dd10df1](https://github.com/aws/aws-cdk/commit/dd10df1c84eaa752e3587a6b1f0c7e28b9d508e3)), closes [#20182](https://github.com/aws/aws-cdk/issues/20182) [#12500](https://github.com/aws/aws-cdk/issues/12500)
* **stepfunctions:** map property maxConcurrency is not token-aware ([#20279](https://github.com/aws/aws-cdk/issues/20279)) ([14be764](https://github.com/aws/aws-cdk/commit/14be76497b85f6cd9083620ebe5d890359540aa5)), closes [#20152](https://github.com/aws/aws-cdk/issues/20152)

## [2.23.0](https://github.com/aws/aws-cdk/compare/v2.22.0...v2.23.0) (2022-05-04)


### Features

* **cfnspec:** cloudformation spec v68.0.0 ([#20065](https://github.com/aws/aws-cdk/issues/20065)) ([f199fad](https://github.com/aws/aws-cdk/commit/f199faddc0b8e565aa413e480e51d25fed5321bf))
* **cloudwatch:** Add CustomWidget ([#19327](https://github.com/aws/aws-cdk/issues/19327)) ([489340e](https://github.com/aws/aws-cdk/commit/489340ea383c9130c315853afae0137b1fa03eb0)), closes [#17579](https://github.com/aws/aws-cdk/issues/17579)
* **cloudwatch:** expose dashboardName property on the L2 Dashboard construct ([#17721](https://github.com/aws/aws-cdk/issues/17721)) ([8cb5dff](https://github.com/aws/aws-cdk/commit/8cb5dff400e0143b86494f11c565d981c74f875a)), closes [#17648](https://github.com/aws/aws-cdk/issues/17648)
* **ec2:** add i4i instance type ([#20134](https://github.com/aws/aws-cdk/issues/20134)) ([64c5064](https://github.com/aws/aws-cdk/commit/64c50640e7f5897f08af3f86cd28a1dab3cd2430))
* **iam:** add convenience method `inOrganization` to ArnPrincipal ([#20109](https://github.com/aws/aws-cdk/issues/20109)) ([c545bfe](https://github.com/aws/aws-cdk/commit/c545bfe2a3ccb53fa5ae2eb725a1696677703c0a)), closes [/github.com/aws/aws-cdk/pull/19975#discussion_r857385168](https://github.com/aws//github.com/aws/aws-cdk/pull/19975/issues/discussion_r857385168) [#19975](https://github.com/aws/aws-cdk/issues/19975)
* **lambda:** `function.addAlias()` simplifies Alias creation ([#20034](https://github.com/aws/aws-cdk/issues/20034)) ([a79bc47](https://github.com/aws/aws-cdk/commit/a79bc47aaa6737628562c251e2f1990b2c7b88ef))
* **rds:** add secret rotation to `DatabaseClusterFromSnapshot` ([#20020](https://github.com/aws/aws-cdk/issues/20020)) ([abc3502](https://github.com/aws/aws-cdk/commit/abc3502eef9b1b950f4e9d2c3f5f44b7e2f6476d)), closes [#12877](https://github.com/aws/aws-cdk/issues/12877)
* **servicecatalog:** graduate to stable 🚀 ([#19515](https://github.com/aws/aws-cdk/issues/19515)) ([4764591](https://github.com/aws/aws-cdk/commit/4764591a59d63026584f1898046974a1a166e166))
