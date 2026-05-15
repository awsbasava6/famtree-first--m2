variable "vpc_id" {
  type = string
}

variable "security_group_name" {
  type = string
}

variable "security_group_description" {
  type = string
}

variable "http_cidr" {
  type    = string
  default = "0.0.0.0/0"
}

variable "ssh_cidr" {
  type    = string
  default = "0.0.0.0/0"
}