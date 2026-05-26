output "instance_id" {

  value = aws_instance.this.id

}

output "public_ip" {

  value = aws_instance.dev-instance.public_ip

}