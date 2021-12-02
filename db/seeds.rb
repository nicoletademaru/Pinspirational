# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first
Pin.destroy_all
Pinboard.destroy_all
User.destroy_all

require 'open-uri'

demoUser = User.create(id: 1, username:'demoUser', email:'demoUser@demo.com', password:'demouser1212')
demoUser2 = User.create(id: 2, username:'demoUser2', email:'demoUser2@demo.com', password:'demouser123123')

pinboard1 = Pinboard.create(id: 1, title: 'Plant Palace', user_id: 1)

pin1 = Pin.create(id: 1, title: 'Classic white home decor', description: 'Inspiration for your next remodel', author_id: 1, pinboard_id: 1)
# pin2 = Pin.create(title: 'Plant corner inspo', description: "Indoor picnic with plant ", author_id: 1, pinboard_id: 2)
# pin3 = Pin.create(title: 'Cute dog', author_id: 2, pinboard_id: 1)
# pin4 = Pin.create(title: 'Nude Nails', description: "Acrylic nail inspiration, natural colors", author_id: 1, pinboard_id: 1)
# pin5 = Pin.create(title: "Classic bathroom with fireplace", author_id: 2, pinboard_id: 2)
# pin6 = Pin.create(title: "Waterfall Scene",  description: 'photographer: unknown', author_id: 2, pinboard_id: 2)
# pin7 = Pin.create(title: "Nursery corner", description: 'plants galore', author_id: 1, pinboard_id: 2)

file1 = open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/home-decor.jpeg')
# file2 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/plants.jpeg')
# file3 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dog.jpeg')
# file4 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/nails.jpeg')
# file5 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/bathroom.jpeg')
# file6 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/waterfall.jpeg')
# file7 = URI.open('https://pinspirational-seeds.s3.us-west-1.amazonaws.com/indoorplant.jpeg')

pin1.photo.attach(io: file1, filename: 'home-decor.jpg')
# pin2.photo.attach(io: file2, filename: 'file2.jpg')
# pin3.photo.attach(io: file3, filename: 'file3.jpg')
# pin4.photo.attach(io: file4, filename: 'file4.jpg')
# pin5.photo.attach(io: file5, filename: 'file5.jpg')
# pin6.photo.attach(io: file6, filename: 'file6.jpg')
# pin7.photo.attach(io: file7, filename: 'file7.jpg')