output "vpc_id" {
  value = module.vpc.vpc_id
}

output "security_group_id" {
  value = module.security_group.security_group_id
}

output "bucket_name" {

  value = module.s3_bucket.bucket_name

}

output "bucket_arn" {

  value = module.s3_bucket.bucket_arn

}

output "ec2_public_ip" {

  value = module.ec2.public_ip

}

output "ecr_repository_url" {

  value = module.ecr.repository_url

}