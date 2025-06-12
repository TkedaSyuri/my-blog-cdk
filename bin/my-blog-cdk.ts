import * as cdk from "aws-cdk-lib";
import { MyBlogCdkStack } from "../lib/my-blog-cdk-stack";
import "dotenv/config";

const AWS_ACCOUNT = process.env.AWS_ACCOUNT;
const AWS_REGION = process.env.AWS_REGION;

const app = new cdk.App();
new MyBlogCdkStack(app, "MyBlogCdkStack", {
  env: { account: AWS_ACCOUNT, region: AWS_REGION },
});
