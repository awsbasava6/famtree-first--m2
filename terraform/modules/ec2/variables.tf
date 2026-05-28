variable "instance_name" {

  description = "EC2 instance name"

  type = string

}

variable "ami_id" {

  description = "Ubuntu AMI ID"

  type = string

}

variable "instance_type" {

  description = "EC2 instance type"

  type = string

}

variable "subnet_id" {

  description = "Subnet ID"

  type = string

}

variable "security_group_id" {

  description = "Security Group ID"

  type = string

}

variable "key_name" {

  description = "EC2 Key Pair"

  type = string

}