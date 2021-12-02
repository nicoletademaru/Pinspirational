# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first
Pin.destroy_all

require 'open-uri'

# pin1 = Pin.create(title: 'Favorite destinations', description: 'Paris, France', author_id: 1, pinboard_id: 1)
# pin2 = Pin.create(title: 'Plant corner inspo', description: "Indoor picnic with plant ", author_id: 1, pinboard_id: 2)
# pin3 = Pin.create(title: 'Cute dog', author_id: 2, pinboard_id: 1)
# pin4 = Pin.create(title: 'Nude Nails', description: "Acrylic nail inspiration, natural colors", author_id: 1, pinboard_id: 1)
# pin5 = Pin.create(title: "Classic bathroom with fireplace", author_id: 2, pinboard_id: 2)
# pin6 = Pin.create(title: "Waterfall Scene",  description: 'photographer: unknown', author_id: 2, pinboard_id: 2)
# pin7 = Pin.create(title: "Nursery corner", description: 'plants galore', author_id: 1, pinboard_id: 2)


# file1 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/BH1mUoo2Yh24LE7P4B2E4oLY')
# file2 = open("https://pinspirational-dev.s3.us-west-1.amazonaws.com/KcFv6xcPMmokx9bKun24WQDz")
# file3 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/DdFgrFZhaBjjpFXAfVDmv9Zr')
# file4 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/VGGipsFgaXYHSg3b435MLaMM')
# file5 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/zfuPZA5FrHYMMYN8MJXnPGfG')
# file6 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/VDnEYFT1nbPmEs2rMd7p5MkP')
# file7 = open('https://pinspirational-dev.s3.us-west-1.amazonaws.com/T3iceMVNaqscSyD3mfmbny8J')

# pin1.avatar.attach(io: file1, filename: 'file1.jpg')
# pin2.avatar.attach(io: file2, filename: 'file2.jpg')
# pin3.avatar.attach(io: file3, filename: 'file3.jpg')
# pin4.avatar.attach(io: file4, filename: 'file4.jpg')
# pin5.avatar.attach(io: file5, filename: 'file5.jpg')
# pin6.avatar.attach(io: file6, filename: 'file6.jpg')
# pin7.avatar.attach(io: file7, filename: 'file7.jpg')

Pinboard.destroy_all

pinboard1 = Pinboard.create(title: 'Plant Palace', user_id: 5)

User.destroy_all

demoUser = User.create(username:'demoUser', email:'demoUser@demo.com', password:'demouser1212')
demoUser2 = User.create(username:'demoUser2', email:'demoUser2@demo.com', password:'demouser123123')



