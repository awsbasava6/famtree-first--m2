variable "security_group" {
  description = "Security group name"
  type        = string
}

variable "security_group_description" {
  description = "Security group description"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "http_cidr" {
  description = "Allowed HTTP CIDR"
  type        = list(string)
}


variable "ssh_cidr" {
  description = "Allowed SSH CIDR"
  type        = list(string)
}
