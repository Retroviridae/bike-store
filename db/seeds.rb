# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "creating users"

u1 = User.create(username:"Updog", password:"1234")
u2 = User.create(username:"KateSkate", password:"1234")
u3 = User.create(username:"PapaBear", password:"1234")
u4 = User.create(username:"ConManSam", password:"1234")
u5 = User.create(username:"BenKenobi", password:"1234")