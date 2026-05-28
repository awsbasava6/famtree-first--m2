output "instance_id" {

  value = aws_instance.dev-instance 

}

output "public_ip" {

  value = aws_instance.dev-instance.public_ip

}