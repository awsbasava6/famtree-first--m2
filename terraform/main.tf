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



module "s3_bucket" {

  source = "./modules/s3"

  bucket_name = var.bucket_name

  environment = var.environment

}

module "ec2" {

  source = "./modules/ec2"

  instance_name = var.instance_name

  ami_id = var.ami_id

  instance_type = var.instance_type

  subnet_id = module.vpc.public_subnet_id

  security_group_id = module.security_group.security_group_id

  key_name = var.key_name

}
