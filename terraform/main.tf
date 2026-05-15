terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
module "vpc" {
  source = "./modules/vpc"

  vpc_cidr           = "10.0.0.0/16"
  public_subnet_cidr = "10.0.1.0/24"
  availability_zone  = "us-east-1a"
}

module "security_group" {
  source = "./modules/security-group"

  vpc_id                     = module.vpc.vpc_id
  security_group_name        = "famtree-sg"
  security_group_description = "Allow HTTP and SSH"
}



