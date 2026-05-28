variable "repository_name"  {

  description = "ECR Repository Name"

  type = string

}

variable "image_tag_mutability" {

  description = "Image tag mutability"

  type = string

  default = "MUTABLE"

}